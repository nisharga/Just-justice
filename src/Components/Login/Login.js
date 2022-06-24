import React, { useState } from "react";
import "./Login.css";
import auth from "./../../Hooks/Firebase/Config";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const loginUsr = (e) => {
    signInWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  const googleSignIN = (e) => {
    signInWithGoogle();
    e.preventDefault();
  };
  console.log("userGoogle", userGoogle);
  return (
    <div className="login bg-light">
      <h2 className="text-center pt-4">
        SIGNIN
        {loading || loadingGoogle ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>{error ? <p> {error?.message}</p> : ""}</p>
        <p>{errorGoogle ? <p> {errorGoogle?.message}</p> : ""}</p>
        <p>{user || userGoogle ? <p>user Login sucessfully</p> : ""}</p>
        <input
          type="submit"
          className="btn btn-primary mb-5 mt-3"
          value="Login"
          onClick={loginUsr}
        />
        <br />
        <button className="btn btn-success googleSignIN" onClick={googleSignIN}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="logo"
          />
          Google Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
