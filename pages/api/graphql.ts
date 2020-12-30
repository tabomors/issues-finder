import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createProxyMiddleware({
  target: 'https://api.github.com/graphql',
  pathRewrite: { '^/api/graphql': '' },
  changeOrigin: true,
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
