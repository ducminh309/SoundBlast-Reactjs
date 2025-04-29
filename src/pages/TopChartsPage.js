import React, { useState, useRef } from 'react';
import './TopChartPage.css';
import topChartsData from '../data/Datatopchar/topchar.json';

const TopChartPage = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const audioRef = useRef(new Audio());

  const handlePlay = (index) => {
    const selectedSong = topChartsData[index];
    if (currentSongIndex === index) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      audioRef.current.src = selectedSong.audio;
      audioRef.current.play();
      setCurrentSongIndex(index);
    }
  };

  const isPlaying = (index) => {
    return currentSongIndex === index && !audioRef.current.paused;
  };

  return (
    <div className="top-chart-container">
      <h2 className="title">Top charts</h2>
      <div className="songs-grid">
        {topChartsData.map((song, index) => (
          <div key={index} className="song-card">
            <div className="song-image-wrapper">
              <img src={song.image} alt={song.title} className="song-image" />
            </div>
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>
            <div className="song-controls">
              <button className="play-button" onClick={() => handlePlay(index)}>
                {isPlaying(index) ? '⏸️' : '▶️'}
              </button>
            </div>
            <div className="song-footer">
              <span>01/11</span>
              <span>411</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopChartPage;
