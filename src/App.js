import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './component/airbus/landingPage';
import AirlinePage from './component/airbus/airline/airlinePage';
import AircraftPage from './component/airbus/aircraft/aircraftPage';
import LoginPage from './component/airbus/loginPage';
import LogoutPage from './component/airbus/logout';
import HomePage from './component/home/homePage';
import MroLoginPage from './component/mro/mroLoginPage';
import MroLandingPage from './component/mro/mroLandingPage';
import MroLogoutPage from './component/mro/mroLogoutPage';
import MroMaintenanceHistoryPage from './component/mro/history/mroMaintenanceHistoryPage';
import MroCustomerAirlinePage from './component/mro/customer_airline/mroCustomerAirlinePage';
import MroProfilePage from './component/mro/profile/mroProfilePage';

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

        <Route path="/mro/login" element={<MroLoginPage />} />
        <Route path="/mro/landingPage" element={<MroLandingPage />} />
        <Route path="/mro/logout" element={<MroLogoutPage />} />
        <Route path="/mro/history" element={<MroMaintenanceHistoryPage />} />
        <Route path="/mro/customer_airline" element={<MroCustomerAirlinePage />} />
        <Route path="/mro/profile" element={<MroProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
