import React,{useEffect, useState} from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,BellIcon,XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { ClientLogout } from '../../../Redux/ClientAuth'
import {FaUserCircle} from 'react-icons/fa'
import UserAxios from '../../../Axios/userAxios'


 


const navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'ABOUT', href: '/about', current: false },
    { name: 'Bookings', href: '/bookings', current: false },
    { name: 'TRIPS', href: '/trips', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Header() {

  const userAxios=UserAxios()
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const [userData,setUserData]=useState()

  const token=useSelector((state)=>state.Client.Token)

  useEffect(()=>{
		if(token){
			userAxios.get("/user-profile",{
				headers:{
					Authorization: `Bearer ${token}`,
				},
			}).then((response)=>{
				
				setUserData(response.data.data)
				console.log(userData);
			}).catch((error)=>{
				console.log(error);
			})
		}
        
    }, [])
  const logout = ()=>{
    dispatch(ClientLogout());
    navigate('/login')
  }
  
  return (
   
    
    <Disclosure as="nav" className="bg-slate-300">
      {({ open }) => (
        <>
          <div className="mx-auto  w-screen px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    // src="Logo/Screenshot 2023-07-24 105235.png"
                    src='/Logo/18f5e7f5-ebf2-41ea-81d7-c4a8c7091a25.jpg'
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={()=>navigate(item.href)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-slate-950 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {
                        userData?
                        userData.image?
                        <img
                        className="h-8 w-8 rounded-full"
                        src={userData?userData.image:""}
                        
                        // "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />:<FaUserCircle className="h-8 w-8 rounded-full"/>:<FaUserCircle className="h-8 w-8 rounded-full"/>
                      }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <h6
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <Link to='/user-profile' >PROFILE</Link>
                          </h6>
                        )}
                      </Menu.Item>
                      {/* /wallet */}
                      <Menu.Item>
                        {({ active }) => (
                          <h6
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <Link to='/bookings' >Bookings</Link>
                          </h6>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <h6
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <Link to='/wallet' >Wallet</Link>
                          </h6>
                        )}
                      </Menu.Item>
                      
                      
                      {/* <Menu.Item>
                        {({ active }) => (
                          <h6
                            href=""
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </h6>
                        )}
                      </Menu.Item> */}
                      {token?(<Menu.Item>
                        {({ active }) => (
                          <h6
                            onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </h6>
                        )}
                      </Menu.Item>):(<Menu.Item>
                        {({ active }) => (
                          <h6
                          onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Login
                            </h6>
                        )}
                      </Menu.Item>)}
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                 onClick={()=>navigate(item.href)} 
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 bg-gray-900 cursor-pointer hover:bg-gray-700 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
     
    </Disclosure>


  )
}

export default Header