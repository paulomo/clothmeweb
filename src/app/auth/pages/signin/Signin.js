import React, { useState } from "react";
import { Card, CardContent, Typography, Tabs, Tab } from "@material-ui/core";
import { FuseAnimate } from "app/Common";
import { Link } from "react-router-dom";
import clsx from "clsx";
import SigninContainer from "./component/SigninContainer";
import { makeStyles } from "@material-ui/styles";
import { useStyles } from "./styles";


function Signin() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0"
      )}
    >
      <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
        <FuseAnimate animation="transition.expandIn">
          <img className="w-128 mb-32" src="" alt="" />
        </FuseAnimate>
      </div>

      <FuseAnimate animation={{ translateX: [0, "100%"] }}>
        <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
          <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
            <Typography variant="h6" className="text-center md:w-full mb-48">
              SIGNIN
            </Typography>

            <div
              value={selectedTab}
              onChange={handleTabChange}
              variant="fullWidth"
              className="mb-32"
              icon={
                <img
                  className="h-40 p-4 bg-black rounded-12"
                  src="assets/images/logos/jwt.svg"
                  alt="firebase"
                />
              }
              className="min-w-0"
              label="JWT"
            ></div>

            <SigninContainer />

            <div className="flex flex-col items-center justify-center pt-32">
              <span className="font-medium">
                Don't have an account?
                <Link
                  className="font-medium"
                  style={{ paddingLeft: 10 }}
                  to="/register"
                >
                  Signup
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default Signin;
