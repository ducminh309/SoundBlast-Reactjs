import React, { useRef, useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const CustomAudioCard = ({ image, title, artist, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.onloadedmetadata = () => setDuration(audio.duration);
    audio.ontimeupdate = () => setCurrentTime(audio.currentTime);
  }, []);

  return (
    <Card className="mb-4 shadow-sm">
      <div className="img-wrapper position-relative">
  <Card.Img
    variant="top"
    src={image}
    style={{ height: "220px", objectFit: "cover" }}
  />
  <div className="img-overlay">
    <span className="overlay-text">🔥 {title}</span>
  </div>
</div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{artist}</Card.Text>

        <Button variant="success" size="sm" onClick={togglePlay}>
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </Button>

        <Form.Range
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="my-2"
        />
        <div style={{ fontSize: "0.9rem" }}>{formatTime(currentTime)} / {formatTime(duration)}</div>
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="auto"
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          hidden
          />
      </Card.Body>
    </Card>
  );
};

export default CustomAudioCard;
