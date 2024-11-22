import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Product from './Components/product';
import LoginLogout from './Components/LoginLogout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    

        <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: (
            <Home />
        ),
      },
      {
        path: "Home",
        element: (
            <Home />
          
        ),
      },
      {
        path: "profile",
        element: (
            <Profile />
        ),
      },
      {
        path: "profile",
        element: (
            <Profile />
        ),
      },
      {
        path: "product",
        element: (
            <Product />
        ),
      },
      {
        path: "Login",
        element: (
            <LoginLogout />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

