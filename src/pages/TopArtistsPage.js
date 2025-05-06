import React, { useState } from 'react';
import favourite from "../data/Datatopartists/favourite.json";
import hotsearch from "../data/Datatopartists/hotsearch.json";
import latest from "../data/Datatopartists/Latest.json";
import searchhits from "../data/Datatopartists/Searchhits.json";
import styles from './TopArtistsPage.module.css';

const Section = ({ title, data, onPlay }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.cardsContainer}>
      {data.map(item => (
        <button key={item.id} className={styles.card} onClick={() => onPlay(item.audio)}>
          <img src={item.image} alt={item.title} className={styles.cardImage} />
          <p className={styles.cardTitle}>{item.title}</p>
        </button>
      ))}
    </div>
  </div>
);

const TopArtistsPage = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const handlePlay = (audioSrc) => setCurrentAudio(audioSrc);

  return (
    <div className={styles.topArtistsPage}>
      <h1 className={styles.mainTitle}>Top ca sĩ</h1>
      <Section title="Hot Search" data={hotsearch} onPlay={handlePlay} />
      <Section title="Yêu thích" data={favourite} onPlay={handlePlay} />
      <Section title="Mới nhất" data={latest} onPlay={handlePlay} />
      <Section title="Lượt tìm kiếm" data={searchhits} onPlay={handlePlay} />

      {currentAudio && (
        <audio controls autoPlay className={styles.audioPlayer}>
          <source src={currentAudio} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ audio.
        </audio>
      )}
    </div>
  );
};

export default TopArtistsPage;
