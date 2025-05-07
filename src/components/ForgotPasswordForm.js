import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending reset link...");
    try {
      const res = await axios.post("http://127.0.0.1:8000/dev-reset-link", { email });
      console.log("Response:", res.data);
      setMessage(`Reset link: ${res.data.reset_link}`);
    } catch (err) {
      console.error("Error:", err);
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
      </form>

      {/* Show clickable reset link */}
      {message.includes("http") ? (
        <p className="mt-3">
          <strong>Reset link:</strong>{" "}
          <a href={message.split("Reset link: ")[1]} target="_blank" rel="noopener noreferrer">
            Click here
          </a>
        </p>
      ) : (
        <p className="mt-3 text-success">{message}</p>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
