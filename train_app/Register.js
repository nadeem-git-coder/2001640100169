
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://20.244.56.144/train/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register Your Company</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for companyName, ownerName, rollNo, ownerEmail, and accessCode */}
        {/* Add a submit button */}
      </form>
    </div>
  );
};

export default Register;
