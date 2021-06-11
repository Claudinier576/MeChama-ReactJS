import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({isAuth, component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth && localStorage.length !== 0) {
                    return <Component />
                } else {
                    return (
                        <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                    )
                }
        }} />     
    )
}

export default ProtectedRoute