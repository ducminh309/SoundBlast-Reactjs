import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/genres")
      .then((res) => setGenres(res.data))
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  return (
    <section id="genres" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🎼 GENRES</h2>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {genres.map((genre) => (
          <div className="col" key={genre.id}>
            <Card className="h-100 shadow text-center">
              <Card.Img
                variant="top"
                src={`http://localhost:8000/${genre.image}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{genre.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Genres;


