import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/utils/PrivateRoute';
import { AuthProvider } from '@/context/AuthContext';


import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import Header from '@/components/Header';


function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <Header />
          <Routes>
            <Route path="/" element={
              <PrivateRoute element={<HomePage />} />
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
