
import { useContext} from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";

import './NavBar.scss';

export const NavBar = (): JSX.Element => {
    const {user, setUser} = useContext(UserContext);
    // TODO: correct the link to dashboard eventually

    console.log('user from Nav:', user)
    return (
        <ul role="navigation">
            <li><Link to='/'><span>Dashboard</span></Link></li>
            <li><Link to='/all'><span>Read</span></Link></li>
            <li><Link to='/'><span>Upload</span></Link></li>
            {
                !user ? <>
                    <li><Link to='/signin'><span>SignIn</span></Link></li>
                    <li><Link to='/signup'><span>SignUp</span></Link></li>
                </> 
                : 
                <li><Link to='/signin'><span onClick={() => setUser(null)}>Logout</span></Link></li> 
            }
        </ul>
    )
}