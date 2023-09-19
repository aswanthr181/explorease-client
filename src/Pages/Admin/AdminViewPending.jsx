import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import AdminViewPending from '../../Components/Admin/AdminViewAgency/AdminViewPending'

function AdminViewPendings() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <AdminViewPending/>
    </div>
  )
}

export default AdminViewPendings