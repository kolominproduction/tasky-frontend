import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { WebpackOptions } from './types';

export const webpackDevServer = (options: WebpackOptions): DevServerConfiguration => {
  const { port } = options;
  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
};
