const express = require("express");
const next = require("next");
const proxyMiddleware = require("http-proxy-middleware");

const proxy = {
  "/api": {
    target: "https://api.github.com/graphql",
    pathRewrite: { "^/api": "" },
    changeOrigin: true
  }
};

const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({
  dir: ".", // base directory where everything is, could move to src later
  // TODO: get it from the process.env
  dev: true
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const app = express();

    app.use((req, res, next) => {
      console.log(`Request url is ${req.url}`)
      next()
    })

    Object.keys(proxy).forEach(context => {
      app.use(proxyMiddleware(context, proxy[context]));
    });

    // Default catch-all handler to allow Next.js to handle all other routes
    app.all("*", (req, res) => handle(req, res));

    app.listen(port, () => {
      console.log(`App listen on port ${port}`);
    });
  })
  .catch(err => {
    console.log("An error occurred, unable to start the app");
    console.log(err);
  });
