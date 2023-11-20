import React, { useState } from "react";
import "./App.css";

const SignUpForm = () => {
  // State variables to hold form data
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console
    console.log("User Inputs:", {
      fullName,
      username,
      email,
      address,
      phoneNumber,
    });

    // Reset form fields
    setFullName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <div>
      <h2>User Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
