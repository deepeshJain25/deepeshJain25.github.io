import React, { useRef, useState } from "react";
import { ValidCreds } from "../../assets/data/login";
import { useAuth } from "../../utils/authContext";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const email = useRef("");
  const pwd = useRef("");

  const [loginStatus, setLoginStatus] = useState(true);

  const { login } = useAuth();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "email") {
      email.current = value;
    } else if (name === "password") {
      pwd.current = value;
    }
  };

  const handleSubmit = (em, pd) => {
    let loginSuccessful = false;

    ValidCreds.forEach((data) => {
      if (data.email === em && data.pwd === pd) {
        setLoginStatus(true);
        login();
        loginSuccessful = true;
        router.push("/dashboard");
      }
    });
    if (!loginSuccessful) {
      setLoginStatus(false);
    }
  };

  return (
    <section className="login">
      <div className="login-card">
        <h1 className="title">WELCOME!</h1>
        <p>Sign in to your account</p>
        <div className="mb-4">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="input-field form-control"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="input-field form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 text-end">
          <a className="forgot">forgot password?</a>
        </div>
        <button
          className="login-btn btn btn-primary"
          onClick={() => handleSubmit(email.current, pwd.current)}
        >
          LOG IN
        </button>
        <br />
      </div>
      {!loginStatus && <p style={{ color: "red" }}>Wrong Creds!</p>}
    </section>
  );
};

export default Login;
