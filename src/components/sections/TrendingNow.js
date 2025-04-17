import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import axios from "axios";

const TrendingNow = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/trending")
      .then((res) => {
        setSongs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error calling Trending API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-4 text-center">
      <h2 className="mb-4">🔥 Trending Now</h2>


      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="text-center">
          {songs.map((song) => (
            <Col md={4} key={song.id}>
              <Card className="mb-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`http://localhost:8000/${song.image}`}
                  alt={song.title}
                  height="220px"
                  style={{ objectFit: "cover" }}
                  
                />
               
                <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>{song.artist}</Card.Text>
                  <audio controls src={`http://localhost:8000/${song.audio}`} style={{ width: "100%" }} />
                </Card.Body>
              </Card>
            </Col>
          ))
          
          }
        </Row>
      )}
    </Container>
  );
};

export default TrendingNow;
