import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SeekSkill from "./pages/SeekSkill";
// import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Connections from "./pages/Connections";
import MyJourney from "./pages/MyJourney";
// import SkillBoard from "./pages/SkillBoard";

function App() {
  return (
    <Router>
      <div className="wave-bg" />
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="SkillBoard" element={<SkillBoard />} /> */}
          <Route path="Offer" element={<Offer />} />
          <Route path="Seek" element={<SeekSkill />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="*" element={<SignIn />} /> */}
          {/* /* <Route path="/explore" element={<Explore />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/my-journey" element={<MyJourney />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
