/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text } from "nectar-ui";
import { createPortal } from "react-dom";
import { Overlay, WrapContent } from "../style";

export const FloatingPagePortal = ({ children }) => { 
  return createPortal(
  <Overlay>
    <WrapContent>
      {children}
    </WrapContent>
    </Overlay>,    
    document.body
  );
}

export default FloatingPagePortal;
