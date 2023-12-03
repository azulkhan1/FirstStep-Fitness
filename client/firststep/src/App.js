import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Workout from "./pages/Workout";
import GetBMI from "./pages/GetBMI";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/GetBMI" element={<GetBMI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
