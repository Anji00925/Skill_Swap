import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Explore from "./pages/Explore";
// import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import SkillBoard from "./pages/SkillBoard";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SkillBoard" element={<SkillBoard />} />
          {/* <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
