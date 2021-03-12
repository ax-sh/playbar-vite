import React, { useState } from "react";
import "./App.css";

import styled from "styled-components";

const Div = styled.div`
  .play__bar {
    color: #fff;
    padding: 1rem;
    background-color: #000;
    display: flex;
    & .info {
      flex: 1;
      & h3,
      & h6 {
        margin: 0;
        padding: 0;
        text-align: left;
      }
      h3 {
        font-size: 1rem;
      }
    }
    & .controller__container {
      /* background: red; */
      flex: 10;
      .controller__buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 30%;
        margin: 0 auto;
        svg {
          fill: #fff;
          width: 34px;
          height: 34px;
          &:hover {
            fill: #1db954;
          }
        }
      }
      .seekbar {
        display: flex;
        & > * {
          flex: 1;
        }
      }
    }
  }
`;
const Icon = styled.button`
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #fff;
  }
  background-color: #fff;
  outline: none;
  border: none;
`;

const PlayIcon = () => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.75 9.70096C18.75 10.2783 18.75 11.7217 17.75 12.299L4.25 20.0933C3.25 20.6706 2 19.9489 2 18.7942L2 3.20577C2 2.05107 3.25 1.32938 4.25 1.90673L17.75 9.70096Z"></path>
  </svg>
);

function App() {
  const title = "title";
  return (
    <div className="App">
      <Div>
        <div className="play__bar">
          <div className="info">
            <h3>{title}</h3>
            <h6>{title}</h6>
          </div>
          <div className="controller__container">
            <div className="controller__buttons">
              <Icon />
              <PlayIcon />
              <Icon />
            </div>
            <div className="seekbar">
              <input type="range" />
            </div>
          </div>
        </div>
      </Div>
    </div>
  );
}

export default App;
