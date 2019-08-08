import React, {useState} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import RegisterTab from './tabs/RegisterTab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Register()
{
    const classes = useStyles();
    

    return (
        <div className={clsx(classes.root, "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

                <FuseAnimate animation="transition.expandIn">
                    <img className="w-128 mb-32 max-w-450" src="" alt=""/>
                </FuseAnimate>
            </div>

            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48" style={{marginTop: 40}}>

                        <Typography variant="h6" className="text-center md:w-full mb-48">SIGNUP</Typography>

                        <div
                            variant="fullWidth"
                            className="mb-32"
                        
                            icon={<img className="h-40 p-4 bg-black rounded-12" src="assets/images/logos/jwt.svg" alt="firebase"/>}
                            className="min-w-0"
                            label="JWT"
                        >
                        </div>

                        <RegisterTab/>

                        <div className="flex flex-col items-center justify-center pt-32 pb-24">
                            <span className="font-medium">Already have an account?
                                <Link className="font-medium" style={{paddingLeft: 10}} to="/login">Signin</Link>
                            </span>
                            
                        </div>

                        <div className="flex flex-col items-center">
                        </div>
                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    )
}

export default Register;
