// eslint-disable-next-line
import { type Palette, type PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}