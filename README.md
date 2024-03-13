# css-hex-color-to-rgba &middot; [![Test workflow status](https://github.com/ChrisCodesThings/css-hex-color-to-rgba/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/css-hex-color-to-rgba)](https://www.npmjs.com/package/@chriscodesthings/css-hex-color-to-rgba) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Converts a CSS hex color code to RGBA values**

## Install

```sh
npm install --save @chriscodesthings/css-hex-color-to-rgba
```

## Use

```js
import hexColorToRGBA from '@chriscodesthings/css-hex-color-to-rgba';

console.log(hexColorToRGBA("#6495ed"));
// => [ 100, 149, 237 ]
```

## Syntax

```js
hexColorToRGBA(color);
```

### Parameters

- *color*: a CSS hex color code

### Return Value

Returns an array containing the `[red, green, blue, alpha]` values of *color*.

Red, green and blue values are in the range 0-255.
Alpha value is in the range 0-1.

## Description

Does what it says on the tin. 