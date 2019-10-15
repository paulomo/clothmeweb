import React from "react";
import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { FuseSearch } from "app/Common";
import NavbarMobileToggleButton from "app/layouts/shared-components/NavbarMobileToggleButton";
import UserMenu from "app/layouts/shared-components/UserMenu";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  separator: {
    width: 1,
    height: 64,
    backgroundColor: theme.palette.divider
  }
}));

function ToolbarLayout(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

  const classes = useStyles(props);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
        <Toolbar className="p-0">
          {config.navbar.display && config.navbar.position === "left" && (
            <Hidden lgUp>
              <NavbarMobileToggleButton className="w-64 h-64 p-0" />
              <div className={classes.separator} />
            </Hidden>
          )}

          <div className="flex">
            <FuseSearch />

            <div className={classes.separator} />

            <UserMenu />

            <div className={classes.separator} />

          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <Hidden lgUp>
              <NavbarMobileToggleButton />
            </Hidden>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default ToolbarLayout;
