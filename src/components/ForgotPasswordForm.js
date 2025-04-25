import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/forgot-password", { email });
      setMessage(res.data.status);
    } catch (err) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control mb-3"
        />
        <button className="btn btn-primary">Send Reset Link</button>
        <p className="mt-3 text-success">{message}</p>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
