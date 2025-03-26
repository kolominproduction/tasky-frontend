import type { Configuration } from 'webpack';

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { WebpackOptions } from './types';
import { webpackDevServer } from './webpackDevServer';
import { webpackLoaders } from './webpackLoaders';
import { webpackOutput } from './webpackOutput';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';

export const webpackConfig = (options: WebpackOptions): Configuration => {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: webpackOutput(options),
    plugins: webpackPlugins(options),
    resolve: webpackResolvers(options),
    module: {
      rules: webpackLoaders(options),
    },
    devServer: isDev ? webpackDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    optimization: { minimize: !isDev, minimizer: [`...`, new CssMinimizerPlugin()] },
  };
};
