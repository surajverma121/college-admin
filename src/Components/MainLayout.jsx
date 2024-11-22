import React from "react"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const MainLayout = () => {
  return (
    <>

    <div >
      <div className="w-3/4">
      <Sidebar/>
      </div>
      <div className="left-60 pl-56 ">
            <Outlet/>
      </div>
     </div>
    </>
  )
}

export default MainLayout
