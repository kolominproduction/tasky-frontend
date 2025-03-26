import 'dotenv/config';
import path from 'path';
import { Configuration } from 'webpack';

import { EnvVariables, WebpackOptions, WebpackPaths } from './config/webpack/types';
import { webpackConfig } from './config/webpack/webpackConfig';

export default (env: EnvVariables) => {
  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src', ''),
  };

  const port = env.port || process.env.PORT || 3000;
  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';

  const envVars = {
    __IS_DEV__: JSON.stringify(isDev),
    'process.env.NODE_ENV': JSON.stringify(env.mode),
    'process.env.PORT': JSON.stringify(process.env.PORT || port),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  };

  const options: WebpackOptions = {
    paths,
    port: +port,
    isDev,
    mode,
    envs: envVars,
  };

  const config: Configuration = webpackConfig(options);

  return config;
};
