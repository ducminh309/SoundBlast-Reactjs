// src/pages/AboutUs.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PeopleFill, MusicNoteBeamed, RocketTakeoff } from 'react-bootstrap-icons';

const AboutUs = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
        minHeight: "100vh",
        color: "#fff",
        padding: "60px 0"
      }}
    >
      <Container>
        <h1 className="text-center mb-5 fw-bold" style={{ letterSpacing: "2px" }}>
          About SoundBlast
        </h1>

        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Team"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p className="lead">
              <MusicNoteBeamed size={30} className="me-2" />
              SoundBlast is your ultimate destination for music discovery. From trending hits to nostalgic oldies, we bring music to life!
            </p>
            <p>
              We aim to connect people globally through the power of sound. Music isn’t just entertainment — it’s emotion, identity, and connection.
            </p>
          </Col>
        </Row>

        <Row className="text-center g-4">
          <Col md={6} data-aos="zoom-in">
            <Card className="bg-white text-dark shadow-lg h-100">
              <Card.Body>
                <RocketTakeoff size={40} className="text-primary mb-3" />
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To be the go-to music platform that inspires global connection and creativity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} data-aos="zoom-in" data-aos-delay="100">
            <Card className="bg-white text-dark shadow-lg h-100">
              <Card.Body>
                <PeopleFill size={40} className="text-success mb-3" />
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To deliver personalized music experiences that elevate joy, creativity, and community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/">
            <Button variant="light" size="lg">Back to Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
