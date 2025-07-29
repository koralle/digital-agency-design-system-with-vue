import typegen from 'eslint-typegen';
/// <reference path="./eslint-typegen.d.ts" />
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import { ESLint } from 'eslint';
import { Linter } from 'eslint';
import oxlint from 'eslint-plugin-oxlint';

export default tseslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
      oxlint.buildFromOxlintConfigFile('./.oxlintrc.json')
    ],
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {}
  },

  eslintConfigPrettier
);
