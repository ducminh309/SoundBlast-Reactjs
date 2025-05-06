import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomAudioCard from "../CustomAudioCard";

const TopCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/top-charts")
      .then((res) => setCharts(res.data))
      .catch((err) => console.error("Error Getting Top Charts:", err));
  }, []);

  return (
    <section id="topcharts" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🎧 TOP CHARTS</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {charts.map((song) => (
          <div className="col" key={song.id}>
            <CustomAudioCard
              image={`http://localhost:8000/${song.image}`}
              title={song.title}
              artist={song.artist}
              audioSrc={`http://localhost:8000/${song.audio}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCharts;
