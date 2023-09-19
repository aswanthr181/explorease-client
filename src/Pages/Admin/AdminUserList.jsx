import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import AdminViewUser from '../../Components/Admin/AdminViewUser/AdminViewUser'

function AdminUserList() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <AdminViewUser/>
    </div>
  )
}

export default AdminUserList