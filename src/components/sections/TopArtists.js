import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/top-artists")
      .then((res) => setArtists(res.data))
      .catch((err) => console.error("Error fetching top artists:", err));
  }, []);

  return (
    <section id="topartists" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🌟 TOP ARTISTS</h2>

      <div className="row row-cols-2 row-cols-md-4 g-4">
        {artists.map((artist) => (
          <div className="col" key={artist.id}>
            <Card className="text-center h-100 shadow">
              <Card.Img
                variant="top"
                src={`http://localhost:8000/${artist.image}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
                <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                  <Card.Text className="text-muted">{artist.country}</Card.Text>
                </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArtists;


