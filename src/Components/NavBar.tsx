
import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './NavBar.scss';

export const NavBar = (): JSX.Element => {
    // TODO: correct the link to dashboard eventually
    return (
        <ul role="navigation">
            <li><Link to='/'><span>Dashboard</span></Link></li>
            <li><Link to='/all'><span>Read</span></Link></li>
            <li><Link to='/'><span>Upload</span></Link></li>
            <li><Link to='/signin'><span>SignIn</span></Link></li>
            <li><Link to='/signup'><span>SignUp</span></Link></li>
        </ul>
    )
}