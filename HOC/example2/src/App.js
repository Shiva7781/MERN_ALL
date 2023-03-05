import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>HOC Example 2</h1>
      <User userId={3} />
      <User userId={7} />
    </div>
  );
}

export default App;
