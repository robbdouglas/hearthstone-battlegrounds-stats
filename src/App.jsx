// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register"; // Importiere die Register-Komponente
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} /> {/* Hinzugefügt */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
