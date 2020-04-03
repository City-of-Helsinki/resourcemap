/* eslint-disable global-require */
const addDevOpsMiddleware = require('./addDevOpsMiddleware');

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  // Always enable devops middleware. This enables two endpoints the
  // infra uses to determine when the app is ready.
  addDevOpsMiddleware(app);

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
