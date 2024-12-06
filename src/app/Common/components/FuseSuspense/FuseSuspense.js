import React from 'react';
import PropTypes from 'prop-types';
import {Loading} from 'app/Common';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */function FuseSuspense(props)
{
    return (
        <React.Suspense fallback={<Loading {...props.loadingProps} />}>
            {props.children}
        </React.Suspense>
    );
}

FuseSuspense.propTypes = {
    loadingProps: PropTypes.object,
};

FuseSuspense.defaultProps = {
    loadingProps: {
        delay: 300
    }
};

export default FuseSuspense;
