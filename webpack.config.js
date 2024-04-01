const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''), // Servir desde el directorio raíz
    },
    compress: true,
    port: 3000,
    open: true,
    devMiddleware: {
      publicPath: '/', // Ruta pública donde se sirven los archivos estáticos
    },
  },
};
