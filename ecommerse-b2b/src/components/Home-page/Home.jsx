// import React, { useState } from "react";
import { useState } from "react";
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"
import Scroller from "../Infinite-scroller/Scroller";
import LoginForm from "../Login-form/LoginForm";

const Home = ({ onLogout }) => {

  const [loginClicked, setLoginClicked] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleClickLogin = () => {
    setLoginClicked(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {loginClicked && <LoginForm onClose={() => setLoginClicked(false)} />}
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex">
            <h1 className="text-xl font-semibold text-gray-800">Bulkify</h1>
            {/* <span className="text-sm text-gray-600">B2B</span> */}
            <sub className="text-blue-500">B2B</sub>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-4 relative ml-20 mr-20">
            <input
              type="text"
              placeholder="Search for products, suppliers, and more"
              className="w-full px-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
          </div>


          {/* Right Section */}
          <div className="flex items-center space-x-6 text-gray-600">
            {/* Login */}
            <button className="hover:text-blue-500"
              onClick={handleClickLogin}>Login</button>

            {/* Become a Seller */}
            <div className="hover:text-blue-500 cursor-pointer">
              <Link to="/seller">Becom a seller</Link>
            </div>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-500 flex items-center space-x-1">
                <span>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Content */}
              <div className="absolute hidden group-hover:block bg-white text-gray-700 rounded-md shadow-md ">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-500"><Link to="/Dashboard">Portfolio</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-500"><Link to="/AboutUs">AboutUs</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-500"><a href="/help">Help</a></li>
                </ul>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <button className="hover:text-blue-500 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3.6-7H6.4M7 13l-1.35 5.4M17 13l1.35 5.4M7 13h10M7 13L6.4 8m10 5l.6-5M6.4 8h12.2" />
                </svg>
                <span>Cart</span>
              </button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <section id="carousel" className="py-10">
        <div className="container mx-auto px-6">
          <Slider {...carouselSettings}>
            <div className="h-60">
              <img
                src="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Samsung-phones-Galaxy-S10.jpg"
                alt="Featured Product 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-60">
              <img
                src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1190,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/12/mb-kas-041223-laptop-offer-en.jpg"
                alt="Featured Product 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-60">
              <img
                src="https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-blue-side-mo.jpg?imbypass=true"
                alt="Featured Product 3"
                className="w-full h-full object-contain"
              />
            </div>
          </Slider>
        </div>
      </section>




      {/* Categories Section */}
      <section id="categories" className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Product Categories</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Snacks Category */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                alt="Snacks Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Snacks</h4>
              <p className="text-gray-600 mb-4">Explore a delicious variety of snacks for every craving.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Explore
              </button>
            </div>

            {/* Shoes Category */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
              <img
                src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
                alt="Shoes Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Shoes</h4>
              <p className="text-gray-600 mb-4">Find stylish and comfortable shoes for all occasions.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Shop Now
              </button>
            </div>

            {/* Electronic Items Category */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2570/2570571.png"
                alt="Electronics Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Electronic Items</h4>
              <p className="text-gray-600 mb-4">Discover the latest gadgets and electronics for your needs.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>





      {/* Features Section */}
      <section id="features" className="py-10 ">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Our Features</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Wide Product Range */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3388/3388819.png"
                  alt="Wide Product Range Icon"
                  className="w-16 h-16 mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Wide Product Range</h4>
                <p className="text-gray-600 text-center">Access thousands of products tailored to your industry.</p>
              </div>
            </div>

            {/* Verified Suppliers */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="Verified Suppliers Icon"
                  className="w-16 h-16 mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Verified Suppliers</h4>
                <p className="text-gray-600 text-center">Connect with trusted and reliable suppliers.</p>
              </div>
            </div>

            {/* Easy Integration */}
            <div className="bg-white p-6 shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3063/3063823.png"
                  alt="Easy Integration Icon"
                  className="w-16 h-16 mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Easy Integration</h4>
                <p className="text-gray-600 text-center">Seamless process to connect and collaborate with partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scroller />


      {/* About Section */}
      <section id="about" className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold mb-6 text-indigo-900">About Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our platform bridges the gap between buyers and sellers, offering unparalleled services to businesses of all sizes.
            We strive to empower your business with seamless connectivity and innovative solutions.
          </p>
          <div className="mt-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
              alt="About Us"
              className="mx-auto w-40 h-40"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold mb-6 text-blue-700">Get in Touch</h3>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or need assistance? We're here to help. Reach out to us anytime!
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition"
          >
            Contact Us
          </a>
          <div className="mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006378.png"
              alt="Contact Us"
              className="mx-auto w-32 h-32"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm">
                &copy; 2025 <span className="font-bold text-white">Bulkify</span>. All Rights Reserved.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-4 lg:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
};

export default Home;