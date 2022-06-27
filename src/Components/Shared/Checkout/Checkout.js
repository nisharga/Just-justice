import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../Hooks/Firebase/Config";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  let { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleform = () => {
    alert("thank you for the booking....");
    navigate("/");
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
              User Name <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field1" />
          </label>
          <label for="field2">
            <span>
              Email Address <span class="required">*</span>
            </span>
            <input
              type="text"
              class="input-field"
              name="field2"
              value={user?.email}
            />
          </label>
          <label for="field3">
            <span>
              Address <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field3" />
          </label>
          <label for="field4">
            <span>
              Phone <span class="required">*</span>
            </span>
            <input type="text" class="input-field" name="field4" />
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
