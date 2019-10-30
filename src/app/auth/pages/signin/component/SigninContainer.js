import React, {useEffect, useRef, useState} from 'react';
import { Button, InputAdornment, Icon, Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import {TextFieldFormsy} from 'app/Common';
import Formsy from 'formsy-react';
import { useForm } from 'app/Common/hooks';
import * as authActions from 'app/auth/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';


function SigninContainer(props)
{
    const { form, handleChange, resetForm } = useForm({
        email: '',
        password: '',
        remember: true
    });

    const dispatch = useDispatch();
    const signin = useSelector(({auth}) => auth.signin);

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if ( signin.error && (signin.error.email || signin.error.password) )
        {
            formRef.current.updateInputsWithError({
                ...signin.error
            });
            disableButton();
        }
    }, [signin.error]);

    function disableButton()
    {
        setIsFormValid(false);
    }

    function enableButton()
    {
        setIsFormValid(true);
    }

    async function handleSubmit(model)
    {
        // dispatch(authActions.submitSignin(model));
        try {
            const user = await Auth.signIn(model.username, model.password);
            console.log(user);
        }catch(error){
            console.log(error);
        }
        console.log(model);
    }

    return (
        <div className="w-full">
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="username"
                    label="Email"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">email</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="password"
                    name="password"
                    label="Password"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">vpn_key</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <div className="flex items-center justify-between">

                    <FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remember"
                                    checked={form.remember}
                                    onChange={handleChange}
                                />
                            }
                            label="Remember Me"
                        />
                    </FormControl>

                    <Link className="font-medium" to="/pages/auth/forgot-password">
                        Forgot Password?
                    </Link>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16 normal-case"
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                    value="legacy"
                >
                    Signin
                </Button>
            </Formsy>
        </div>
    );
}

export default SigninContainer;
