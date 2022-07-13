import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react_beginner/movie/:id" element={<Detail />}></Route>
        <Route path="/react_beginner" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
