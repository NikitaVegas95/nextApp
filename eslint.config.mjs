import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
            'jsx-a11y': jsxA11yPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': 'error',
            'max-lines': ['error', 120],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['src/features/*'],
                            message: "Импорт из слоя 'features' запрещен в слое 'widgets'.",
                        },
                        {
                            group: ['src/entities/*'],
                            message: "Импорт из слоя 'entities' запрещен в слое 'widgets'.",
                        },
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {},
            },
        },
    },
    prettierConfig,
];