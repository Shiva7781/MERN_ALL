import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Otp from "./components/Otp";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
