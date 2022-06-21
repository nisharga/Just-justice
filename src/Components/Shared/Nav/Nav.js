import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Nav = () => {
  return (
    <div className="header bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  Just Justice
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <CustomLink to="/" className="nav-link">
                        Home
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/signup" className="nav-link">
                        Signup
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/blogs" className="nav-link">
                        Blogs
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink to="/about" className="nav-link">
                        About Us
                      </CustomLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;