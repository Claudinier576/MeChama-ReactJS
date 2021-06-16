import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../ButtonCategories/styles'


const LogButton: React.FC = () => {
    
    let history = useHistory()
    
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    
    const redirect = () => {
        history.push("/login")
    }

    if ((localStorage.getItem('tokenUserJWT') || "").length !== 0) {
        return (
            <Button onClick={logout}>
                <img src="/Images/Header/logout.png" alt="logImage" className="buttonImage"/>
                <p className="buttonText">Logout</p>
            </Button>
        )
    } else {
        return (
            <Button onClick={redirect}>
                <img src="/Images/Header/enter.png" alt="logImage" className="buttonImage"/>
                <p className="buttonText">Login</p>
            </Button>
        )
    }
}

export default LogButton