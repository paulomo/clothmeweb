import React, {useEffect, useRef, useState} from 'react';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from 'Common';
import {Button, InputAdornment, Icon} from '@material-ui/core';
import * as authActions from 'app/auth/store/actions';
import {useDispatch, useSelector} from 'react-redux';

function RegisterTab(props)
{
    const dispatch = useDispatch();
    const register = useSelector(({auth}) => auth.register);

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if ( register.error && (register.error.username || register.error.password || register.error.email) )
        {
            formRef.current.updateInputsWithError({
                ...register.error
            });
            disableButton();
        }
    }, [register.error]);

    function disableButton()
    {
        setIsFormValid(false);
    }

    function enableButton()
    {
        setIsFormValid(true);
    }

    function handleSubmit(model)
    {
        dispatch(authActions.submitRegister(model));
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
                    name="firstName"
                    label="First Name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">person</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="lastName"
                    label="Last Name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">person</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="email"
                    label="Email"
                    validations="isEmail"
                    validationErrors={{
                        isEmail: 'Please enter a valid email'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">email</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="displayName"
                    label="Company Name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">person</Icon></InputAdornment>
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
                    Register
                </Button>

            </Formsy>

        </div>
    );
}

export default RegisterTab;
