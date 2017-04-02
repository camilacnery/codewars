function rgb(r, g, b) {
    return (hex(r) + hex(g) + hex(b)).toUpperCase();
}

function hex(c) {
    if (c > 255) { c = 255 } else if (c < 0) { c = 0 };
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
