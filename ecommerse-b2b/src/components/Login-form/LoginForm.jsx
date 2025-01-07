import "./LoginForm.css"
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      let isValid = true;
      setEmailError('');
      setPasswordError('');
  
      if (!email) {
        setEmailError('Email is required.');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError('Please enter a valid email address.');
        isValid = false;
      }
  
      if (!password) {
        setPasswordError('Password is required.');
        isValid = false;
      } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long.');
        isValid = false;
      }
  
      if (isValid) {
        alert('Login successful!');
        // Here, you can handle login logic (e.g., API call).
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };


export default LoginForm;