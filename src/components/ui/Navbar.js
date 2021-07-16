import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContex'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const handleLogOut = () => {
        dispatch({
            type:types.logout,
        });

        history.replace('/login');
    }

    return (
        <>
            <nav>
                <ul>
                    <div className="main-li-items">
                        <Link to='/' className="nav-item">Asociaciones</Link>
                        <NavLink exact to="/Dc" activeClassName="active" className="nav-item">Dc</NavLink>
                        <NavLink exact to="/marvel" activeClassName="active" className="nav-item">Marvel</NavLink>
                        <NavLink exact to="/search" activeClassName="active" className="nav-item">Search</NavLink>
                    </div>
                    <div className="last-li-items">
                        <p>{name}</p>
                        <button onClick={handleLogOut} >LogOut</button >
                    </div>
                </ul>
            </nav>
        </>
    )
}
