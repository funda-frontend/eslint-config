module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'prettier/vue',
        'plugin:prettier/recommended'
    ],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'no-console': ['warn'],
        'prettier/prettier': [
            'error',
            {
              'singleQuote': true,
              'tabWidth': 4,
              'trailingComma': 'es5'
            }
        ]
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        mocha: true,
        node: true,
        jest: true,
        jquery: true
    },
    globals: {
        googletag: true,
        google: true,
        expect: true,
        assert: true,
        should: true,
        sinon: true
    }
}
