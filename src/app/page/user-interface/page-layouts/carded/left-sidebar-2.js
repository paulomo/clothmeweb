import React, {useRef} from 'react';
import {Hidden, Icon, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageCarded, DemoContent, DemoSidebarContent} from 'Common';

const useStyles = makeStyles({
    layoutRoot: {}
});

function CardedLeftSidebar2Sample()
{
    const classes = useStyles();
    const pageLayout = useRef(null);

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-col flex-1">
                    <div className="flex items-center py-24">
                        <Hidden lgUp>
                            <IconButton
                                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                                aria-label="open left sidebar"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>
                        <div className="flex-1"><h4>Header</h4></div>
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
            leftSidebarHeader={
                <div className="p-24"><h4>Sidebar Header</h4></div>
            }
            leftSidebarContent={
                <div className="p-24">
                    <h4>Sidebar Content</h4>
                    <br/>
                    <DemoSidebarContent/>
                </div>
            }
            innerScroll
            ref={pageLayout}
        />
    )
}

export default CardedLeftSidebar2Sample;
