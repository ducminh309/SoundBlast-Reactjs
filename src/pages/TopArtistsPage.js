import React, { useState } from 'react';
import favourite from "../data/Datatopartists/favourite.json";
import hotsearch from "../data/Datatopartists/hotsearch.json";
import latest from "../data/Datatopartists/Latest.json";
import searchhits from "../data/Datatopartists/Searchhits.json";
import './TopArtistsPage.css';

const Section = ({ title, data, onPlay }) => (
    <div className="section">
        <h2 className="section-title">{title}</h2>
        <div className="cards-container">
            {data.map(item => (
                <button
                    key={item.id}
                    className="card"
                    onClick={() => onPlay(item.audio)}
                >
                    <img src={item.image} alt={item.title} className="card-image" />
                    <p className="card-title">{item.title}</p>
                </button>
            ))}
        </div>
    </div>
);

const TopArtistsPage = () => {
    const [currentAudio, setCurrentAudio] = useState(null);

    const handlePlay = (audioSrc) => {
        setCurrentAudio(audioSrc);
    };

    return (
        <div className="top-artists-page">
            <h1 className="main-title">Top ca sĩ</h1>
            <Section title="Hot Search" data={hotsearch} onPlay={handlePlay} />
            <Section title="Yêu thích" data={favourite} onPlay={handlePlay} />
            <Section title="Mới nhất" data={latest} onPlay={handlePlay} />
            <Section title="Lượt tìm kiếm" data={searchhits} onPlay={handlePlay} />

            {currentAudio && (
                <audio controls autoPlay className="audio-player">
                    <source src={currentAudio} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ audio.
                </audio>
            )}
        </div>
    );
};

export default TopArtistsPage;
