import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {

                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            

            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };