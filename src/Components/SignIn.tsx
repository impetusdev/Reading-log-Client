import React, {useState, useContext} from "react";
import axios from "axios";
import './Signup.scss';
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";


export const SignIn = (): JSX.Element => {
    const [email, setEmail] = useState<string>('laurence.qi@outlook.com');
    const [password, setPassword] = useState<string>('chicken');
    const {user, setUser} = useContext(UserContext);
    // check if user is present if not then login. 

    const handleSubmit = async (event: React.SyntheticEvent) => {
        // performs the axios request
        event.preventDefault();
        const response = await axios.post('http://localhost:3000/login', {
            email,
            password
        });

        if(response){
            setUser(response.data);
        }
    }

    return (
        <div className="list-container">
            <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value="laurence.qi@outlook.com"/>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value="chicken"/>
                    </div>
                    <input type="submit" />
                    <p>Already have an account?</p>
                    <Link to='/signin'><p id="sign">SignIn</p></Link>
            </form>
        </div>
    )
}