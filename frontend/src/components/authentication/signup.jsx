
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./box.css";

function SignUpBox() {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = async () => {
    const res = await fetch("http://localhost:5001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: account, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccessMsg("Registered successfully! Redirecting to login...");
      setTimeout(() => navigate("/signin"), 1500);
    } else {
    //   setErrorMsg(data.message);
        setErrorMsg("Deo dang ky duoc huhu");
        setTimeout(() => navigate("/signup"), 1500);
    }
  };

  return (
    <div className="box">
      <div className="title">Sign up</div>

      <div className="accountbox">
        <div className="input">
          <div className="text">Account</div>
          <input
            className="inbox"
            type="text"
            placeholder="Enter your account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
      </div>

      <div className="passwordbox">
        <div className="input">
          <div className="text">Password</div>
          <input
            className="inbox"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {errorMsg && <div className="error" style={{ color: "red" }}>{errorMsg}</div>}
      {successMsg && <div className="success" style={{ color: "green" }}>{successMsg}</div>}

      <div className="donthave">
        Already have an account?{" "}
        <Link style={{ textDecoration: "underline", cursor: "pointer" }} to="/signin">
          Log in
        </Link>
      </div>

      <button className="button" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
}

export default SignUpBox;
