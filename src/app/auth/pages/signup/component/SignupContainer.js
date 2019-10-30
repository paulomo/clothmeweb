import React from "react";
import Formsy from "formsy-react";
import { TextFieldFormsy } from "app/Common";
import { Button, InputAdornment, Icon } from "@material-ui/core";
import { Card, CardContent, Typography } from "@material-ui/core";
import { FuseAnimate } from "app/Common";
import { Link } from "react-router-dom";

function SignupContainer(props) {
  const {
    field,
    isFormValid,
    disableButton,
    enableButton,
    handleChange,
    handleSubmit
  } = props;

  return (
    <div className="w-full">
      <FuseAnimate animation={{ translateX: [0, "100%"] }}>
        <Card className="max-w-400 mx-auto md:m-600" square>
          <CardContent
            className="flex flex-col items-center justify-center p-32 md:p-48"
            style={{ marginTop: 40 }}
          >
            <Typography variant="h6" className="text-center md:w-full mb-48">
              SIGNUP
            </Typography>

            <Formsy
              onSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              className="flex flex-col justify-center w-full"
            >
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="firstName"
                label="First Name"
                value={field.given_name}
                onChange={handleChange}
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        person
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="lastName"
                label="Last Name"
                value={field.family_name}
                onChange={handleChange}
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        person
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="username"
                label="Email"
                value={field.email}
                onChange={handleChange}
                validations="isEmail"
                validationErrors={{
                  isEmail: "Please enter a valid email"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        email
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="mb-16"
                type="password"
                name="passsword"
                label="Password"
                value={field.password}
                onChange={handleChange}
                validations={{
                  matchRegexp: new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
                  )
                }}
                validationErrors={{
                  matchRegexp: "Please enter a valid password"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        vpn_key
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="companyName"
                label="Company Name"
                value={field.company_name}
                onChange={handleChange}
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        person
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mx-auto mt-16 normal-case"
                aria-label="REGISTER"
                disabled={!isFormValid}
                value="legacy"
              >
                Sign Up
              </Button>
            </Formsy>

            <div className="flex flex-col items-center justify-center pt-32 pb-24">
              <span className="font-medium">
                Already have an account?
                <Link
                  className="font-medium"
                  style={{ paddingLeft: 10 }}
                  to="/signin"
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

export default SignupContainer;
