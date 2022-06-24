import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login bg-light">
      <h2 className="text-center pt-4">
        SIGNIN
        {/* {loading || loadingGoogle ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )} */}
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
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        {/* <p>
          {error || errorGoogle ? (
            <p> {error.message || errorGoogle.message}</p>
          ) : (
            ""
          )}
        </p>
        <p>{user ? <p> {user.user.email} user create sucessfully</p> : ""}</p> */}
        <input
          type="submit"
          className="btn btn-primary mb-5 mt-3"
          value="Login"
        />
        <br />
        <button className="btn btn-success googleSignIN">
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
