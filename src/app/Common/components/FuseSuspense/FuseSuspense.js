import React from 'react';
import PropTypes from 'prop-types';
import {FuseLoading} from 'app/Common';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */function FuseSuspense(props)
{
    return (
        <React.Suspense fallback={<FuseLoading {...props.loadingProps} />}>
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
