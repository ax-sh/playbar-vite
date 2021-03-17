import React from "react";
import styled from "styled-components";
const InputStyle = styled.input`
  --color: #1db954;
  background: linear-gradient(
    to right,
    var(--color) 0%,
    var(--color) 50%,
    #fff 50%,
    #fff 100%
  );
  /* border: solid 1px #82cfd0; */
  /* height: 7px; */
  /* width: 356px; */
  border-radius: 8px;
  overflow: hidden;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
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

const Input = ({ onSeek, max = 100, ...props }) => {
  const onInput = function ({ target }: { target }) {
    let value = ((target.value - target.min) / (target.max - target.min)) * 100;
    const color = "var(--color)";
    target.style.background = `linear-gradient(to right, ${color} 0%, ${color}  ${value}%, #fff  ${value}%, white 100%)`;
    onSeek(value);
  };
  return (
    <InputStyle
      min="0"
      max={max}
      step="0.01"
      {...props}
      type="range"
      onInput={onInput}
      onChange={onInput}
    />
  );
};

export default Input;
