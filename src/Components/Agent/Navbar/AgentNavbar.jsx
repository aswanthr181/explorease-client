import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FiMessageSquare } from 'react-icons/fi';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AgencyLogout } from '../../../Redux/AgentAuth'
import AgencyAxios from '../../../Axios/agencyAxios';





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AgentNavbar() {
  const agencyAxios=AgencyAxios()
  const navigate = useNavigate()
  const [agencyData,setAgencyData]=useState()
  const [logo,setLogo]=useState()
  const navigation = [
    { name: 'Home', url: '/agency/home', current: false },
    { name: 'Dashboard', url: agencyData?.isApproved===2?'/agency/dashboard':'/agency/registration' , current: false },
    { name: 'Chats', url: agencyData?.isApproved===2?'/agency/chat':'/agency/registration', current: false },
    { name: 'PLAN', url: agencyData?.isApproved===2?'/agency/plan':'/agency/registration'  , current: false },
  ]

  const dispatch = useDispatch()
  const token = useSelector((state) => state.Agency.Token)

  useEffect(()=>{
    if(token){
      agencyAxios.get('/getAgencyData')
      .then((res)=>{
        setAgencyData(res.data.agencyData)
        setLogo(res.data.agencyData.image)
      }).catch((error)=>{
				console.log(error);
			})
    }
  },[])

  const logout = () => {
    dispatch(AgencyLogout())
    navigate('/agency/login')
  }
  const loadChat=()=>{
    navigate('/agency/chat')
  }
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>

          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                    src="/Logo/18f5e7f5-ebf2-41ea-81d7-c4a8c7091a25.jpg"
                    alt="TRAVELIA"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
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
                      <img
                        className="h-8 w-8 rounded-full"
                        src={logo?logo:''}
                        alt=""
                      />
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
                            
                            <Link to={agencyData?.isApproved===2?'/agency/profile':'/agency/registration'} >{agencyData?.isApproved===2?'Profile':'Register'} </Link>
                          </h6>
                        )}
                      </Menu.Item>
                      {agencyData?.isApproved===2?<Menu.Item>
                        {({ active }) => (
                          <h6

                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <Link to='/agency/ourTrips' >Schedules</Link>
                          </h6>
                        )}
                      </Menu.Item>:''}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href=""
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                      {token ?
                        <Menu.Item>
                          {({ active }) => (
                            <h6
                              onClick={logout}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </h6>
                          )}
                        </Menu.Item>
                        : <Menu.Item>
                          {({ active }) => (
                            <h6
                              onClick={logout}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign in
                            </h6>
                          )}
                        </Menu.Item>}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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

export default AgentNavbar