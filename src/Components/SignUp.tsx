
import React, {useState} from "react";
import axios from "axios";
import './Signup.scss';


export const SignUp = (): JSX.Element => {
    
    
    // TODO: implement a react form that performs the axios calls to login etc. 
    return (
        <div className="container">
            <form>
                    <label>Email</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
            </form>
        </div>
    )
}