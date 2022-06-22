import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center mt-2">
              © {new Date().getFullYear()} Just Justice. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
