import React, { useState, useRef, useEffect } from 'react';
import styles from './TopChartPage.module.css';
import topChartsData from '../data/Datatopchar/topchar.json';

const TopChartPage = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const songsPerPage = 8;

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const handlePlayPause = (index) => {
    const audio = audioRef.current;

    // Nếu nhấn vào bài đang phát
    if (index === currentSongIndex) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      const newSong = topChartsData[index];
      setCurrentSongIndex(index);
      setProgress(0);
      audio.src = newSong.audio;
      audio.load();
      audio.addEventListener(
        'canplay',
        () => {
          audio.play();
          setIsPlaying(true);
        },
        { once: true }
      );
    }
  };

  const handleSeek = (e, index) => {
    if (index !== currentSongIndex) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const currentSongs = topChartsData.slice(startIndex, endIndex);

  return (
    <div className={styles.topChartContainer}>
      <h2 className={styles.title}>Top Charts</h2>

      <div className={styles.songsGrid}>
        {currentSongs.map((song, index) => {
          const actualIndex = startIndex + index;
          const isCurrent = currentSongIndex === actualIndex;

          return (
            <div key={actualIndex} className={styles.songCard}>
              <div className={styles.songImageWrapper}>
                <img src={song.image} alt={song.title} className={styles.songImage} />
              </div>

              <div className={styles.songInfo}>
                <h3 className={styles.songTitle}>{song.title}</h3>
                <p className={styles.songArtist}>{song.artist}</p>
              </div>

              <div className={styles.songControls}>
                <button
                  className={styles.playButton}
                  onClick={() => handlePlayPause(actualIndex)}
                >
                  {isCurrent && isPlaying ? '❚❚' : '▶'}
                </button>
              </div>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={isCurrent ? progress : 0}
                onChange={(e) => handleSeek(e, actualIndex)}
                className={styles.progressBar}
              />

              <div className={styles.songFooter}>
                <span>{String(actualIndex + 1).padStart(2, '0')}</span>
                <span>{isCurrent ? `${Math.floor(progress / 60)}:${String(Math.floor(progress % 60)).padStart(2, '0')}` : '0:00'}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.pagination}>
        {/* Thêm chữ 'Trước' và 'Sau' trước và sau các trang */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={currentPage === 1 ? styles.disabledPageBtn : styles.pageBtn}
          disabled={currentPage === 1}
        >
          {'<'} 
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? styles.activePageBtn : styles.pageBtn}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={currentPage === 3 ? styles.disabledPageBtn : styles.pageBtn}
          disabled={currentPage === 3}
        >
           {'>'}
        </button>
      </div>
    </div>
  );
};

export default TopChartPage;
