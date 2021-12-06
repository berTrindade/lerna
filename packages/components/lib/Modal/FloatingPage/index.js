import React from "react";
import FloatingPagePortal from "./FloatingPagePortal";
import { Overlay } from "./style";

const FloatingPage = ({ text }) => (
  <>
    <Overlay>
      <FloatingPagePortal>{text}</FloatingPagePortal>
    </Overlay>
  </>
)

export default FloatingPage;