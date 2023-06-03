import React, { useEffect } from "react";
import "./form.css";
import { useState } from "react";

const Form = () => {
  const data = { firstname: "", lastname: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("registereds")
  }, [flag,inputData]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputData.firstname ||
      !inputData.lastname ||
      !inputData.email ||
      !inputData.password
    )
      alert("All fields are mandatory");
    else {
      setFlag(true);
      alert("Form is submitted")
      setInputData(data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <p className="form-heading">Registration Form</p>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstname"
              value={inputData.firstname}
              placeholder="First Name"
              onChange={handleData}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastname"
              placeholder="Last Name"
              value={inputData.lastname}
              onChange={handleData}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={inputData.email}
              onChange={handleData}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={inputData.password}
              onChange={handleData}
              className="form-input"
            />
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
