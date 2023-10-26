const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://learn.microsoft.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
