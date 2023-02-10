import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import ProjectDetailPage from "./pages/projectPage/artscape/project.component";
import ProjectPetstatePage from "./pages/projectPage/petstate/projectpetstate.component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/projectOverview"} element={<ProjectDetailPage />} />
        <Route path={"/projectpetstate"} element={<ProjectPetstatePage />} />
      </Routes>
    </div>
  );
}

export default App;
