import React from "react";
import styles from "./TrendingPage.module.css";

import hotNhacVietData from "../data/Datatrending/Hotnhacviet.json";
import nhacAuMyData from "../data/Datatrending/Nhacaumy.json";
import topNhacAuMyData from "../data/Datatrending/Topnhacaumy.json";
import topNhacVietData from "../data/Datatrending/Topnhacviet.json";

const TrendingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {/* Cột trái - Top nhạc Việt */}
        <div className={`${styles.col} ${styles.albumCol}`}>
          <div className={styles.topMusicContainer}>
            <h3 className={styles.sectionTitle}>Trending now</h3>
            <h4 className={styles.subTitle}>Top nhạc Việt</h4>
            <div className={styles.albumList}>
              {hotNhacVietData.map((item) => (
                <div className={styles.albumItem} key={item.id}>
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.artist}>{item.artist}</p>
                  <audio controls src={`/${item.audio}`} className={styles.audioPlayerItem}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột phải - Top nhạc Việt (danh sách) */}
        <div className={`${styles.col} ${styles.listCol}`}>
          <div className={styles.hotSongsContainer}>
            <h2 className={styles.sectionTitle}>Hot Song's</h2>
            <div className={styles.hotSongsGrid}>
              {topNhacVietData.map((song) => (
                <div className={styles.songItem} key={song.id}>
                  <img src={`/${song.cover}`} alt={song.title} className={styles.songCover} />
                  <div className={styles.songInfo}>
                    <h4 className={styles.songTitle}>{song.title}</h4>
                    <p className={styles.songArtist}>{song.artist}</p>
                  </div>
                  <span className={styles.songDuration}>03:40</span>
                  <audio controls src={`/${song.audio}`} className={styles.audioPlayerItem}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        {/* Cột trái - Nhạc Âu Mỹ (top) */}
        <div className={`${styles.col} ${styles.albumCol}`}>
          <div className={styles.topMusicContainer}>
            <h3 className={styles.sectionTitle}>Hot Song's</h3>
            <div className={styles.albumList}>
              {topNhacAuMyData.map((item) => (
                <div className={styles.albumItem} key={item.id}>
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.artist}>{item.artist}</p>
                  <audio controls src={`/${item.audio}`} className={styles.audioPlayerItem}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột phải - Nhạc Âu Mỹ (list) */}
        <div className={`${styles.col} ${styles.listCol}`}>
          <div className={styles.hotSongsContainer}>
            <h2 className={styles.sectionTitle}>Hot Song's</h2>
            <div className={styles.hotSongsGrid}>
              {nhacAuMyData.map((song) => (
                <div className={styles.songItem} key={song.id}>
                  <img src={`/${song.cover}`} alt={song.title} className={styles.songCover} />
                  <div className={styles.songInfo}>
                    <h4 className={styles.songTitle}>{song.title}</h4>
                    <p className={styles.songArtist}>{song.artist}</p>
                  </div>
                  <span className={styles.songDuration}>03:40</span>
                  <audio controls src={`/${song.audio}`} className={styles.audioPlayerItem}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
