import React from "react";
import photo from "./blank_profile.jpg";
import "./About.css";
import LeafletMap from "./leafletMap/LeafletMap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase/Config";

const About = () => {
  const [user] = useAuthState(auth);
  console.log("user", user.email);
  return (
    <div className="about bg-light pt-4 pb-4">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="d-flex justify-content-center">
        <div className="card text-center p-4">
          <div className="card-body">
            <img src={photo} alt={"blank img"} />
            <h5 className="card-title mt-3">Nisharga Kabir</h5>
            <p className="card-text">
              <b>My Goal :</b> First goal definitely a weakly base target set.
              But thats not mean that think just 10 minutes after then sleep.
              Work hard 2/3 days, after that panicked then again set a new goal.
              The tiger has only one target. Deer hunting. Same happened to me
              just set a 1 goal untill it finish. Everyday managing 5 hours to
              achieve my goal. If faced any problem always find solution. If
              can't find then skip it and try new one. Try to learn it Later. If
              family matter or something personal issue happened then after a
              small break give my 120% to quickly find the track. Give 6/7 hours
              to finding the right path.{" "}
            </p>
          </div>
        </div>
      </div>

      <LeafletMap></LeafletMap>
    </div>
  );
};

export default About;
