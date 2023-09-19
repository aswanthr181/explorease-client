import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar/AdminNavbar'
import Banner from '../../Components/Admin/AdminBanner/AdminBanner'

function AdminBannerPage() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <Banner/>
    </div>
  )
}

export default AdminBannerPage