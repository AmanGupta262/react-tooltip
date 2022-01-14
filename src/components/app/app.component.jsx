import { Tooltip } from "..";

import "./app.component.css";

function App() {
  return (
    <div className="app flex">
      <Tooltip className="mr-5" direction="left" title="Tooltip left">
        left
      </Tooltip>
      <Tooltip className="mr-5" direction="top" title="Tooltip top">
        top
      </Tooltip>
      <Tooltip className="mr-5" direction="bottom" title="Tooltip bottom">
        bottom
      </Tooltip>
      <Tooltip className="mr-5" direction="right" title="Tooltip right">
        right
      </Tooltip>
    </div>
  );
}

export default App;
