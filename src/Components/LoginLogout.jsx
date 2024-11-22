import React, { useState } from 'react';

const LoginLogout = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Toggle Button */}
        <div className="flex justify-between mb-6">
          <button
            className={`py-2 px-4 text-lg font-medium ${isLogin ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={toggleForm}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 text-lg font-medium ${!isLogin ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={toggleForm}
          >
            Sign Up
          </button>
        </div>

        {/* Form Wrapper with Transition */}
        <div className="relative">
          {/* Conditionally applied animation for Login Form */}
          {isLogin ? (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isLogin ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Login Form */}
              <form>
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                !isLogin ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Sign Up Form */}
              <form>
                <div className="mb-4">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="signup-name"
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="signup-email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="signup-password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginLogout;
