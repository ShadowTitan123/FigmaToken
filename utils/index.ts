import { createTheme } from "@mui/material";
import { experimental_sx as sx } from "@mui/material/styles";

export const themeParser = (theme: any) => {
  let currentFont =
    theme["Typography"].Heading["H1"].value.fontFamily
      .split(".")[1]
      .replace(/[{()}]/g, "") || "Poppins";

  return createTheme({
    components: {
      // Name of the component
      MuiPaper: {
        styleOverrides: {
          root: sx({
            backgroundColor: theme["MaterialV5"].Background.Paper.value,
          }),
        },
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: theme["MaterialV5"].Primary.Main.value,
        light: theme["MaterialV5"].Primary.Light.value,
        dark: theme["MaterialV5"].Primary.Dark.value,
      },
      secondary: {
        main: theme["MaterialV5"].Secondary.Main.value,
        light: theme["MaterialV5"].Secondary.Main.value,
        dark: theme["MaterialV5"].Secondary.Dark.value,
      },
    },
    typography: {
      htmlFontSize: 16,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontSize: 14,
      fontFamily: currentFont,
      h1: {
        lineHeight: "144px",
        letterSpacing: "-1.5px",
        fontFamily: currentFont,
      },
      h2: {
        lineHeight: "90px",
        letterSpacing: "-0.5px",
        fontFamily: currentFont,
      },
      h3: {
        lineHeight: "72px",
        fontFamily: currentFont,
      },
      h4: {
        lineHeight: "51px",
        letterSpacing: "0.25px",
        fontFamily: currentFont,
      },
      h5: {
        lineHeight: "36px",
        fontFamily: currentFont,
      },
      h6: {
        lineHeight: "30px",
        letterSpacing: "0.15px",
        fontFamily: currentFont,
      },
      subtitle1: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
      },
      subtitle2: {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.15px",
        fontWeight: 400,
      },
      body1: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
        fontWeight: 400,
      },
      body2: {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.15px",
        fontWeight: 400,
        color: theme["MaterialV5"].Text.Primary.value,
      },
      button: {
        fontSize: "15px",
        lineHeight: "22.5px",
        fontWeight: 500,
      },
      caption: {
        fontSize: "15px",
        lineHeight: "22.5px",
        fontWeight: 500,
      },
      overline: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "1px",
      },
    },
  });
};
