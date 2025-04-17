import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const NewReleases = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new-releases")
      .then((res) => setReleases(res.data))
      .catch((err) => console.error("Error fetching New Releases data:", err));
  }, []);

  return (
    <section id="newreleases" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🎶 NEW RELEASES</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {releases.map((song) => (
          <div className="col" key={song.id}>
            <Card className="h-100 shadow text-center">
              <Card.Img
                variant="top"
                src={`http://localhost:8000/${song.image}`}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist}</Card.Text>
                <audio controls src={`http://localhost:8000/${song.audio}`} style={{ width: "100%" }} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
