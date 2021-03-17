import React, { useState } from "react";
import "./App.css";

import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  background: #000;

  .play__bar {
    color: #fff;
    padding: 1rem;
    background-color: #000;
    display: flex;
    background-color: rgb(18, 18, 18);
    color: rgb(196, 196, 196);
    padding: 35px 30px;
    border-radius: 6px;

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
          stroke-width: 0;
          &:hover {
            fill: #1db954;
            cursor: pointer;
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

const PrevIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 23.6518C5 24.3964 4.39638 25 3.65177 25L3.43914 25C2.69453 25 2.09091 24.3964 2.09091 23.6518L2.09091 6.34823C2.09091 5.60362 2.69454 5 3.43914 5L3.65177 5C4.39638 5 5 5.60362 5 6.34823L5 23.6518Z"
      fill="#191414"
    ></path>
    <path d="M5 23.6518C5 24.3964 4.39638 25 3.65177 25L3.43914 25C2.69453 25 2.09091 24.3964 2.09091 23.6518L2.09091 6.34823C2.09091 5.60362 2.69454 5 3.43914 5L3.65177 5C4.39638 5 5 5.60362 5 6.34823L5 23.6518Z"></path>
    <path
      d="M5.25 16.299C4.25 15.7217 4.25 14.2783 5.25 13.701L18.75 5.90673C19.75 5.32938 21 6.05107 21 7.20577L21 22.7942C21 23.9489 19.75 24.6706 18.75 24.0933L5.25 16.299Z"
      stroke="#191414"
    ></path>
    <path d="M5.25 16.299C4.25 15.7217 4.25 14.2783 5.25 13.701L18.75 5.90673C19.75 5.32938 21 6.05107 21 7.20577L21 22.7942C21 23.9489 19.75 24.6706 18.75 24.0933L5.25 16.299Z"></path>
  </svg>
);

const NextIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 6.34823C25 5.60362 25.6036 5 26.3482 5H26.5609C27.3055 5 27.9091 5.60362 27.9091 6.34823V23.6518C27.9091 24.3964 27.3055 25 26.5609 25H26.3482C25.6036 25 25 24.3964 25 23.6518V6.34823Z"
      fill="#191414"
    ></path>
    <path d="M25 6.34823C25 5.60362 25.6036 5 26.3482 5H26.5609C27.3055 5 27.9091 5.60362 27.9091 6.34823V23.6518C27.9091 24.3964 27.3055 25 26.5609 25H26.3482C25.6036 25 25 24.3964 25 23.6518V6.34823Z"></path>
    <path
      d="M24.75 13.701C25.75 14.2783 25.75 15.7217 24.75 16.299L11.25 24.0933C10.25 24.6706 9 23.9489 9 22.7942L9 7.20577C9 6.05107 10.25 5.32938 11.25 5.90673L24.75 13.701Z"
      stroke="#191414"
    ></path>
    <path d="M24.75 13.701C25.75 14.2783 25.75 15.7217 24.75 16.299L11.25 24.0933C10.25 24.6706 9 23.9489 9 22.7942L9 7.20577C9 6.05107 10.25 5.32938 11.25 5.90673L24.75 13.701Z"></path>
  </svg>
);

const InputStyle = styled.input`
  /* #myinput { */
  --color: #1db954;
  background: linear-gradient(
    to right,
    var(--color) 0%,
    var(--color) 50%,
    #fff 50%,
    #fff 100%
  );
  /* border: solid 1px #82cfd0; */
  border-radius: 8px;
  /* height: 7px; */
  overflow: hidden;
  /* width: 356px; */
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  /* } */
  height: 8px;
  cursor: pointer;
  &::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    background: var(--color);
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const Input = ({ ...props }) => {
  const onInput = function ({ target }) {
    let value = ((target.value - target.min) / (target.max - target.min)) * 100;
    console.log(value);
    const color = "var(--color)";
    target.style.background = `linear-gradient(to right, ${color} 0%, ${color}  ${value}%, #fff  ${value}%, white 100%)`;
  };
  return (
    <InputStyle
      min="0"
      max="100"
      step="0.01"
      {...props}
      type="range"
      onInput={onInput}
    />
  );
};

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
              <PrevIcon />
              <PlayIcon />
              <NextIcon />
            </div>
            <div className="seekbar">
              <Input />
            </div>
          </div>
        </div>
      </Div>
    </div>
  );
}

export default App;
