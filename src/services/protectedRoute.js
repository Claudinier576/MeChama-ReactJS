import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({isAuth, isLogged, component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth && isLogged) {
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