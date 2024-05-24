import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './component/airbus/landingPage';
import AirlinePage from './component/airbus/airline/airlinePage';
import AircraftPage from './component/airbus/aircraft/aircraftPage';
import LoginPage from './component/airbus/loginPage';
import LogoutPage from './component/airbus/logout';
import HomePage from './homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/airline" element={<AirlinePage />} />
        <Route path="/aircraft" element={<AircraftPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
