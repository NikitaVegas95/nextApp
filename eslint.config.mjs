import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import cypressPlugin from 'eslint-plugin-cypress';
import storybookPlugin from 'eslint-plugin-storybook';

export default [
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                node: true,
                es2021: true,
                'cypress/globals': true,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
            'jsx-a11y': jsxA11yPlugin,
            prettier: prettierPlugin,
            '@typescript-eslint': tsParser,
            cypress: cypressPlugin,
            storybook: storybookPlugin,
        },
        rules: {
            'comma-dangle': [
                'error',
                {
                    arrays: 'never',
                    objects: 'never',
                    imports: 'never',
                    exports: 'never',
                    functions: 'never',
                },
            ],
            semi: ['error', 'always'],
            quotes: [
                'warn',
                'single',
                {
                    allowTemplateLiterals: true,
                    avoidEscape: true,
                },
            ],
            'max-len': [
                'error',
                {
                    code: 150,
                    ignorePattern: 'd="([\\s\\S]*?)"',
                },
            ],
            '@typescript-eslint/no-explicit-any': ['warn'],
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/explicit-member-accessibility': [
                'warn',
                {
                    accessibility: 'explicit',
                    overrides: {
                        accessors: 'off',
                        constructors: 'no-public',
                        methods: 'explicit',
                        properties: 'explicit',
                        parameterProperties: 'explicit',
                    },
                    ignoredMethodNames: ['@*'],
                },
            ],
            'react-hooks/rules-of-hooks': 'warn',
            'react-hooks/exhaustive-deps': 'warn',
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
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.module.scss'],
                },
            },
        },
    },
    prettierConfig,
    {
        extends: [
            'plugin:storybook/recommended',
            'next',
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
            'plugin:import/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'plugin:cypress/recommended',
        ],
    },
];