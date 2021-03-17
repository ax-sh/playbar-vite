import React, { useState, useRef } from "react";
import "./App.scss";
import PlayBar from "./PlayBar/PlayBar";
import styled from "styled-components";
import { Actions, PlayerContext } from "./PlayBar/Store";

let TRACKS = [
  "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3",
  "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
  "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3",
  "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
  "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3",
];
TRACKS = TRACKS.map((i) => {
  return {
    author: "Yo Ma",
    title: Math.random() + " TITLE",
    src: i,
    time: 0,
    duration: 0,
  };
});

const Div = styled.div`
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
function App() {
  const [state, dispatch] = React.useContext(PlayerContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  React.useEffect(() => {
    audioRef.current.src = state.src;
  }, [audioRef.current, state.src]);
  React.useEffect(() => {
    state.playing ? audioRef.current.play() : audioRef.current.pause();
  }, [audioRef.current, state.playing]);
  React.useEffect(() => {
    audioRef.current.loop = state.loop;
  }, [audioRef.current, state.loop]);
  React.useEffect(() => {
    audioRef.current.muted = state.mute;
    if (state.volume === undefined) return;

    audioRef.current.volume = state.volume / 100;
  }, [audioRef.current, state.mute, state.volume]);
  // NOTE TEMP ONLY FOR DEBUG FOR NOW, state dependent
  React.useEffect(() => {
    console.log("STATE", state);
  }, [state]);

  return (
    <div className="App">
      <Div>
        <PlayBar playlist={TRACKS} />
        <audio
          ref={audioRef}
          onLoadedMetadata={({ target }) =>
            dispatch({ type: Actions.SET_DURATION, payload: target.duration })
          }
          onTimeUpdate={({ target }) =>
            dispatch({
              type: Actions.SET_CURRENT_TIME,
              payload: target.currentTime,
            })
          }
          controls
        />
      </Div>
    </div>
  );
}

export default App;
