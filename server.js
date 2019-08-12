const express = require('express');
const next = require('next');
const proxyMiddleware = require('http-proxy-middleware');
require('dotenv').config();

const ENV = process.env.NODE_ENV;
const DEV = ENV !== 'production';

const proxy = {
  '/graphql': {
    target: 'https://api.github.com/graphql',
    pathRewrite: { '^/graphql': '' },
    changeOrigin: true
  }
};

const port = parseInt(process.env.PORT, 10) || 3000;

const appNext = next({
  dir: '.', // base directory where everything is, could move to src later
  // TODO: get it from the process.env
  dev: DEV
});

const handle = appNext.getRequestHandler();

const logger = (req, _, next) => {
  console.log(`Request url is ${req.url}`);
  next();
};

const withToken = (req, _, next) => {
  req.headers['authorization'] = `Bearer ${process.env.API_TOKEN}`;
  next();
};

appNext
  .prepare()
  .then(() => {
    const app = express();

    app.use(withToken);
    app.use(logger);

    Object.keys(proxy).forEach(context => {
      app.use(proxyMiddleware(context, proxy[context]));
    });

    app.get('/issue/:id', (req, res) => {
      return appNext.render(req, res, '/issue', {
        id: req.params.id
      });
    });

    // Default catch-all handler to allow Next.js to handle all other routes
    app.all('*', (req, res) => handle(req, res));

    app.listen(port, () => {
      console.log(`App listen on port ${port}`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the app');
    console.log(err);
  });
