import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthWrapper from './Components/Auth/AuthWrapper';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';

const AppWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route
        path="*"
        element={(
          <AuthWrapper>
            <App />
          </AuthWrapper>
                      )}
      />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;
