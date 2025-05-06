import React, { useState, useRef } from 'react';
import styles from './TopChartPage.module.css';
import topChartsData from '../data/Datatopchar/topchar.json';

const TopChartPage = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const audioRef = useRef(new Audio());

  const handlePlay = (index) => {
    const selectedSong = topChartsData[index];
    if (currentSongIndex === index) {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    } else {
      audioRef.current.src = selectedSong.audio;
      audioRef.current.play();
      setCurrentSongIndex(index);
    }
  };

  const isPlaying = (index) => currentSongIndex === index && !audioRef.current.paused;

  return (
    <div className={styles.topChartContainer}>
      <h2 className={styles.title}>Top charts</h2>
      <div className={styles.songsGrid}>
        {topChartsData.map((song, index) => (
          <div key={index} className={styles.songCard}>
            <div className={styles.songImageWrapper}>
              <img src={song.image} alt={song.title} className={styles.songImage} />
            </div>
            <div className={styles.songInfo}>
              <h3 className={styles.songTitle}>{song.title}</h3>
              <p className={styles.songArtist}>{song.artist}</p>
            </div>
            <div className={styles.songControls}>
              <button className={styles.playButton} onClick={() => handlePlay(index)}>
                {isPlaying(index) ? '⏸️' : '▶️'}
              </button>
            </div>
            <div className={styles.songFooter}>
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
