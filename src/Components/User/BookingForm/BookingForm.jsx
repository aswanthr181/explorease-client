import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import UserAxios from '../../../Axios/userAxios'
import { useParams } from 'react-router-dom'

function BookingForm() {
    const userAxios = UserAxios()
    const { id } = useParams()
    const [data, setData] = useState()
    const [name, setName] = useState('')
    const [passengers, setPassengers] = useState([])
    const [age, setAge] = useState('')
    const [ages, setAges] = useState([])
    const [gender, setGender] = useState('')
    const [genders, setGenders] = useState([])

    const generateError = (error) => toast.error(error, { position: 'bottom-center' })
    useEffect(() => {
        if (id) {
            userAxios.get(`/getTripDetails?id=${id}`)
                .then((res) => {

                    const result = res.data.data
                    setData(result)
                    
                })
        }
    }, [])
    const updateUsers = (e) => {
        e.preventDefault();

        if (!name.trim() || !age.trim()) {
            generateError("Please fill in all the fields");
            return;
        }
        if (!gender.trim()) {
            generateError("Please select gender");
            return;
        }

        if (isNaN(age) || age < 5 || age > 100) {
            generateError("Please enter valid age");
            return;
        }
        if(passengers.length===data.peoples){
            generateError("scheduled seats are full");
            return;
        }
        if(passengers.length===5){
            generateError("At a time only 5 booking possible");
            return;
        }
        
        setAges([...ages, age]);
        setPassengers([...passengers, name])
        setGenders([...genders, gender])
        setAge('');
        setName('')
        setGender('')
    }
    // const id = '64fb47ab6e1cffcadac9e882'
    const book = () => {
        userAxios.post('/book', {
            id, passengers, ages
        }).then((res) => {
            console.log(res.data.result);
        })

    }

    const handlePayment = async () => {
        console.log('idddd=', id);
        if (passengers.length < 1) {
            generateError("Please fill in all the fields");
            return;
        }
        if(passengers.length===data.peoples){
            generateError("scheduled seats are full");
            return;
        }
        try {
            const response = await userAxios.post('/create-checkout-session', {
                id, passengers, ages,genders
            })

            console.log(response.data);

            if (response.data.url) {
                window.location.href = response.data.url
            }
        } catch (error) {
            toast.error(`Payment failed: ${error.message}`)
        }
    }
    console.log('iddd232323d=', id);
    return (
        <>
            <div class="flex h-screen bg-gray-100">
                <Toaster position='top-center' reverseOrder={false} />
                <div class="m-auto">
                    <div>

                        <div type="button" class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">

                            <span class="pl-2 mx-1">Travellers Information</span>
                        </div>

                        <div class="mt-5 bg-white rounded-lg shadow">
                            <div class="flex">
                                <div class="flex-1 py-5 pl-5 overflow-hidden">
                                <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <path d="M12,2C7.03,2,3,6.03,3,11v2c0,4.97,4.03,9,9,9s9-4.03,9-9v-2C21,6.03,16.97,2,12,2z M12,20c-3.87,0-7-3.13-7-7v-2c0-3.87,3.13-7,7-7s7,3.13,7,7v2C19,16.87,15.87,20,12,20z M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z"/>
</svg>
                                    <h1 class="inline text-2xl font-semibold leading-none">Person</h1>
                                </div>
                            </div>
                            <div class="px-5 pb-5">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                />

                                {/* <input
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Address" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                /> */}
                                <div class="flex">
                                    <div class="flex-grow w-1/4 pr-2">

                                        <select value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            placeholder="PLZ" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" >
                                            <option value="" >None</option>
                                            <option value="Male" >Male</option>
                                            <option value="Female" >Female</option>
                                            <option value="Others" >Others</option>
                                        </select>

                                    </div>
                                    <div class="flex-grow">
                                        <input value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            placeholder="Age" class=" text-black placeholder-gray-400 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100  focus:border-blueGray-500 focus:bg-white dark:focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row-reverse p-3">
                                <div onClick={updateUsers}
                                    class="flex-initial pl-3">
                                    <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                        <span class="pl-2 mx-1">Save</span>
                                    </button>
                                </div>
                                <div onClick={handlePayment}
                                    class="flex-initial pl-3">
                                    <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                        <span class="pl-2 mx-1">Submit</span>
                                    </button>
                                </div>
                            </div>

                        </div>





                        <div class="mt-5 bg-white shadow cursor-pointer rounded-xl">
                            <div class="flex">
                                <div class="flex-1 py-5 pl-5 overflow-hidden">
                                    <ul>
                                        <li class="text-xs text-gray-600 uppercase">Receiver</li>
                                        {passengers.map((passenger, index) => (
                                            <li key={index}>{passenger}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div class="flex-1 py-5 pl-1 overflow-hidden">
                                    <ul>
                                        <li class="text-xs text-gray-600 uppercase">Gender</li>
                                        {genders.map((age, index) => (
                                            <li key={index}>{age}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="flex-1 py-5 pl-1 overflow-hidden">
                                    <ul>
                                        <li class="text-xs text-gray-600 uppercase">Ages</li>
                                        {ages.map((age, index) => (
                                            <li key={index}>{age}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="flex-none pt-2.5 pr-2.5 pl-1">
                                    <button type="button" class="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"></path>
                                            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default BookingForm