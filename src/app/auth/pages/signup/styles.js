import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.primary +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText
  }
}));
