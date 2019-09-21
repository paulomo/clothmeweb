import React from 'react';
import ChatPanel from 'app/layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/layouts/shared-components/quickPanel/QuickPanel';

function RightSideLayout2()
{
    return (
        <React.Fragment>

            <ChatPanel/>

            <QuickPanel/>
        </React.Fragment>
    );
}

export default RightSideLayout2;
