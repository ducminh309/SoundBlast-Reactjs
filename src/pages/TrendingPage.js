import React, { useState } from "react";
import styles from "./TrendingPage.module.css";

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
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.albumCol}`}>
          <div className={styles.topMusicContainer}>
            <h3 className={styles.sectionTitle}>Trending now</h3>
            <h4 className={styles.subTitle}>Top nhạc Việt</h4>
            <div className={styles.albumList}>
              {hotNhacVietData.map((item) => (
                <div
                  className={styles.albumItem}
                  key={item.id}
                  onClick={() => playSong(item.audio)}
                >
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.artist}>{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.col} ${styles.listCol}`}>
          <div className={styles.hotSongsContainer}>
            <h2 className={styles.sectionTitle}>Hot Song's</h2>
            <div className={styles.hotSongsGrid}>
              {topNhacVietData.map((song) => (
                <div
                  className={styles.songItem}
                  key={song.id}
                  onClick={() => playSong(song.audio)}
                >
                  <img src={`/${song.cover}`} alt={song.title} className={styles.songCover} />
                  <div className={styles.songInfo}>
                    <h4 className={styles.songTitle}>{song.title}</h4>
                    <p className={styles.songArtist}>{song.artist}</p>
                  </div>
                  <span className={styles.songDuration}>03:40</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.col} ${styles.albumCol}`}>
          <div className={styles.topMusicContainer}>
            <h3 className={styles.sectionTitle}>Hot Song's</h3>
            <div className={styles.albumList}>
              {topNhacAuMyData.map((item) => (
                <div
                  className={styles.albumItem}
                  key={item.id}
                  onClick={() => playSong(item.audio)}
                >
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.artist}>{item.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.col} ${styles.listCol}`}>
          <div className={styles.hotSongsContainer}>
            <h2 className={styles.sectionTitle}>Hot Song's</h2>
            <div className={styles.hotSongsGrid}>
              {nhacAuMyData.map((song) => (
                <div
                  className={styles.songItem}
                  key={song.id}
                  onClick={() => playSong(song.audio)}
                >
                  <img src={`/${song.cover}`} alt={song.title} className={styles.songCover} />
                  <div className={styles.songInfo}>
                    <h4 className={styles.songTitle}>{song.title}</h4>
                    <p className={styles.songArtist}>{song.artist}</p>
                  </div>
                  <span className={styles.songDuration}>03:40</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {currentSong && (
        <div className={styles.audioPlayer}>
          <audio controls autoPlay src={`/${currentSong}`}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TrendingPage;
