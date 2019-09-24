import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { FuseAnimate } from "Common";
import { Link } from "react-router-dom";
import clsx from "clsx";
import RegisterTab from "./tabs/RegisterTab";
import { makeStyles } from "@material-ui/styles";
import { useStyles } from "./styles";

function Signup() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "flex-1")}>
      <FuseAnimate animation="transition.expandIn">
        <img className="" src="" alt="jfeufeuhfeuhfu" />
      </FuseAnimate>

      <FuseAnimate animation={{ translateX: [0, "100%"] }}>
        <Card className="max-w-400 mx-auto md:m-600" square>
          <CardContent
            className="flex flex-col items-center justify-center p-32 md:p-48"
            style={{ marginTop: 40 }}
          >
            <Typography variant="h6" className="text-center md:w-full mb-48">
              SIGNUP
            </Typography>

            <RegisterTab />

            <div className="flex flex-col items-center justify-center pt-32 pb-24">
              <span className="font-medium">
                Already have an account?
                <Link
                  className="font-medium"
                  style={{ paddingLeft: 10 }}
                  to="/login"
                >
                  Signin
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default Signup;
