
import React, { useState } from "react";
import axios from "axios";

const Authenticate = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    clientID: "",
    ownerName: "",
    ownerEmail: "",
    rollNo: "",
    clientSecret: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://20.244.56.144/train/auth",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Authenticate Your Company</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for companyName, clientID, ownerName, ownerEmail, rollNo, and clientSecret */}
        {/* Add a submit button */}
      </form>
    </div>
  );
};

export default Authenticate;
