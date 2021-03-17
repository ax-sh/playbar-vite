import "./PlayBar.scss";
import React from "react";
import { ReactComponent as PlayIcon } from "./icons/Play.svg";
import { ReactComponent as PrevIcon } from "./icons/Prev.svg";
import { ReactComponent as NextIcon } from "./icons/Next.svg";
import Input from "./Input";

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const PlayBar = (playlist: Array<Object>) => {
  console.log("🚀 ~ file: PlayBar.tsx ~ line 5 ~ PlayBar ~ playlist", playlist);
  const title = "title";
  const author = "author";
  const [currentTime, setCurrentTime] = React.useState("0:00");
  const onSeek = (value: Number) => {
    const progress = calculateTime(value);
    setCurrentTime(progress);
    console.log("Yo", progress, value);
  };
  return (
    <div className="play__bar">
      <div className="info">
        <h3>{title}</h3>
        <h6>{author}</h6>
      </div>
      <div className="controller__container">
        <div className="controller__buttons">
          <PrevIcon />
          <PlayIcon />
          <NextIcon />
        </div>
        <div className="seekbar__wrapper">
          <span>{currentTime}</span>
          <Input className="seekbar" max="8" onSeek={onSeek} />
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
