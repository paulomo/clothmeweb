import React, { useState } from "react";
import { Avatar, Button, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FusePageSimple, FuseAnimate } from "Common";
import AboutTab from "./components/AboutTab";

const useStyles = makeStyles(theme => ({
  layoutHeader: {
    height: 150,
    minHeight: 150,
    [theme.breakpoints.down("md")]: {
      height: 240,
      minHeight: 240
    }
  }
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <FusePageSimple
      classes={{
        header: classes.layoutHeader,
        toolbar: "px-16 flex-col sm:px-24"
      }}
      header={
        <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
          <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
            <FuseAnimate animation="transition.expandIn" delay={300}>
              <Avatar
                className="w-96 h-96"
                src="assets/images/avatars/Velazquez.jpg"
              />
            </FuseAnimate>
            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
              <Typography className="md:ml-24" variant="h4" color="inherit">
                {/* add username here John Doe*/}
              </Typography>
            </FuseAnimate>
          </div>

          <div className="flex items-center justify-end">
            <Button
              className="normal-case"
              variant="contained"
              color="primary"
              aria-label="Send Message"
            >
              Send Message
            </Button>
          </div>
        </div>
      }
      content={
        <div className="p-16 flex-col sm:p-24">
          <AboutTab />
        </div>
      }
    />
  );
}

export default ProfilePage;
