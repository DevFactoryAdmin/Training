import React from "react";
import ReactDOM from "react-dom/client";

import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import BasicPage from "./BasicPage";
import Sample from "./SampleCallBack2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Sample />
      </DndProvider>
    </div>
  </React.StrictMode>
);
