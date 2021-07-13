import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <div className="main-li-items">
                        <Link to='/' className="nav-item">Asociaciones</Link>
                        <NavLink exact to="/Dc" activeClassName="active" className="nav-item">Dc</NavLink>
                        <NavLink exact to="/marvel" activeClassName="active"className="nav-item">Marvel</NavLink>
                        <NavLink exact to="/search" activeClassName="active"className="nav-item">Search</NavLink>
                    </div>
                    <NavLink exact to="/login" activeClassName="active" className="nav-item">LogOut</NavLink >
                </ul>
            </nav>
        </>
    )
}
