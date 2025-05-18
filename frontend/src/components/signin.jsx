import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./box.css";
import { getState, setState } from "../userState";
function SignInBox() {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const {user} = useAuth();

  const handleSignIn = async () => {
    const res = await fetch("http://localhost:5001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: account, password }),
    });

    const data = await res.json();
    if (res.ok) {
      // Optional: Save user to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      // login (user);
      navigate("/dashboard");
      // userState = true;
      setState(true);
    } else {
      setErrorMsg(data.message);
    }
  };

  return (
    <div className="box">
      <div className="title">Sign in</div>

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

      <label className="rememberme">
        <input type="checkbox" />
        Remember me
      </label>

      {errorMsg && <div className="error" style={{ color: "red", marginTop: "10px" }}>{errorMsg}</div>}

      <div className="donthave">
        Don't have an account?{" "}
        <Link style={{ textDecoration: "underline", cursor: "pointer" }} to="/signup">
          Register
        </Link>
      </div>

      <button className="button" onClick={handleSignIn}>
        Sign in
      </button>
    </div>
  );
}

export default SignInBox;
