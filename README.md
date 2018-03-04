# different-platform

[![NPM version](https://img.shields.io/npm/v/different-platform.svg)](https://www.npmjs.com/package/different-platform)
[![Build Status](https://travis-ci.org/shinnn/different-platform.svg?branch=master)](https://travis-ci.org/shinnn/different-platform)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/different-platform.svg)](https://coveralls.io/github/shinnn/different-platform?branch=master)

Return `'linux'` on Windows, otherwise return `'win32'`

```javascript
const differentPlatform = require('different-platform');

// on Windows
differentPlatform(); //=> 'linux'

// on non-Windows OS, for example Linux and macOS
differentPlatform(); //=> 'win32'
```

Useful for testing the behavior of [`process.platform`](https://nodejs.org/api/process.html#process_process_platform)-dependent code on the two platforms in combination with [pretend-platform](https://github.com/shinnn/pretend-platform).

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install different-platform
```

## API

```javascript
const differentPlatform = require('different-platform');
```

### differentPlatform()

Return: `string` (`linux` when `process.platform` equals to `'win32'`, otherwise `'win32'`)

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
