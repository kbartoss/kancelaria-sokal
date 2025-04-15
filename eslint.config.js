import js from '@eslint/js'
import astroParser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		ignores: ['node_modules/**', 'dist/**', '.astro/**', '.vscode/**', '*.json', '*.lock', '*.yaml'],
		languageOptions: {
			globals: {
				console: 'readonly',
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'prefer-const': 'error',
			'no-console': 'warn',
		},
	},
	{
		files: ['**/*.{jsx,tsx}'],
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
		},
		rules: {
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			globals: {
				console: 'readonly',
			},
		},
		plugins: {
			astro: eslintPluginAstro,
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'astro/no-conflict-set-directives': 'error',
			'astro/no-unused-define-vars-in-style': 'error',
			'astro/no-unused-css-selector': 'warn',
		},
	},
]
