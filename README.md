# check-npm-dependents

Checks how many dependents has npm package.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i check-npm-dependents
```

## Usage

```js
const check = require('check-npm-dependents');
check('lodash').then(console.log) // for ex. 68195
check('_ABC').then(console.log) // -1 (no such package)
```

## License

MIT

[npm-url]: https://npmjs.org/package/check-npm-dependents
[npm-image]: https://badge.fury.io/js/check-npm-dependents.svg
[travis-url]: https://travis-ci.org/astur/check-npm-dependents
[travis-image]: https://travis-ci.org/astur/check-npm-dependents.svg?branch=master