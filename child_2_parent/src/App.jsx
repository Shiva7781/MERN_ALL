import { useState } from "react";
import "./App.css";
import Callback from "./component/Callback";

// parent
function App() {
  const [UIcolor, setUIColor] = useState(null);

  // our callback function
  const getcolorCB = (x) => {
    setUIColor(x);
    console.log('color:', x)
  };

  return (
    <div className="App">
      <div className="App_color_container" style={{ background: ` ${UIcolor}` }}></div>
      <Callback getcolor={getcolorCB} />
    </div>
  );
}

export default App;
