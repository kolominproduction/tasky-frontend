import { Configuration } from 'webpack';

import { WebpackOptions } from './types';

export const webpackResolvers = (options: WebpackOptions): Configuration['resolve'] => {
  return {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
};
