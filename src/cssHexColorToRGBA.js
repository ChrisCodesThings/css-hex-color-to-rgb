// @ts-check

import expandCSSHexColor from "@chriscodesthings/expand-css-hex-color";
import { roundToPrecision } from "more-rounding";
import * as Types from "@chriscodesthings/basic-color-types";

/**
 * Converts a colour from a CSS hex colour code to an RGBA array
 * @param {Types.cssHexCode} col CSS hex colour code
 * @returns {Types.rgbaColor}
 */
export default function (col) {
    const hex = expandCSSHexColor(col).slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = roundToPrecision(parseInt(hex.slice(6, 8), 16) / 255, 2);

    return [r, g, b, a];
}
