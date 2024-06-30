import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Project } from "./Pages/Project";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}
