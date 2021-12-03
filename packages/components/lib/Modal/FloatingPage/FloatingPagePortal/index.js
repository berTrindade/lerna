/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text } from "nectar-ui";
import { createPortal } from "react-dom";

export const FloatingPagePortal = ({ children }) => { 
  return createPortal(<Text>{children}</Text>, document.body);
}

export default FloatingPagePortal;
