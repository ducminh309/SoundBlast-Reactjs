import React, { useEffect, useState } from "react";
import axios from "axios";

const OldSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/old-songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error("Error fetching old songs:", err));
  }, []);

  return (
    <section id="oldsongs" className="my-5 px-3">
      <h2 className="mb-4 text-center fw-bold">🎼 OLD SONGS</h2>

      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item">
            <strong>{song.title}</strong> – {song.artist}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OldSongs;



