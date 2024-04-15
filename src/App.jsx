// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import RegisterSuccess from "./components/RegisterSuccess"; 
import Dashboard from "./components/Dashboard";
import NewGameForm from "./components/NewGameForm";
import Stats from "./components/Stats";
import AccountSettings from "./components/AccountSettings";
import AllGames from "./components/AllGames";
import PlayerStats from "./components/PlayerStats";
import StatsDetails from "./components/StatsDetails"; 
import ChangeUserName from "./components/ChangeUserName";
import ChangePassword from "./components/ChangePassword";
import ChangeEmail from "./components/ChangeEmail";
import DeleteAccount from "./components/DeleteAccount";

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
        <Route path="/change-username" element={<ChangeUserName />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/change-email" element={<ChangeEmail />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<h1>ERROR 404: Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
