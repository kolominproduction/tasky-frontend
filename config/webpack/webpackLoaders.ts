import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';

import { WebpackOptions } from './types';

export const webpackLoaders = (options: WebpackOptions): ModuleOptions['rules'] => {
  const { isDev } = options;

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
          },
        },
      },
      'postcss-loader',
    ],
  };

  const babelLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };
  return [cssLoader, babelLoader];
};
