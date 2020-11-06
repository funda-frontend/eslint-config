[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Funda's eslint config

For this to work you need eslint.

## How to use:

### Install these packages:

    npm i @funda/eslint-config eslint-plugin-vue --save-dev

### Add this as your config:


Create a `.eslintrc.json` file on your project root.

```
{
    "extends": "funda"
}
```

For more information about the rules and settings we currently have just
check the [index.js](index.js) file.

Don't forget about .eslintignore files.

This repo follows [semantic versioning](http://semver.org). You should be able to update patch and minor versions without requiring any changes to your code.
