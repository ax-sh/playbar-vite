import React, { createContext, useReducer } from "react";

export enum Actions {
  SET_PLAYLIST,
  SET_SRC,
}

const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_PLAYLIST:
      console.log(
        "🚀 ~ file: Store.tsx ~ line 16 ~ Reducer ~ action.payload?.[0]",
        action.payload
      );
      return {
        ...state,
        playlist: action.payload,
        // src: action.payload?.[0].src,
      };
    case Actions.SET_SRC:
      return {
        ...state,
        src: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  playlist: [],
  playing: false,
  src: "",
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
