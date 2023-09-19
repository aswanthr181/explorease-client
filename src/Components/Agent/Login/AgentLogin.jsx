import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import userAxios from '../../../Axios/userAxios'
import AgencyAxios from '../../../Axios/agencyAxios'
import { useDispatch } from 'react-redux'
import { AgencyLogin } from '../../../Redux/AgentAuth'

function AgentLogin() {

  const agencyAxios = AgencyAxios()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()
  const dispatch=useDispatch()

  const generateError = (error)=>toast.error(error, { position: 'bottom-center' })

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      generateError("Please fill the Email field");
      return;
    }
    if (!password.trim()) {
      generateError("Please fill the Password field");
      return;
    }

    try {
      const response = await agencyAxios.post('/login', { email, password })

      const result = response.data.agentLogin
      console.log('login return   * ',result);
      if(result.status){
        const token=result.token
        dispatch(AgencyLogin({token:token}))
        navigate('/agency/home')
      }else{
        generateError(result.message)
      }

    } catch (error) {
      generateError("An error occurred. Please try again.");
      console.error(error);

    }

  }
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-orange-200" >
        <Toaster position="bottom-center" reverseOrder={false} />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            AGENCY LOGIN
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin} >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-orange-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <h6 className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            {/* <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            > */}
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link className='lo-sign' to='/agency/signup'>
                signup here
              </Link>
            </p>

            {/* </a> */}

          </h6>
        </div>
      </div>
    </>
  )
}

export default AgentLogin