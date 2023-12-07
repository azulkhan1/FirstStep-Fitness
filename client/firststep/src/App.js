import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Workout from "./pages/Workout";
<<<<<<< HEAD
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
=======
import GetBMI from "./pages/GetBMI";
>>>>>>> 5ed6f2f8e8cfd99ada32cf388aa9d5f88b308fae

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
<<<<<<< HEAD
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
=======
          <Route path="/GetBMI" element={<GetBMI />} />
>>>>>>> 5ed6f2f8e8cfd99ada32cf388aa9d5f88b308fae
        </Routes>
      </div>
    </Router>
  );
}

export default App;
