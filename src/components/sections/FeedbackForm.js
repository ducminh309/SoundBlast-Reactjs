import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const FeedbackForm = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #c084fc, #f3e8ff)",
        padding: '80px 0'
      }}
    >
      <Container>
      <h2
  className="text-center fw-bold mb-5"
  style={{ color: '#6a1b9a', fontSize: '2.5rem' }}
>
  FEEDBACK
</h2>


        <Form className="bg-white bg-opacity-25 p-5 rounded-4 shadow-lg text-white">
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="formName">
              <Form.Label style={{ color: '#333', fontWeight: 500 }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
              <Form.Label style={{ color: '#333', fontWeight: 500 }}>Email</Form.Label>

                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="formSubject">
              <Form.Label style={{ color: '#333', fontWeight: 500 }}>Subject</Form.Label>

                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formNickname">
              <Form.Label style={{ color: '#333', fontWeight: 500 }}>Nickname</Form.Label>

                <Form.Control type="text" placeholder="Enter nickname" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formMessage" className="mb-4">
          <Form.Label style={{ color: '#333', fontWeight: 500 }}>Message</Form.Label>

            <Form.Control as="textarea" rows={6} placeholder="Write your feedback here..." />
          </Form.Group>

          <div className="text-center">
          <Button
  type="submit"
  className="px-5 py-2 fw-bold text-white"
  style={{
    background: 'linear-gradient(90deg, #9b51e0, #6a1b9a)',
    border: 'none'
  }}
>
  SEND »
</Button>

          </div>
        </Form>
      </Container>
    </section>
  );
};

export default FeedbackForm;
