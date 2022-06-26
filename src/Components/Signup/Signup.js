import React from "react";
import { useState } from "react";
import "./Signup.css";
import auth from "./../../Hooks/Firebase/Config";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const createUser = (e) => {
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  const googleSignIN = (e) => {
    signInWithGoogle();
    e.preventDefault();
  };
  console.log("userGoogle", userGoogle);
  return (
    <div className="sigup bg-light">
      <h2 className="text-center pt-4">
        SIGNUP
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
        <p>{error ? <p> {error.message}</p> : ""}</p>
        <p>{errorGoogle ? <p> {errorGoogle.message}</p> : ""}</p>
        <p>
          {user || userGoogle ? (
            <p> user create sucessfully, (Check Email for Verify)</p>
          ) : (
            ""
          )}
        </p>
        <p>
          Already Have an account <Link to="/login">Log in</Link>
        </p>
        <input
          type="submit"
          className="btn btn-primary mb-5"
          onClick={createUser}
          value="Sign up"
        />
        <br />

        <button className="btn btn-success googleSignIN" onClick={googleSignIN}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="logo"
          />
          Google Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
