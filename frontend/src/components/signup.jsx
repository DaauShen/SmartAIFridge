import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./box.css"
function SignUpBox(){
    const navigate = useNavigate();

    return (
        <div className="box">
            <div className="title">Sign up</div>
            <div className="accountbox">
                <div className="input">
                    <div className="text">Account</div>
                    <input className="inbox" type="text" placeholder="Enter your account"></input>
                </div>
            </div>

            <div className="passwordbox">
                <div className="input">
                    <div className="text">Password</div>
                    <input className="inbox" type="password" placeholder="Enter your password"></input>
                </div>
            </div>

            <div className="donthave">Already have an account? <Link style={{textDecoration: "underline", cursor: "pointer"}} to="/signin">Log in</Link></div>
            <button className="button" onClick = {() => navigate("/signin")}>Sign up</button>

        </div>
    )
};
export default SignUpBox;