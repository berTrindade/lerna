/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text } from "nectar-ui";
import { createPortal } from "react-dom";
import { Overlay } from "../style";

export const FloatingPagePortal = ({ children }) => { 
  return createPortal(<Overlay><Text>{children}</Text></Overlay>, document.body);
}

export default FloatingPagePortal;
