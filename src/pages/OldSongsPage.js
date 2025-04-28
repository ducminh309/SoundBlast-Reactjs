import React, { useState, useEffect, useRef } from "react";
import data90s from "../data/Dataoldsong/Music90s.json";
import data80s from "../data/Dataoldsong/Music80s.json";
import "./OldSongPage.css";

const OldSongsPage = () => {
  const [songs80s, setSongs80s] = useState([]);
  const [songs90s, setSongs90s] = useState([]);
  const audioRefs = useRef({});

  useEffect(() => {
    setSongs80s(data80s);
    setSongs90s(data90s);
  }, []);

  const togglePlay = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      if (audio.paused) {
        // Pause all other audios
        Object.values(audioRefs.current).forEach((a) => {
          if (a !== audio) a.pause();
        });
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  const renderSongCard = (song) => (
    <div key={song.id} className="song-card">
      <img src={song.cover} alt={song.title} />
      <p className="song-title">{song.title}</p>
      <p className="song-artist">{song.artist}</p>

      {/* Ẩn audio element */}
      <audio
        ref={(el) => (audioRefs.current[song.id] = el)}
        src={song.audio}
      />

      {/* Nút Play/Pause */}
      <button className="play-button" onClick={() => togglePlay(song.id)}>
        ▶️ Play
      </button>
    </div>
  );

  return (
    <div className="cover-wrapper">
      <div
        className="cover-background"
        style={{ backgroundImage: "url('/images/imagesoldsong/anhnenoldsong.jpg')" }}
      >
        <div className="circle-image-wrapper">
          <img src="/images/imagesoldsong/avata.jpg" alt="Old Song" className="circle-image" />
        </div>
        <h1 className="cover-title">OLD SONG</h1>
      </div>

      <p className="cover-footer-text"></p>
      <div className="cover-footer"><hr /></div>

      <div className="music-container">
        {/* MUSIC 90S */}
        <div className="music-section">
          <h2 className="section-title">MUSIC 90S</h2>
          <div className="song-list">
            {songs90s.map(renderSongCard)}
          </div>
        </div>

        {/* MUSIC 80S */}
        <div className="music-section">
          <h2 className="section-title">MUSIC 80S</h2>
          <div className="song-list">
            {songs80s.map(renderSongCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSongsPage;
