import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get("/data/genres.json")
      .then(res => setGenres(res.data))
      .catch(err => console.error("Error fetching genres", err));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Genres</h2>
      <Row>
        {genres.map((genre, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>{genre.name}</Card.Title>
                <Card.Text>{genre.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GenresPage;
