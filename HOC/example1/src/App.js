import "./App.css";
import Acomp from "./components/Acomp";
import Bcomp from "./components/Bcomp";

function App() {
  return (
    <div className="App">
      <h1>HOC Example 1</h1>
      <br />
      <Acomp name="A - App.js" />
      <br />
      <Bcomp name="B - App.js" />
    </div>
  );
}

export default App;
