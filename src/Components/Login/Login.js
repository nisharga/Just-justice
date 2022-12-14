import React, { useState } from "react";
import "./Login.css";
import auth from "./../../Hooks/Firebase/Config";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // sign In with email pass
  const [signInWithEmailAndPassword, userEmailPass, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // sign In with google
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  // sign handle
  const loginUsr = (e) => {
    signInWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  // sign In google handle
  const googleSignIN = (e) => {
    signInWithGoogle();
    e.preventDefault();
  };
  // Reset Password
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let resetPasswordResetToast;
  const handlePassForget = (e) => {
    sendPasswordResetEmail(email);
    toast("Password reset, Check Email!!");
    e.preventDefault();
  };
  // Redirect to that from page
  let navigate = useNavigate();
  let location = useLocation();
  const [user] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login bg-light">
      <ToastContainer />
      <h2 className="text-center pt-4">
        SIGNIN
        {loading || loadingGoogle ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
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
            name="exampleInputEmail1"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onBlur={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="exampleInputPassword1"
            placeholder="Password"
            onBlur={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>{error ? <p> {error?.message}</p> : ""}</p>
        <p>{errorGoogle ? <p> {errorGoogle?.message}</p> : ""}</p>
        <p>
          {userEmailPass || userGoogle ? <p>user Login sucessfully</p> : ""}
        </p>
        <p>
          Do not Have an account <Link to="/signup">Sign up</Link>
        </p>
        <p>
          Forget Password? Type Email and
          <button className="btn" onClick={handlePassForget}>
            Click Here to Verify
          </button>
        </p>
        {resetPasswordResetToast}

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
