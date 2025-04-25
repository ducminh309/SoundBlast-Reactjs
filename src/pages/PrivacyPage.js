import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPage = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        color: '#fff',
        minHeight: '100vh',
        padding: '60px 0',
      }}
    >
      <Container className="px-4">
        <h1 className="text-center mb-5 fw-bold" style={{ letterSpacing: '1px' }}>
          Privacy Policy
        </h1>

        <p>
          At SoundBlast, we respect your privacy and are committed to protecting your personal data.
        </p>

        <h4 className="mt-4">What We Collect</h4>
        <ul>
          <li>Your name and email address when registering or submitting feedback</li>
          <li>Anonymous usage data for improving user experience</li>
        </ul>

        <h4 className="mt-4">How We Use Your Information</h4>
        <p>
          Your information is used strictly to improve our services, respond to feedback,
          and enhance your music discovery experience.
        </p>

        <h4 className="mt-4">Data Security</h4>
        <p>
          We implement strong security measures to keep your information safe and confidential.
          Your data will never be sold or shared with third parties without consent.
        </p>

        <h4 className="mt-4">Your Consent</h4>
        <p>
          By using SoundBlast, you consent to the terms of this Privacy Policy.
        </p>

        <h4 className="mt-4">Contact Us</h4>
        <p>
          If you have any questions regarding this policy, feel free to contact us at:
          <br />
          📧 <strong>privacy@soundblast.com</strong>
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPage;
