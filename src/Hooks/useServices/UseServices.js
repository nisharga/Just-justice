import { useState, useEffect } from "react";
import ServiceData from "./ServiceData.json";
const UseServices = () => {
  const [services, setServices] = useState(ServiceData);
  useEffect(() => {
    fetch("ServiceData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [services]);
  return [services, setServices];
};
export default UseServices;
