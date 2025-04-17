import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const TopCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/top-charts")
      .then((res) => setCharts(res.data))
      .catch((err) => console.error("Erorr Getting Top Charts:", err));
  }, []);

  return (
    <section id="topcharts" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🎧 TOP CHARTS</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {charts.map((song) => (
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

export default TopCharts;
