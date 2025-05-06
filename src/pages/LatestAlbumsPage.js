import { Carousel } from 'react-bootstrap';
import data from "../data/Dataalbum/musiclis.json";
import songsWiz from '../data/Dataalbum/listalbumwizkalifa.json'; 
import songsAlw from '../data/Dataalbum/listalbumalw.json';
import songsMaroon5 from '../data/Dataalbum/listalbummaroon5.json';
import songmusic from '../data/Dataalbum/listmusic.json';
import styles from './LatestAlbumsPage.module.css';

function LatestAlbumsPage() {
  const featuredSongs = songmusic.slice(0, 6);
  const leftColumn = featuredSongs.slice(0, 3);
  const rightColumn = featuredSongs.slice(3, 6);

  const renderSongItem = (song) => (
    <div key={song.id} className="d-flex flex-column py-2 border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={song.image} alt={song.title} width="50" height="50" className="me-3 rounded" />
          <span>{song.title}</span>
        </div>
        <span>{song.duration}</span>
      </div>
      <audio controls src={song.audio} className={styles.audioPlayer}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );

  const renderAlbum = (title, image, songs) => (
    <div className="col-md-4">
      <div className={styles.albumContainer}>
        <img src={image} alt={title} className={styles.albumCover} />
        <div className={styles.albumInfo}>
          <h3>{title}</h3>
          <table className={styles.songTable}>
            <thead>
              <tr>
                <th>Music Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={song.id}>
                  <td>
                    {index + 1}. {song.title}
                    <div style={{ marginTop: '5px' }}>
                      <audio controls src={song.audio} style={{ width: "100%" }} />
                    </div>
                  </td>
                  <td>{song.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.playButton}>▶ PHÁT TẤT CẢ</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container" style={{ marginTop: "100px" }}>
        <Carousel>
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <img className={styles.carouselItemImg} src={item.image} alt={`Slide ${item.id}`} />
              <Carousel.Caption>
                <h5>{item.caption}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="container mt-5">
        <h5 className="fw-bold mb-4">BÀI HÁT NỔI BẬT</h5>
        <div className="row">
          <div className="col-md-6">{leftColumn.map(renderSongItem)}</div>
          <div className="col-md-6">{rightColumn.map(renderSongItem)}</div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">ALBUM</h2>
        <div className="row">
          {renderAlbum("Alan Walker", "https://i.pinimg.com/736x/1e/ec/39/1eec399370493231977c126aa882e0c2.jpg", songsAlw)}
          {renderAlbum("Maroon 5", "https://nld.mediacdn.vn/2015/89-maroon-5-1432219060822.jpg", songsMaroon5)}
          {renderAlbum("Wiz Khalifa", "https://photo.znews.vn/w660/Uploaded/unvjuas/2020_09_25/wiz_khalifa_see_you_again_vid_billboard_1548_1024x677.jpg", songsWiz)}
        </div>
      </div>
    </div>
  );
}

export default LatestAlbumsPage;
