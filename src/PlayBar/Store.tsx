import React, { createContext, useReducer } from "react";

export enum Actions {
  SET_PLAYLIST,
  SET_SRC,
  TOGGLE_PLAYING,
  TOGGLE_LOOP,
}

const initialState = {
  playlist: [],
  playing: false,
  src: "",
  loop: false,
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
