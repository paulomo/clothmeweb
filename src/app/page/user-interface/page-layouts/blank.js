import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {DemoContent} from 'Common';

const useStyles = makeStyles({
    root: {
        padding: 24
    }
});

function BlankSample()
{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <DemoContent/>
        </div>
    )
}

export default BlankSample;
