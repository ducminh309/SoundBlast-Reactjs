import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const LanguagesPage = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get("/data/languages.json")
      .then(res => setLanguages(res.data))
      .catch(err => console.error("Error fetching languages", err));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Languages</h2>
      <Row>
        {languages.map((lang, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>{lang.name}</Card.Title>
                <Card.Text>{lang.region}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LanguagesPage;
