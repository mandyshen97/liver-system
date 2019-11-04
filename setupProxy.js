// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(proxy('/seal', {
//     target: 'http://192.168.2.222:8080/seal',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/seal': ''
//     }
//   }));
// };