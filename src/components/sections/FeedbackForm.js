import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    axios.post("http://localhost:8000/api/feedback", form)
      .then(() => {
        setStatus({ success: true, error: false, loading: false });
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({ success: false, error: true, loading: false });
      });
  };

  return (
    <section id="feedback" className="my-5 px-3">
      <h2 className="text-center fw-bold mb-4">📬 SEND FEEDBACK</h2>

      <div className="mx-auto p-4 rounded shadow-sm bg-light" style={{ maxWidth: "600px" }}>
        {status.success && <Alert variant="success">🎉 Feedback sent successfully!</Alert>}
        {status.error && <Alert variant="danger">❌ Something went wrong. Try again.</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              placeholder="Your feedback..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary" disabled={status.loading}>
              {status.loading ? <Spinner size="sm" animation="border" /> : "Send Feedback"}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default FeedbackForm;
