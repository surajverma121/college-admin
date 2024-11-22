import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
   

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Overview Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Admin</h2>
          <p className="text-gray-600">Here's an overview of the current system status.</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Total Users</h3>
            <p className="text-4xl font-extrabold text-blue-600">1,245</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Total Sales</h3>
            <p className="text-4xl font-extrabold text-green-500">$58,390</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Active Projects</h3>
            <p className="text-4xl font-extrabold text-yellow-500">12</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Pending Tasks</h3>
            <p className="text-4xl font-extrabold text-red-500">8</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <ul className="divide-y divide-gray-200">
              <li className="py-4 flex justify-between items-center">
                <span className="text-gray-800">New user registered: Jane Doe</span>
                <span className="text-sm text-gray-500">10 mins ago</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <span className="text-gray-800">Project "Alpha" completed</span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <span className="text-gray-800">Sales report generated</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
