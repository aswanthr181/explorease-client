import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Toaster, toast } from 'react-hot-toast'
import Swal from 'sweetalert2'
import axios from 'axios'

import AgencyAxios from '../../../Axios/agencyAxios'



function PlanTrip({ isSubmit, setId, setDaylimit }) {
  const agencyAxios = AgencyAxios()

  const [title, setTitle] = useState('')
  const [start, setStart] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [night, setNight] = useState('')
  const [amount, setAmount] = useState('')
  const [advance, setAdvance] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [peoples,setPeoples]=useState('')

  const [fromSug, setFromSug] = useState(false)
  const [toSug, setToSug] = useState(false)
  const [fromLongitude, setFromLongitude] = useState('')
  const [fromLatitude, setFromLatitude] = useState('')
  const [toLongitude, setToLongitude] = useState('')
  const [toLatitude, setToLatitude] = useState('')

  const navigate = useNavigate()
  const generateError = (err) => toast.error(err, { position: "bottom-center" })

  const token = useSelector((state) => state.Agency.Token)

  const submitTrip = async(e) => {
    console.log("haiiiiiiiiiiiii")
    e.preventDefault();
    console.log("fghjkl;");

    if (
      !title.trim() || !start.trim() || !destination.trim() || !date.trim() ||
      !day.trim() || !night.trim() || !amount.trim() || !advance.trim() || !peoples.trim()
    ) {
      generateError("please fill all fields ");
    }

    if(day-night>1 || day-night<-1){
      generateError("please check scheduled days with night ");
      return
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    try {
      let response = await agencyAxios.post('/resgister-trip', {
        title, start, destination, date,peoples,
        day, night, amount, advance, description, photo,
        fromLongitude, fromLatitude,
        toLongitude,toLatitude
      },);

      let result = response.data
      console.log(result);
      if (result.status) {
        Toast.fire({
          icon: "success",
          title: "Trip registered ",
        })
        isSubmit(false)
        setId(result.id)
        setDaylimit(day)

      } else {
        generateError(result.message)
      }

    } catch (error) {
      generateError(err)
    }

  }


  const base64 = (img) => {
    let reader = new FileReader();
    console.log('first')
    reader.readAsDataURL(img)
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  const [locationSuggestions, setLocationSuggestions] = useState([]);
  // Function to get location suggestions from Mapbox Geocoding API
  const getLocationSuggestions = async (query) => {
    const MAPBOX_API_KEY = "pk.eyJ1IjoiYXN3YW50aHIxODEiLCJhIjoiY2xsN2p4OWphMGduODNlbzZkZ2RoMmhuNyJ9.GiknKP3dpNkzdZyx-ltCUA"
    const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`;
    const params = {
      access_token: MAPBOX_API_KEY,
      types: 'place,locality', // Limit results to places only
      limit: 5, // Number of suggestions to retrieve
      country: "IN"
    };

    try {
      const response = await axios.get(endpoint, { params });
      return response.data.features;
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
      return [];
    }
  };

  // Function to handle location suggestion selection
  const handleLocationSuggestion = async (query) => {
    // Get location suggestions when the user types
    const suggestions = await getLocationSuggestions(query);
    setLocationSuggestions(suggestions);
  };

  const today = new Date()
  today.setDate(today.getDate() + 1); // Add one day to get the minimum allowed date
  const minDate = today.toISOString().split('T')[0];
  return (
    <div className='bg-slate-100  flex justify-center'>
      <Toaster />
      <div className='my-24 px-28 md:w-[1000px] bg-gray-200 border-gray-400 shadow-xl shadow-slate-600 rounded-md '>
        <form onSubmit={submitTrip}>
          <div className="space-y-12">
            <div className="border-b border-gray-900 pb-12 pt-10">
              <div className='text-center'>
                <h2 className="text-3xl  font-bold leading-7 text-gray-900 ">PLAN A TRIP</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Full Journey Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    TRIP TITLE
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    STARTING POINT
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="start"
                      id="start"
                      autoComplete="start"
                      value={start}
                      onChange={(e) => {
                        setFromSug(true)
                        setStart(e.target.value)
                        handleLocationSuggestion(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ul>
                      {
                        fromSug &&
                        locationSuggestions.map((suggestion) => (
                          <li key={suggestion.id}>
                            {/* Assuming you want to display the place name as a suggestion */}
                            <button
                              type="button"
                              onClick={() => {
                                setFromSug(false)
                                setStart(suggestion.place_name); // Update the input field with the selected suggestion
                                setLocationSuggestions([]); // Clear the suggestions list
                                // Now you can also get the longitude and latitude from suggestion.geometry.coordinates
                                const [long, lat] = suggestion?.geometry.coordinates;
                                setFromLatitude(lat)
                                setFromLongitude(long)
                              }}
                            >
                              {suggestion.place_name}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    DESTINATION
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      autoComplete="destination"
                      value={destination}
                      onChange={(e) => {
                        setToSug(true)
                        setDestination(e.target.value)
                        handleLocationSuggestion(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ul>
                      {
                        toSug &&
                        locationSuggestions.map((suggestion) => (
                          <li key={suggestion.id}>
                            {/* Assuming you want to display the place name as a suggestion */}
                            <button
                              type="button"
                              onClick={() => {
                                setToSug(false)
                                setDestination(suggestion.place_name); // Update the input field with the selected suggestion
                                setLocationSuggestions([]); // Clear the suggestions list
                                // Now you can also get the longitude and latitude from suggestion.geometry.coordinates
                                const [long, lat] = suggestion?.geometry.coordinates;
                                setToLatitude(lat)
                                setToLongitude(long)
                              }}
                            >
                              {suggestion.place_name}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    DATE
                  </label>
                  <div className="mt-2">
                    <input min={minDate}
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value)
                      }}
                      className="block h-12 w-full rounded-md border-0 py-1.5 bg-slate-300  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Max peoples
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="day"
                      id="day"
                      autoComplete="day"
                      value={peoples}
                      onChange={(e) => {
                        setPeoples(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    DAY
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="day"
                      id="day"
                      autoComplete="day"
                      value={day}
                      onChange={(e) => {
                        setDay(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    NIGHT
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="night"
                      id="night"
                      autoComplete="night"
                      value={night}
                      onChange={(e) => {
                        setNight(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    TOTAL AMOUNT PER HEAD
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      autoComplete="amount"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    ADVANCE AMOUNT
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="advance"
                      id="advance"
                      autoComplete="advance"
                      value={advance}
                      onChange={(e) => {
                        setAdvance(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    DESCRIPTION
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Write the description about the trip</p>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <img
                        src={
                          photo
                            ? photo
                            : ''
                          // "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"
                        }
                        alt="...."
                        className=" object-cover  border-4 border-white avatar"
                      />

                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <input
                      type="file"
                      name="photo"
                      acceptedFiles=".jpg,.jpeg,.png"
                      id="file"
                      onChange={(e) => {
                        base64((e.target.files[0]))

                      }}
                    // onChange={(e)=>{
                    //   base64
                    // }}


                    />

                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>


            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button> */}
            <button
              type='submit'
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PlanTrip