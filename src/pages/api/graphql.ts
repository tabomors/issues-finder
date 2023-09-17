import type { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { str, num, cleanEnv } from 'envalid';
import { kv } from '@vercel/kv';
import { createAppAuth } from '@octokit/auth-app';

const env = cleanEnv(process.env, {
  API_TOKEN: str({ default: '' }),
  GH_APP_ID: num(),
  GH_APP_INSTALLATION_ID: num(),
  GH_APP_PRIVATE_KEY: str(),
  GH_APP_CLIENT_ID: str(),
  GH_APP_CLIENT_SECRET: str(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

type NextRequestHandler = (req: NextApiRequest, res: NextApiResponse) => void;

export const auth = (handler: NextRequestHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    // NOTE: for local development
    if (env.API_TOKEN) {
      req.headers.authorization = `Bearer ${env.API_TOKEN}`;
      return handler(req, res);
    }

    const token = await kv.get<string>('token');

    if (token) {
      req.headers.authorization = `Bearer ${token}`;
      return handler(req, res);
    }

    const auth = createAppAuth({
      appId: env.GH_APP_ID,
      installationId: env.GH_APP_INSTALLATION_ID,
      privateKey: Buffer.from(env.GH_APP_PRIVATE_KEY, 'base64').toString(),
      clientId: env.GH_APP_CLIENT_ID,
      clientSecret: env.GH_APP_CLIENT_SECRET,
    });

    const installationAuthentication = await auth({
      type: 'installation',
    });

    req.headers.authorization = `Bearer ${installationAuthentication.token}`;

    kv.set('token', installationAuthentication.token, {
      pxat: new Date(installationAuthentication.expiresAt).getTime(),
      nx: true,
    });

    return handler(req, res);
  };
};

const proxy = createProxyMiddleware({
  target: 'https://api.github.com/graphql',
  pathRewrite: { '^/api/graphql': '' },
  changeOrigin: true,
});

export default auth(proxy as NextRequestHandler);
