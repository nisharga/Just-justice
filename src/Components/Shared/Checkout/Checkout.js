import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../Hooks/Firebase/Config";
import "./Checkout.css";
import { Navigate } from "react-router-dom";
const Checkout = () => {
  let { id } = useParams();
  const [user] = useAuthState(auth);
  const handleform = () => {
    alert("hello");
    <Navigate to="/about" replace={true} />;
  };
  return (
    <div className="bg-light checkout d-flex justify-content-center">
      <div class="form-style-2">
        <div class="form-style-2-heading">
          <h2 className="text-center">Provide your information</h2>
        </div>
        <form onSubmit={handleform}>
          <label for="Service">
            <span>
              Checkout for Service: <span class="required">*</span>
            </span>
            <input
              type="text"
              class="input-field"
              name="Service"
              value={id}
              disabled
            />
          </label>
          <label for="field1">
            <span>
              Name <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field1" value="" />
          </label>
          <label for="field2">
            <span>
              Email <span class="required">*</span>
            </span>
            <input
              type="text"
              class="input-field"
              name="field2"
              value={user?.email}
            />
          </label>

          <label for="field5">
            <span>
              Message <span class="required">*</span>
            </span>
            <textarea name="field5" class="textarea-field"></textarea>
          </label>

          <label>
            <span> </span>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
