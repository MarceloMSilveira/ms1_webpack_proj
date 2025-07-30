import HtmlWebpackPlugin from 'html-webpack-plugin';
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
      clean: true
    },
    //devtool: isDev ? 'source-map' : false, -> adicionar source-map
    devServer: isDev 
      ? {
          static: './dist',
          open: true,
          hot: true,
          watchFiles: ['frontend/*.html'], // 👈 assiste arquivos HTML
        }
      : undefined,
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
          use: ["style-loader", "css-loader"],
        },
      ]
    },
    plugins: [new HtmlWebpackPlugin(
      {
        template:'./frontend/index.html',
        minify: !isDev
      }
    )],
  }
};
