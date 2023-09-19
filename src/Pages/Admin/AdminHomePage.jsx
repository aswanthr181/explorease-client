import React, { useState } from 'react'
import AdminHome from '../../Components/Admin/AdminHome/AdminHome'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import DashBoard from '../../Components/Admin/Dashboard/Dashboard'

function AdminHomePage() {
  const [sales,setSales]=useState(false)
  return (
    <div className='flex bg-white'>
      
      <AdminNavbar />
      {sales?<AdminHome setSales={setSales} />:<DashBoard setSales={setSales}/>}
      {/* <AdminHome /> */}
      
    </div>
  )
}

export default AdminHomePage