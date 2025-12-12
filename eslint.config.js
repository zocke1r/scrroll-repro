//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
/** @type { import("eslint").Linter.Config[] } */
export default [
  ...tanstackConfig,
  {
    rules: {
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    },
  },
]
