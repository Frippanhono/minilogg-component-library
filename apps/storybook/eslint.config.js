// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([globalIgnores(['dist']), {
  files: ['**/*.{js,jsx}'],
  extends: [
    js.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    globals: globals.browser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
  rules: {
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
  },
}, {
  files: ['vite.config.js', 'eslint.config.js', '.storybook/**/*.{js,jsx}'],
  languageOptions: {
    globals: globals.node,
  },
}, ...storybook.configs["flat/recommended"]])
