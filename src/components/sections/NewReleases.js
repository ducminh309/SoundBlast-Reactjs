import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomAudioCard from "../CustomAudioCard"; // Cập nhật path nếu cần

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

export default NewReleases;
