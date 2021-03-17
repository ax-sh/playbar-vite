import React, { createContext, useReducer } from "react";

export enum Actions {
  SET_PLAYLIST,
  SET_SRC,
  SET_VOLUME,
  SET_NEXT,
  SET_PREV,
  TOGGLE_PLAYING,
  TOGGLE_LOOP,
  TOGGLE_MUTE,
  SET_DURATION,
  SET_CURRENT_TIME,
}

const initialState = {
  playlist: [],
  playing: false,
  src: "",
  loop: false,
  mute: false,
  index: 0,
  duration: 0,
  currentTime: 0,
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
    case Actions.SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };
    case Actions.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case Actions.SET_SRC:
      return {
        ...state,
        src: action.payload,
      };
    case Actions.SET_NEXT:
      if (!state.playlist?.length) return state;
      state.index++;
      const n = state.index % state.playlist.length | 0;
      return {
        ...state,
        src: state.playlist[n].src,
        playing: true,
        // current: { ...state.playlist[n], playing: true },
      };

    case Actions.SET_PREV:
      if (!state.playlist?.length) return state;
      state.index--;
      const p = state.index % state.playlist.length | 0;
      return {
        ...state,
        src: state.playlist[p < 0 ? p * -1 : p].src,
        playing: true,
        //     current: { ...state.playlist[p < 0 ? p * -1 : p], playing: true },
      };
      return state;
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
