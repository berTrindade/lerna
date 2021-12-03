import React from "react";
// import { Provider } from "react-redux";

import { FloatingPage } from "@bertrindade/components";

// import { 
//   eventComponentHelper,
//   reduxStoreHelper,
//   responsibleHelper,
//   taskListHelper
// } from "@bertrindade/utils/helpers";

export const EventsModule = () => {
    return (
      <>
        <h1>EventsModule</h1>
        <FloatingPage text="I'm a component from components package" />
      </>
    )
}

export default EventsModule;
