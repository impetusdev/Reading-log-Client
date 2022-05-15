
import React, {useState} from "react";
import axios from "axios";
import './Signup.scss';


export const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState<string>('laurence.qi@outlook.com');
    const [password, setPassword] = useState<string>('chicken');

    const handleSubmit = async (event: React.SyntheticEvent) => {
        // performs the axios request
        event.preventDefault();
        const response = await axios.post('http://localhost:3000/login', {
            email,
            password
        });

        console.log(response) //TODO: set this token in the auth context. 
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value="laurence.qi@outlook.com"/>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value="chicken"/>
                    <input type="submit" />
            </form>
        </div>
    )
}