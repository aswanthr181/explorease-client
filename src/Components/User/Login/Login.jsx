import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import UserAxios from '../../../Axios/userAxios'
import { ClientLogin, GetUserData } from '../../../Redux/ClientAuth'
import Googlelogin from './Googlelogin'

function Login() {

  const userAxios = UserAxios()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const generateError = (error) => toast.error(error, { position: 'bottom-center' })
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      generateError("Please fill in all the fields");
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      generateError("Please enter a valid email address");
      return;
    }

    try {
      const response = await userAxios.post('/login', {
        email, password
      })
      const result = response.data.userLogin

      if (result.Status) {
        const token = result.token
        const UserData = response.data.user
        console.log('usssssssssssr', UserData);
        dispatch(ClientLogin({ token: token }))
        dispatch(GetUserData({ UserData: UserData }))
        navigate("/");
      } else {
        generateError(result.message)
        console.log('status false');

      }
    } catch (error) {
      generateError("An error occurred. Please try again.");
      console.error(error);

    }

  }
  return (
    <>
      {/* <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-orange-200">

        <Toaster position='top-center' reverseOrder={false} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="Logo/18f5e7f5-ebf2-41ea-81d7-c4a8c7091a25.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">



            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                EMAIL
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Password
                </label>
          
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                LOGIN
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link to='/signup' >signUp</Link>
            </a>
          </p>

          <Googlelogin />
        </div>
      </div> */}



      {/* <section className="bg-white h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <Toaster position='top-center' reverseOrder={false} />
        <div className="md:w-1/3 max-w-sm">
          <img className='w-full'
            src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-jane-style-national-day-long-vacation-travel-image_16107.jpg"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            <Googlelogin />

          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-black">Or</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="bg-slate-300 text-sm text-black w-full px-4 py-2 border border-solid border-gray-300 rounded" placeholder="Email Address" />
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="bg-slate-300 text-black text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" placeholder="Password" />
          <div className="mt-4 flex justify-between font-semibold text-sm">

          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
          </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#"><Link to='/signup' >signUp</Link></a>
          </div>
        </div>
      </section> */}
      <div className="bg-white min-h-screen ">
      <Toaster position='top-center' reverseOrder={false} />
        <div className=" md:py-8">
          <form className="" onSubmit={handleLogin}>
            <div className="flex md:bg-none  md:bg-opacity-25 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1523538290088-51e3e7d1c00d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60')] md:border border-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div
                className="hidden md:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
                }}
              ></div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold flex justify-center items-center  text-gray-700 text-center">
                  <img
                    className="w-24"
                    src="/Logo/18f5e7f5-ebf2-41ea-81d7-c4a8c7091a25.jpg"
                    alt=""
                  />
                </h2>
                <p className="text-xl text-black text-center">
                  Welcome back!
                </p>
                <div className="mb-5 flex justify-center items-center">
                  <Googlelogin />
                </div>

                <div className="mt-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-black text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                  
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4"></span>
                  <a href="#" className="text-xs text-gray-700 uppercase">
                    <Link to="/signup">REGISTER HERE</Link>
                  </a>
                  <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
                <div className='flex justify-center'>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login