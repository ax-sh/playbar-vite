import "./PlayBar.scss";
import React from "react";

const PlayBar = (playlist: Array<Object>) => {
  console.log("🚀 ~ file: PlayBar.tsx ~ line 5 ~ PlayBar ~ playlist", playlist);
  const title = "title";
  const author = "author";
  const [currentTime, setCurrentTime] = React.useState("0:00");
  return (
    <div className="play__bar">
      <div className="info">
        <h3>{title}</h3>
        <h6>{author}</h6>
      </div>
      <div className="controller__container">
        <div className="controller__buttons">
          {/* <PrevIcon /> */}
          {/* <PlayIcon /> */}
          {/* <NextIcon /> */}
        </div>
        <div className="seekbar__wrapper">
          <span>{currentTime}</span>
          {/* <Input className="seekbar" max="8" onSeek={onSeek} /> */}
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
