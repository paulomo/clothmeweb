import React, { useEffect, useRef, useState } from "react";
import Formsy from "formsy-react";
import { TextFieldFormsy } from "app/Common";
import { Button, InputAdornment, Icon } from "@material-ui/core";
import * as authActions from "app/auth/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import { FuseAnimate } from "app/Common";
import { Link } from "react-router-dom";

function BackGroundCheck(props) {
  return (
    <div className="w-full">
      <Formsy
        // onValidSubmit={handleSubmit}
        // onValid={enableButton}
        // onInvalid={disableButton}
        // ref={formRef}
        className="flex flex-col justify-center w-full"
      >
        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="confirmationCode"
        //   onChange={handleFieldChange}
        //   value={fields.confirmationCode}
          label="Confirmation Code"
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
        //   disabled={!isFormValid}
          value="legacy"
        >
          Verify
        </Button>
      </Formsy>
    </div>
  );
}

export default BackGroundCheck;
