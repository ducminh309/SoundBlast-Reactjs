import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const [params] = useSearchParams();
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const token = params.get("token");
  const email = params.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/reset-password", {
        token,
        email,
        password,
        password_confirmation,
      });
      setMessage(res.data.status);
    } catch (err) {
      setMessage("Reset failed.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={password_confirmation}
          onChange={(e) => setConfirm(e.target.value)}
          className="form-control mb-3"
        />
        <button className="btn btn-success">Reset Password</button>
        <p className="mt-3 text-info">{message}</p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
