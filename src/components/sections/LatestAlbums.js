import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const LatestAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/latest-albums")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Error fetching Latest Albums data:", err));
  }, []);

  return (
    <section id="latestalbums" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">💿 LATEST ALBUMS</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {albums.map((album) => (
          <div className="col text-center" key={album.id}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={`http://localhost:8000/${album.cover}`}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>{album.artist}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestAlbums;


