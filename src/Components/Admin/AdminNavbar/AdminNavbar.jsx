import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faArrowRightFromBracket,faChartSimple,
//     faFutbol,
//     faImage,
//     faUser,} from '@fortawesome/free-solid-svg-icons'
import { AdminLogout } from '../../../Redux/AdminAuth'

function AdminNavbar() {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const logout = () =>{
    dispatch(AdminLogout())
    navigate('/admin/login')
   }

   const dashboard=()=>{
    navigate('/admin/home')
   }
   const userList = ()=>{
    navigate('/admin/userList')
   }

   const agencyList = () =>{
    navigate('/admin/agencyList')
   }

   const banner=()=>{
    navigate('/admin/banner')
   }
  return (
    <div  className="w-1/6 h-screen bg-stone-500 flex flex-col items-center space-y-11">
        <img src="" className="pt-10 md:pt-32 w-12" alt="" />
      <div className="flex items-center" onClick={dashboard}>
        {/* <FontAwesomeIcon className="h-6 mr-2"  /> */}
        <div className="font-bold hidden md:block text-black">DASHBOARD</div>
      </div>
      <div className="flex items-center" onClick={userList}>
        {/* <FontAwesomeIcon className="h-6 mr-2"  /> */}
        <div className="font-bold hidden md:block text-black">USERLIST</div>
      </div>
      <div className="flex items-center" onClick={agencyList}>
        {/* <FontAwesomeIcon className="h-6 mr-2"  /> */}
        <div className="font-bold hidden md:block text-black">AGENCYLIST</div>
      </div>
      <div className="cursor-pointer flex items-center" onClick={banner}>
        {/* <FontAwesomeIcon className="h-6 mr-2"  /> */}
        <div className="font-bold hidden md:block text-black">BANNER</div>
      </div>
      <div className="flex-grow"></div>
      <div onClick={logout} className="mt-auto flex items-center">
        {/* <FontAwesomeIcon className="h-6 mr-2"  /> */}
        <div onClick={logout} className="mt-6  mb-6 hidden md:block font-bold">
          Logout
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar