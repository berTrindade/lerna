/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "nectar-ui";
import { createPortal } from "react-dom";
import { Overlay, WrapContent } from "../style";

export const FloatingPagePortal = ({ children }) => { 
  return createPortal(
  <Overlay>
    <WrapContent>
      <Card>
        {children}
      </Card>
    </WrapContent>
  </Overlay>,    
  document.body
  );
}

export default FloatingPagePortal;
