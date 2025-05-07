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
                  <audio controls className={styles.audioPlayerItem}>
                    <source src={`/${item.audio}`} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
                  </audio>
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
                <div className={styles.songItem} key={song.id}>
                  <div className={styles.songContent}>
                    <img
                      src={`/${song.cover}`}
                      alt={song.title}
                      className={styles.songCover}
                    />
                    <div className={styles.songInfo}>
                      <h4 className={styles.songTitle}>{song.title}</h4>
                      <p className={styles.songArtist}>{song.artist}</p>
                    </div>
                    <span className={styles.songDuration}>03:40</span>
                  </div>
                  <audio controls className={styles.audioPlayerItem}>
                    <source src={`/${song.audio}`} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
                  </audio>
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
                <div className={styles.albumItem} key={item.id}>
                  <img src={`/${item.cover}`} alt={item.title} />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.artist}>{item.artist}</p>
                  <audio controls className={styles.audioPlayerItem}>
                    <source src={`/${item.audio}`} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
                  </audio>
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
                <div className={styles.songItem} key={song.id}>
                  <div className={styles.songContent}>
                    <img
                      src={`/${song.cover}`}
                      alt={song.title}
                      className={styles.songCover}
                    />
                    <div className={styles.songInfo}>
                      <h4 className={styles.songTitle}>{song.title}</h4>
                      <p className={styles.songArtist}>{song.artist}</p>
                    </div>
                    <span className={styles.songDuration}>03:40</span>
                  </div>
                  <audio controls className={styles.audioPlayerItem}>
                    <source src={`/${song.audio}`} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
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