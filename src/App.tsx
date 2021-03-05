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
  background-color: green;
`;

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
              <Icon />
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
