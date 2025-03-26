export interface WebpackPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type WebpackMode = 'production' | 'development';

export interface WebpackOptions {
  port: number;
  paths: WebpackPaths;
  mode: WebpackMode;
  isDev: boolean;
  envs: Record<string, string | number>;
}

export interface EnvVariables {
  mode: WebpackMode;
  port?: number | string;
}
