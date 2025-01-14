import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home-page/Home';
import LoginForm from './components/Login-form/LoginForm';
import Registration from './components/Resistration-form/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/About-us/AboutUs';
import SellerDashboard from './components/Seller/SellerDashboard';
import AddProductForm from "./components/AddProduct/AddProductForm";
import ElectronicItems from './components/Categories/ElectronicIteams';
import CartPage from './components/Cart/CartPage';

// const VALID_CREDENTIALS = {
//   email: "test@example.com",
//   password: "password123"
// };

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]); // Cart state

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // const handleLogin = (credentials) => {
  //   if (credentials.email === VALID_CREDENTIALS.email && 
  //       credentials.password === VALID_CREDENTIALS.password) {
  //     setIsAuthenticated(true);
  //     localStorage.setItem('isAuthenticated', 'true');
  //     toast.success('Login successful!');
  //     return true;
  //   }
  //   toast.error('Invalid email or password');
  //   return false;
  // };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    toast.info('Logged out successfully');
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/SignUp" element={<Registration />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home onLogout={handleLogout} cart={cart} />
            </ProtectedRoute>
          }
        />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/AddProduct" 
            element={ 
                        <AddProductForm />
                     
                  } />
        <Route path="/Registration" element={<Registration />} />
        <Route
          path="/electronicItems"
          element={<ElectronicItems cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>} />
        <Route path="/login" element={<LoginForm />} />

      
      </Routes>
    </Router>
  );
}

export default App;
