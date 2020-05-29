export const ROOT_FONT_SIZE = 16; // px

// With a root font size of 16px, these values equal to about the
// following pixel values: [12, 12, 15, 16, 18, 36, 45]
// Smallest font-size that's visible on the TV screen.
const fontSizeRem = [0.75, 0.75, 0.938, 1, 1.125, 2.25, 2.813];
fontSizeRem.get = index => `${fontSizeRem[index]}rem`;

export default {
  fontSize: fontSizeRem,
};
