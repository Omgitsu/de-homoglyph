const UtfString = require('utfstring');
const lookupTable = require('./homoglyph-lookup-table').fullLookupTable;

function decimalToHexString(n) {
  let i;
  if (n < 0) {
    i = 0xFFFFFFFF + n + 1;
  }
  return i.toString(16).toUpperCase();
}

function isNumeric(n) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
}

function hexStringForCharacter(char) {
  return decimalToHexString(UtfString.stringToCodePoints(char)[0]).padStart(4, '0');
}

function fixHomoglyph(hexcode) {
  for (const [key, value] of Object.entries(lookupTable)) {
    // if the hexcode is the same as the hexcode of a key, just return the hexcode...
    const keyHex = hexStringForCharacter(key);
    if (hexcode === keyHex) {
      return hexcode;
    }
    for (const hexvalue of value) {
      if (hexcode === hexvalue) {
        return keyHex;
      }
    }
  }
  return hexcode;
}

function deHomoglyph(data) {
  const codepoints = UtfString.stringToCodePoints(data);
  // normalize the codepoints
  const normalized = codepoints.map(x => decimalToHexString(x).padStart(4, '0'));
  const fixed = normalized.map(x => parseInt(fixHomoglyph(x), 16));
  // convert back to a readable string and return
  return UtfString.codePointsToString(fixed);
}

// function for removing homoglyphs from a json structure avoiding doing it to numbers
function deHomoglyphJSON(data) {
  for (const i in data) {
    if (typeof data[i] === 'object') {
      deHomoglyphJSON(data[i]);
    } else if (!isNumeric(data[i])) {
      data[i] = deHomoglyph(data[i]);
    }
  }
  return data;
}

module.exports = {
  deHomoglyph,
  deHomoglyphJSON,
};
