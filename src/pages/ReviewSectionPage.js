import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";

const ReviewSectionPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/feedback")
      .then((res) => setReviews(res.data))
      .catch((err) => {
        console.error("Error fetching feedback:", err);
        setError("Failed to load reviews. Please try again.");
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#E5E4DB", minHeight: "100vh", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">📝 USER REVIEWS</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <Row className="g-4">
          {reviews.map((review) => (
            <Col md={12} key={review.id}>
              <Card className="shadow-sm">
                <Card.Body className="d-flex align-items-start">
                  <img
                    src={`https://i.pravatar.cc/50?img=${Math.floor(Math.random() * 70)}`}
                    alt="Avatar"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <Card.Title className="mb-1">{review.nickname}</Card.Title>
                    <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                      {review.comment}
                    </Card.Text>
                    <Card.Text className="text-muted small">
                      {new Date(review.created_at).toDateString()}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ReviewSectionPage;