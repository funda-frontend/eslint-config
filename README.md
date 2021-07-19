[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Funda's eslint config

For this to work you need eslint.

## How to use:

### Install these packages:

    npm i @funda/eslint-config eslint-plugin-vue --save-dev

### Add this as your config:


Create a `.eslintrc.json` file on your project root.

```
{
    "extends": "@funda/eslint-config"
}
```

For more information about the rules and settings we currently have just
check the [index.js](index.js) file.

Don't forget about .eslintignore files.

This repo follows [semantic versioning](http://semver.org). You should be able to update patch and minor versions without requiring any changes to your code.

## How to push your changes

This repo uses [commitlint](https://github.com/conventional-changelog/commitlint), which means that it follows specific commit message rules.
If the messages are not on the expected format it wont be possible to commit/push your changes.

Example of commit message: 

    'feat(branch_name): commit message' or 'fix(branch_name): commit message'

PS: It is recommended to use the terminal for commit, if you use any GUI it might be necessary to update you local variable PATH on your GUI.
Reference: [Husky issues](https://typicode.github.io/husky/#/?id=command-not-found) 
