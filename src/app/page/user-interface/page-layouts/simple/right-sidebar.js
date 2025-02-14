import React, {useRef} from 'react';
import {Hidden, Icon, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, DemoContent, DemoSidebarContent} from 'Common';

const useStyles = makeStyles({
    layoutRoot: {}
});

function SimpleRightSidebarSample()
{
    const classes = useStyles();
    const pageLayout = useRef(null);

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-col flex-1">
                    <div className="flex items-center pr-12 lg:pr-24 p-24">
                        <div className="flex-1"><h4>Header</h4></div>
                        <Hidden lgUp>
                            <IconButton
                                onClick={(ev) => pageLayout.current.toggleRightSidebar()}
                                aria-label="open left sidebar"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                </div>
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
            rightSidebarHeader={
                <div className="p-24"><h4>Sidebar Header</h4></div>
            }
            rightSidebarContent={
                <div className="p-24">
                    <h4>Sidebar Content</h4>
                    <br/>
                    <DemoSidebarContent/>
                </div>
            }
            ref={pageLayout}
        />
    )
}

export default SimpleRightSidebarSample;
