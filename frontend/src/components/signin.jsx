import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./box.css"

function SignInBox(){
    const navigate = useNavigate();

    return (
        <div className="box">
            <div className="title">Sign in</div>

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

            <label className="rememberme">
              <input type="checkbox" />
              Remember me
            </label>

            <div className="donthave">
                Don't have an account? <Link style={{textDecoration: "underline", cursor: "pointer"}} to="/signup">Register</Link>
            </div>

            <button className="button" onClick = {() => navigate("/dashboard")}>Sign in</button>
        </div>
    )
};
export default SignInBox;