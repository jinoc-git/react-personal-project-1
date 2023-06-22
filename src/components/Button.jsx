import React from 'react'
import { styled } from "styled-components";

function Button({ children, colors, eventFnc }) {
  return (
    <StButton colors={colors} onClick={eventFnc} >{ children }</StButton>
  )
}

export default Button

const StButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: #fff;
  border: 2px solid
    ${({ colors }) => {
      switch (colors) {
        case "red":
          return "rgba(255, 0, 0, 1)";
        case "green":
          return "rgba(0, 202, 0, 1)";
        case "yellow":
          return "rgba(255, 255, 0, 1)";
        default:
          return "rgba(0, 128, 128, 1)";
      }
    }};
  border-radius: 10px;
  box-shadow: ${({ colors }) => {
    switch (colors) {
      case "red":
        return "rgba(255, 0, 0, 0.6) 0px 3px 8px";
      case "green":
        return "rgba(0, 255, 0, 0.24) 0px 3px 8px";
      case "yellow":
        return "rgba(255, 255, 0, 0.4) 0px 3px 8px";
      default:
        return "rgba(0, 128, 128, 0.5) 0px 3px 8px;";
    }
  }};
  background-color: ${({ colors }) =>
    colors === "teal" ? "teal" : "transparent"};
`;