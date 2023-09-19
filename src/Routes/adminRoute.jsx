import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminHomePage from '../Pages/Admin/AdminHomePage'
import AdminLoginForm from '../Components/Admin/AdminLogin/AdminLoginForm'
import AdminUserList from '../Pages/Admin/AdminUserList'
import { useSelector } from 'react-redux'
import AdminAgencyList from '../Pages/Admin/AdminAgencyList'
import AdminViewPendings from '../Pages/Admin/AdminViewPending'
import AdminBannerPage from '../Pages/Admin/AdminBannerPage'



function AdminRoute() {
    const token=useSelector((state)=>state.Admin.Token)
    return (
        <div>
            <Routes>

                <Route path='/login' element={token?<AdminHomePage/>:<AdminLoginForm/>} />
                <Route path='/home' element={token?<AdminHomePage/>:<AdminLoginForm/>} />
                <Route path='/userList' element={token?<AdminUserList/>:<AdminLoginForm/>} />
                <Route path='/agencyList' element={token?<AdminAgencyList/>:<AdminLoginForm/>} />
                <Route path='/pendingApprovals' element={token?<AdminViewPendings/>:<AdminLoginForm/>} />
                <Route path='/banner' element={token?<AdminBannerPage/>:<AdminLoginForm/>} />
            </Routes>

        </div>
    )
}

export default AdminRoute