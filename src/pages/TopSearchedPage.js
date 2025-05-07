
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";

const TopSearchedPage = () => {
  const [songs, setSongs] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mock data for Top Searched Songs
    setSongs([
      {
        id: 1,
        title: "Shape of You",
        artist: "Ed Sheeran",
        image: "images/imagestopsearchedsong/searched2.png",
        youtubeId: "JGwWNGJdvx8?si=A3CdRxRgusLGlp7m", // YouTube video ID
      },
      {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        image: "./images/imagestopsearchedsong/searched3.png",
        youtubeId: "4NRXx6U8ABQ?si=Obv9G1zA9ivKp33F",
      },
      {
        id: 3,
        title: "Dance Monkey",
        artist: "Tones and I",
        image: "/images/imagestopsearchedsong/searched4.png",
        youtubeId: "q0hyYWKXF0Q?si=KQt9X91LwSQtlSHw",
      },
      {
        id: 4,
        title: "Someone Like You",
        artist: "Adele",
        image: "./images/imagestopsearchedsong/searched1.png",
        youtubeId: "hLQl3WQQoQ0?si=qTkOFz4TQPt8Wq6F",
      },
    ]);
  }, []);
  const handleImageClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div style={{ backgroundColor: "#E5E4DB", minHeight: "100vh", padding: "60px 0" }}>
      <Container className="d-flex flex-column align-items-center">
        <h2 className="text-center mb-5">Top Searched Songs</h2>
        <Row className="justify-content-center">
          {songs.map((song) => (
            <Col
              md={4}
              key={song.id}
              className="mb-4 d-flex justify-content-center align-items-center"
            >
              <Card
                style={{
                  width: "300px",
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={song.image}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onClick={() => handleImageClick(song.youtubeId)}
                />
                <Card.Body className="text-center p-2">
                  <Card.Title style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {song.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#666", fontSize: "1rem" }}>
                    {song.artist}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for YouTube video */}
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Body style={{ padding: 0 }}>
            {selectedVideo && (
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default TopSearchedPage;