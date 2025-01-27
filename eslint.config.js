import { config as defaultConfig } from '@epic-web/config/eslint'
import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import("eslint").Linter.Config} */
export default [
  ...defaultConfig,
  ...tailwind.configs['flat/recommended'],
  { ignores: ['.react-router', 'node_modules', '.vercel'] },
]
