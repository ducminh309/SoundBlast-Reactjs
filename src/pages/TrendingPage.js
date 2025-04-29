import React, { useState } from "react";
import "./TrendingPage.css";
import hotNhacVietData from "../data/Datatrending/Hotnhacviet.json";
import nhacAuMyData from "../data/Datatrending/Nhacaumy.json";
import topNhacAuMyData from "../data/Datatrending/Topnhacaumy.json";
import topNhacVietData from "../data/Datatrending/Topnhacviet.json";

const TrendingPage = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (audioSrc) => {
    setCurrentSong(audioSrc);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col album-col">
          <div className="top-music-container">
            <h3 className="section-title">Trending now</h3>
            <h4 className="sub-title">Top nhạc Việt</h4>
            <div className="album-list">
              {hotNhacVietData.map((item) => (
                <div
                  className="album-item"
                  key={item.id}
                  onClick={() => playSong(item.audio)}
                >
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className="title">{item.title}</p>
                  <p className="artist">{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col list-col">
          <div className="hot-songs-container">
            <h2 className="section-title">Hot Song's</h2>
            <div className="hot-songs-grid">
              {topNhacVietData.map((song) => (
                <div
                  className="song-item"
                  key={song.id}
                  onClick={() => playSong(song.audio)}
                >
                  <img src={`/${song.cover}`} alt={song.title} className="song-cover" />
                  <div className="song-info">
                    <h4 className="song-title">{song.title}</h4>
                    <p className="song-artist">{song.artist}</p>
                  </div>
                  <span className="song-duration">03:40</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
      <div className="row">
        <div className="col album-col">
          <div className="top-music-container">
            <h3 className="section-title">Hot Song's</h3>
            <div className="album-list">
              {topNhacAuMyData.map((item) => (
                <div
                  className="album-item"
                  key={item.id}
                  onClick={() => playSong(item.audio)}
                >
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className="title">{item.title}</p>
                  <p className="artist">{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col list-col">
          <div className="hot-songs-container">
            <h2 className="section-title">Hot Song's</h2>
            <div className="hot-songs-grid">
              {nhacAuMyData.map((song) => (
                <div
                  className="song-item"
                  key={song.id}
                  onClick={() => playSong(song.audio)}
                >
                  <img src={`/${song.cover}`} alt={song.title} className="song-cover" />
                  <div className="song-info">
                    <h4 className="song-title">{song.title}</h4>
                    <p className="song-artist">{song.artist}</p>
                  </div>
                  <span className="song-duration">03:40</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {currentSong && (
        <div className="audio-player">
          <audio controls autoPlay src={`/${currentSong}`}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};
export default TrendingPage;
