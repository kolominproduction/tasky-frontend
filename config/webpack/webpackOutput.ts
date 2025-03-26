import { Configuration } from 'webpack';

import { WebpackOptions } from './types';

export const webpackOutput = (options: WebpackOptions): Configuration['output'] => {
  return {
    filename: '[name].[contenthash].js',
    path: options.paths.output,
    clean: true,
  };
};
