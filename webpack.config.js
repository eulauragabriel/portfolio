const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Arquivo final gerado
    clean: true, // Limpa o diretório 'dist' antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpila arquivos .js e .jsx
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Carrega arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Gerencia imagens
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Permite omitir extensões ao importar arquivos
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usa o arquivo HTML personalizado
      favicon: './src/assets/star.png', // Favicon (opcional)
    }),
  ],
  devServer: {
    static: './dist', // Serve arquivos estáticos
    port: 3000, // Define a porta do servidor
    open: true, // Abre o navegador automaticamente
    compress: true, // Habilita gzip para melhorar a performance
    historyApiFallback: true, // Corrige problemas de navegação em rotas React
    client: {
      logging: 'warn', // Reduz os logs no console do navegador
    },
  },
  stats: 'minimal', // Reduz os logs no terminal
  mode: 'development', // Define o modo como desenvolvimento
};
