import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import AdminViewAgency from '../../Components/Admin/AdminViewAgency/AdminViewAgency'

function AdminAgencyList() {
  return (
    <div className='flex'>

        <AdminNavbar/>
        <AdminViewAgency/>

    </div>
  )
}

export default AdminAgencyList