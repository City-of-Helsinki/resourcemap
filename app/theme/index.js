export const ROOT_FONT_SIZE = 16; // px

// With a root font size of 16px, these values equal to about the
// following pixel values: [15, 15, 15, 16, 18, 36, 45]
// Smallest font-size that's visible on the TV screen is 15px according
// to current knowledge.
const fontSizeRem = [0.938, 0.938, 0.938, 1, 1.125, 2.25, 2.813];
fontSizeRem.get = index => `${fontSizeRem[index]}rem`;

const colors = {
  red: '#ed2127',
  yellow: '#c2a251',
  green: '#00b62b',
  grey: '#5c5c5c',
  darkGrey: '#606060',
  blue: '#9fc9eb',
  black: '#191919',
  white: '#f6f6f8',
};
colors.noData = colors.blue;
colors.taken = colors.red;
colors.closed = colors.yellow;
colors.available = colors.green;
colors.roomDefaultFill = colors.black;
colors.roomDefaultStroke = colors.white;
colors.roomAvailableFill = colors.green;
colors.roomClosedFill = colors.yellow;
colors.roomNotReservableFill = colors.blue;
colors.roomDashedBorderSelectedFill = colors.white;
colors.activeSpace = colors.white;

export default {
  fontSize: fontSizeRem,
  colors,
};
