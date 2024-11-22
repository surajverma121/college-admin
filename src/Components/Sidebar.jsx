import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const menuItems = [
  { name: "Home", path: "/" }, 
  { name: "profile", path: "/profile" },
  {name:"product",path:"/product"},
  { name: "Service", path: "/profile" },
  { name: "logout", path: "/profile" },
  { name: "Login&Logout", path: "/Login" },
];

const Sidebar = () => {
  return (<>
    <Navbar/>
   <div className="pt-14">
   <div className='fixed  z-10 left-0   px-4 border-r  bg-gray-800  text-white border-gray-300 w-[16%] h-screen'>
      <h1 className="text-xl font-bold p-4 border-b border-gray-700">My App</h1>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block p-2 rounded hover:bg-gray-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="p-4 border-t border-gray-700 text-center">
        © 2024 Your Company
      </footer>
    </div>
   </div>
  </>
  );
};

export default Sidebar;
