import React from "react";
import {Link} from "react-router-dom";

const Home = ({ onLogout }) => {

    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
      };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="display flex ">
            <h1 className="text-xl font-semibold text-gray-800">Bulkify </h1>
            <sub>B2B</sub>
            </div>
         
          <ul className="flex space-x-6 text-gray-600">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li className="hover:text-blue-500"><Link to ="/Dashboard">Portfolio</Link></li>
            <li className="hover:text-blue-500"><Link to="/AboutUs">AboutUs</Link></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li>
              <button 
                onClick={handleLogout}
                className="hover:text-blue-500 cursor-pointer"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our B2B Bulkify Marketplace</h2>
          <p className="text-lg mb-6">Find the best products and services for your business needs.</p>
          <a
            href="#features"
            className="bg-white text-blue-500 px-6 py-3 rounded-md shadow hover:bg-gray-100"
          >
            Explore Features
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Wide Product Range</h4>
              <p className="text-gray-600">Access thousands of products tailored to your industry.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Verified Suppliers</h4>
              <p className="text-gray-600">Connect with trusted and reliable suppliers.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Easy Integration</h4>
              <p className="text-gray-600">Seamless process to connect and collaborate with partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <p className="text-gray-600">
            Our platform bridges the gap between buyers and sellers, offering unparalleled services to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Have questions or need assistance? We're here to help.</p>
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 B2B Marketplace. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
