// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register"; // Importiere die Register-Komponente
import Login from "./components/Login";
import RegisterSuccess from "./components/RegisterSuccess"; // Importiere die RegisterSuccess-Komponente
import Dashboard from "./components/Dashboard";
import NewGameForm from "./components/NewGameForm";
import Stats from "./components/Stats";
import AccountSettings from "./components/AccountSettings";
import AllGames from "./components/AllGames";
import PlayerStats from "./components/PlayerStats";
import StatsDetails from "./components/StatsDetails"; // Importiere die StatsDetails-Komponente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/register/success" element={<RegisterSuccess />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-game-form" element={<NewGameForm />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/all-games" element={<AllGames />} />
        <Route path="/player-stats" element={<PlayerStats />} />
        <Route path="stats-details" element={<StatsDetails />} /> 
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
