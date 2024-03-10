import isCSSHexColor from "@chriscodesthings/is-css-hex-color";
import expandCSSHexColor from "@chriscodesthings/expand-css-hex-color";

function hexToDec(h) {
    return parseInt(h, 16);
}

export default function (col) {
    if (!isCSSHexColor(col)) {
        return;
    }

    const hex = (expandCSSHexColor(col) + "ff").slice(1, 9);
    const [r, g, b, a] = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6), hex.slice(6, 8)];

    return [hexToDec(r), hexToDec(g), hexToDec(b), Math.round((hexToDec(a) / 255) * 100) / 100];
}
