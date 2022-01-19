const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://121.40.190.234:8083/uav_platform/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}