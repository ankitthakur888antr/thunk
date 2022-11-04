import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Singlepost from "./pages/SinglePost";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Singlepost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
