import { dark } from "@fuse/colors";
import lightBlue from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: dark,
      secondary: {
        light: lightBlue[50],
        main: lightBlue[50],
        dark: lightBlue[50]
      },
      error: red
    },
    status: {
      danger: "orange"
    }
  },

  defaultDark: {
    palette: {
      type: "dark",
      primary: dark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700]
      },
      error: red
    },
    status: {
      danger: "orange"
    }
  }
};

export default themesConfig;
