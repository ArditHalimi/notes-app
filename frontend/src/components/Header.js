import React from 'react'
import { ReactComponent as LogoutIcon } from '../assets/logout.svg'
    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = "/login";
    }

const Header = () => {

    return (
        <div className="app-header">
            <h1>Note List</h1>
            <div className="logout" onClick={logout}>

                  <LogoutIcon/>
            </div>

        </div>
    )
}

export default Header
