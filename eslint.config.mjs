import path from 'path';
import { fileURLToPath } from 'url';

import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['build/', 'node_modules/', 'config/', '**/*.spec.{ts,tsx}', '**/*.config.*']),
  { files: ['src/**/*.{ts,tsx}'] },
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier',
    ),

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [['@', './src/']],
          extensions: ['.ts', '.tsx'],
        },
        paths: ['src'],
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: pluginPrettier,
    },

    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        // project: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      '@typescript-eslint/no-shadow': 0,
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-absolute-path': 0,
      'no-console': 1,
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-var-requires': 'off',

      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': 'warn',
      ...prettierConfig.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
]);
