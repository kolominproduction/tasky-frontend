import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { WebpackOptions } from './types';

export const webpackPlugins = (options: WebpackOptions): Configuration['plugins'] => {
  const { paths, isDev } = options;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  return plugins;
};
