import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const show = keyframes`
  0% { 
    display: none;
    opacity: 0;
  }
  1% { display: flex; }
  100% { opacity: 1; }
`;

export const move = keyframes`
  0% { 
    display: none;
    margin-top: 2rem;
    opacity: 0;
  }
  1% { display: flex; }
  100% { 
    opacity: 1;
    margin-top: 0;
  }
`;

export const Overlay = styled("div")`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  background: rgba(0, 0, 0, 0.7);
  overflow: auto;
  padding: 60px 10px;
  animation: ${show} 0.3s ease;
`;

export const WrapContent = styled("div")`
  width: 680px;
  animation: ${move} 0.3s ease;
`;
