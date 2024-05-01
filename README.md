# css-hex-color-to-rgba <br> [![Test workflow status](https://github.com/ChrisCodesThings/css-hex-color-to-rgba/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/css-hex-color-to-rgba)](https://www.npmjs.com/package/@chriscodesthings/css-hex-color-to-rgba) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Converts a CSS hex color code to RGBA values**

## Description

Converts a CSS hex color code to an array containing red, green, blue and alpha values.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/css-hex-color-to-rgba
```

## Use

```js
import cssHexColorToRGBA from '@chriscodesthings/css-hex-color-to-rgba';

console.log(cssHexColorToRGBA("#6495ed"));
// => [ 100, 149, 237, 1 ]
```

## Syntax

```js
cssHexColorToRGBA(color);
```

### Parameters

- *color*: a CSS hex color code

### Return Value

Returns an array containing the `[red, green, blue, alpha]` values of *color*.

Red, green and blue values are in the range 0-255.
Alpha value is in the range 0-1.

## Examples

```js
// switch colour to rgba
const rgba = cssHexColorToRGBA(color);
```

## See Also...

- [**rgba-color-to-css-hex**: Converts an RGB or RGBA color to a CSS hex color code](https://github.com/ChrisCodesThings/rgba-color-to-css-hex "Converts an RGB or RGBA color to a CSS hex color code")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
- [**is-css-hex-color**: Determine if a string is a CSS hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a CSS hex color code")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
