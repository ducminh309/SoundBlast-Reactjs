import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

const ContactPage = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
        minHeight: '100vh',
        color: '#fff',
        padding: '60px 0',
      }}
    >
      <Container>
        <h1 className="text-center mb-5 fw-bold" style={{ letterSpacing: '2px' }}>
          Contact Us
        </h1>

        <Row className="mb-5">
          <Col md={4} className="text-center mb-4">
            <TelephoneFill size={30} className="mb-2" />
            <p>+84 123 456 789</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <EnvelopeFill size={30} className="mb-2" />
            <p>support@soundblast.com</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <GeoAltFill size={30} className="mb-2" />
            <p>123 Music Avenue, HCM City</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form className="bg-white text-dark p-5 rounded shadow-lg">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message here..." />
              </Form.Group>
              <div className="text-end">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
