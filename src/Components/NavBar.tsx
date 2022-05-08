
import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './NavBar.scss';

export const NavBar = (): JSX.Element => {
    return (
        <ul role="navigation">
            <li><Link to='/'><span>Upload</span></Link></li>
            <li><Link to='/all'><span>Start Reading</span></Link></li>
        </ul>
    )
}