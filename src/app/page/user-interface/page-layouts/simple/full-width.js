import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, DemoContent} from 'Common';

const useStyles = makeStyles({
    layoutRoot: {}
});

function SimpleFullWidthSample()
{
    const classes = useStyles();

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="p-24"><h4>Header</h4></div>
            }
            contentToolbar={
                <div className="px-24"><h4>Content Toolbar</h4></div>
            }
            content={
                <div className="p-24">
                    <h4>Content</h4>
                    <br/>
                    <DemoContent/>
                </div>
            }
        />
    )
}

export default SimpleFullWidthSample;
