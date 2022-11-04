import { PaletteMode } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightPalette = {
  primary: {
    main: "#A9DEF9",
    contrastText: "#3C3C3C",
  },
  secondary: {
    main: "#FF99C8",
    contrastText: "#3C3C3C",
  },
  text: {
    primary: "#3C3C3C",
  },
  background: {
    default: "#D0F4DE",
    paper: "#FCF6BD",
  },
  divider: "#7F7A7A",
};

const darkPalette = {};

const font = "Cookie, cursive";

const themeMode = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "light" ? lightPalette : darkPalette),
    },
    typography: {
      fontFamily: font,
    },
    props: {
      MuiAppBar: {
        color: "primary",
      },
    },
  };
};

let appTheme = createTheme(themeMode("light"));
appTheme = responsiveFontSizes(appTheme);

export default appTheme;
