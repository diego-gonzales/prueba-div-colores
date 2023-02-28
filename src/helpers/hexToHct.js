import {
  Hct,
  argbFromHex,
  hexFromArgb
} from "@material/material-color-utilities";

export const hexToHCT = (hexColor) => {
  const argbColor = argbFromHex(hexColor);
  const colorHCT = Hct.fromInt(argbColor);

  return colorHCT;
};


// const color = Hct.fromInt(4282549748);
  // console.log(`Hue: ${color.hue}`);
  // console.log(`Chrome: ${color.chroma}`);
  // console.log(`Tone: ${color.tone}`);

  // const argbColor = argbFromHex("#4285f4");
  // console.log(argbColor);

  // const hexColor = hexFromArgb(4282549748);
  // console.log(hexColor);