import React, { createContext, useReducer } from "react";

export enum Actions {
  SET_PLAYLIST,
  SET_SRC,
  SET_VOLUME,
  TOGGLE_PLAYING,
  TOGGLE_LOOP,
  TOGGLE_MUTE,
}

const initialState = {
  playlist: [],
  playing: false,
  src: "",
  loop: false,
  mute: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_PLAYLIST:
      const src = action.payload?.[0]?.src;

      return {
        ...state,
        playlist: action.payload,
        src,
      };
    case Actions.SET_SRC:
      return {
        ...state,
        src: action.payload,
      };
    case Actions.TOGGLE_PLAYING:
      return {
        ...state,
        playing: !state.playing,
      };
    case Actions.TOGGLE_LOOP:
      return {
        ...state,
        loop: !state.loop,
      };
    case Actions.TOGGLE_MUTE:
      return {
        ...state,
        mute: !state.mute,
      };
    case Actions.SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };

    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <PlayerContext.Provider value={[state, dispatch]}>
      {children}
    </PlayerContext.Provider>
  );
};

export const PlayerContext = createContext(initialState);
export default Store;
