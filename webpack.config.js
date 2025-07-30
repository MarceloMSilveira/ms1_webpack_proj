import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default (env,argv) => {
  const isDev = argv.mode === 'development';
  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '',
    },
    devtool: isDev ? 'source-map' : false, // adicionar source-map
    devServer: isDev 
      ? {
          static: './dist',
          open: true,
          hot: true,
          watchFiles: ['frontend/*.html'], // 👈 assiste arquivos HTML
        }
      : undefined,
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin(
        {
          template:'./frontend/index.html',
          minify: !isDev
        })
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        },
        {
          test: /\.css$/i,
          use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
        }
      ]
    },
    optimization: {
      minimize: !isDev,
      minimizer: [
        '...', // isso mantém os minimizers padrão do webpack (como Terser)
        new CssMinimizerPlugin(), // adiciona a minificação de CSS
      ],
    },
  }
};
