import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/languages")
      .then((res) => setLanguages(res.data))
      .catch((err) => console.error("Error fetching languages:", err));
  }, []);

  return (
    <section id="languages" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🌐 LANGUAGES</h2>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {languages.map((lang) => (
          <div className="col" key={lang.id}>
            <Card className="text-center h-100 shadow">
              <Card.Img
                variant="top"
                src={`http://localhost:8000/${lang.image}`}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
              <Card.Body>
                <Card.Title>{lang.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

