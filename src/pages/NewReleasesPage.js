import React, { useRef, useState } from "react";
import data from "../data/Datanewreleases/newreleases.json";
import styles from "./NewReleasesPage.module.css";

const NewReleasesPage = () => {
  const audioRef = useRef(null);
  const [currentId, setCurrentId] = useState(null);

  const handlePlayPause = (item) => {
    if (currentId === item.id) {
      audioRef.current.pause();
      setCurrentId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(item.audio);
      audioRef.current.play();
      setCurrentId(item.id);
      audioRef.current.onended = () => setCurrentId(null);
    }
  };

  return (
    <div className={styles.musicWrapper}>
      <h3 className={styles.sectionTitle}>BẢN PHÁT HÀNH MỚI NHẤT 2025</h3>
      {data.map((item) => (
        <div className={styles.musicItem} key={item.id}>
          <div className={styles.left}>
            <img src={item.image} alt={item.title} className={styles.cover} />
            <div className={styles.info}>
              <p><strong>Tên bài hát:</strong> {item.title}</p>
              <p><strong>Tên ca sĩ:</strong> {item.artist}</p>
              <p><strong>Xếp loại:</strong> {item.category}</p>
            </div>
          </div>
          <div className={styles.right}>
            <button
              className={styles.playBtn}
              onClick={() => handlePlayPause(item)}
            >
              {currentId === item.id ? "⏸️" : "▶️"}
            </button>
            <span>{item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewReleasesPage;
