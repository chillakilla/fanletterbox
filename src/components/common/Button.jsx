import React from "react";
import styled, { css } from "styled-components";

export default function Button({ size = "small", onClick = null, text }) {
  return (
    <SubmitButtonWrapper $size={size} onClick={onClick}>
      <button>{text}</button>
    </SubmitButtonWrapper>
  );
}

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    ${({ $size }) => {
      switch ($size) {
        case "small":
          return css`
            font-size: 14px;
          `;
        case "medium":
          return css`
            font-size: 24px;
          `;
        case "large":
          return css`
            font-size: 32px;
          `;
        default:
          break;
      }
    }}
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    border: none;
    border-radius: 5px;
    background-color: #e2a0fa;
    text-align: right;
    color: white;
    &:hover {
      background-color: white;
      color: #e2a0fa;
    }
    &:active {
      transform: scale(1.05);
      transition: all 0.2s;
    }
  }
`;
