import React from "react";
import "./box.css"
function SignUpBox(){
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

            <div className="donthave">Already have an account? <a href="#">Log in</a></div>
            <button className="button">Sign up</button>

        </div>
    )
};
export default SignUpBox;