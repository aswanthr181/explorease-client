import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UserAxios from '../../../Axios/userAxios'
import ClipLoader from 'react-spinners/ClipLoader'
import TripCard from '../Utilities/TripCard'
import Tc from '../Utilities/Tc'
import Places from './Trip1'
import axios from 'axios'
import Modal from '../Utilities/DateModal'
import Pagination from '../../Utilities/Pagination'
import toast, { Toaster } from 'react-hot-toast'



function Trips() {
  const userAxios = UserAxios()
  const [trips, setTrips] = useState([])
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [fromSug, setFromSug] = useState(false);
  const [from, setFrom] = useState("");
  const [nearbyDestination, setNearbyDestination] = useState([]);
  const [search, setSearch] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [currenPage, setCurretPage] = useState(1)
  const recordsPerPage = 12;
  const lastIndex = currenPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage
  const [records, setRecords] = useState([])
  const [npage, setNpage] = useState('')
  const [numbers, setNumber] = useState([])

  
  const generateError = (error) => toast.error(error, { position: 'bottom-center' })

  const toggleModal = () => {
    setShowModal(!showModal);
  };

const handleCanceled=(err)=>{
 toast(err)
}

  useEffect(() => {
    userAxios.get('/getTrips')
      .then((res) => {
        const data = res.data.result
        console.log('dataaaaaa  **', data)
        setTrips(data)
        const a = res.data.result.slice(firstIndex, lastIndex)
        const b = Math.ceil(res.data.result.length / recordsPerPage)
        setRecords(a);
        setNpage(b)
        setNumber([...Array(b + 1).keys()].slice(1))

      })
      .catch((err) => {
        console.log(err);
      });
  }, [currenPage]);

  const getLocationSuggestions = async (query) => {
    const MAPBOX_API_KEY = "pk.eyJ1IjoiYXN3YW50aHIxODEiLCJhIjoiY2xsN2p4OWphMGduODNlbzZkZ2RoMmhuNyJ9.GiknKP3dpNkzdZyx-ltCUA"
    // "pk.eyJ1IjoidWp1YWwiLCJhIjoiY2xrdGFzN2V4MDg3MDNxcGNzanpvNm9zNiJ9.BcpaFJF6wn3SY2XJoRqDyA";
    const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`;
    const params = {
      access_token: MAPBOX_API_KEY,
      types: "place,locality", // Include multiple place types separated by commas
      limit: 4, // Number of suggestions to retrieve
      country: "IN",
    };
    try {
      console.log('found');
      const response = await axios.get(endpoint, { params });
      return response.data.features;
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      return [];
    }
  };

  const handleLocationSuggestion = async (query) => {
    // Get location suggestions when the user types
    if (query != '') {
      console.log('searching location');
      const suggestions = await getLocationSuggestions(query);
      setLocationSuggestions(suggestions);
    } else {
      setNearbyDestination(trips);
    }
  };
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1; // Distance in meters
    return distance;
  }
  useEffect(() => {
    // Initially, show all the turfs
    handleSearch();
  }, [trips]);

  // const maxDistance = 10; 
  // Maximum distance in kilometers to show turfs
  const handleSearch = (fromLatitude, fromLongitude, maxDistance) => {
    if (fromLatitude && fromLongitude) {
      // Get the turfs near the searched location
      console.log(fromLatitude, fromLongitude, maxDistance, '*****************************');
      const tripsNearLocation = trips.filter((trip) => {
        const distance = calculateDistance(
          fromLatitude,
          fromLongitude,
          trip.destination[0].latitude,
          trip.destination[0].longitude
        );
        console.log(Math.floor(distance), trip.title);
        return Math.floor(distance) <= Math.floor(maxDistance);
      });

      setNearbyDestination(tripsNearLocation);
    } else {
      // If no search input is provided, show all the turfs
      setNearbyDestination(trips);
    }
  };
  return (
    <div className='bg-white '>
                <Toaster position='top-center' reverseOrder={false} />

      <div className=" bg-white container mx-auto  py-8 flex justify-center">
        <div className="flex  relative items-center">
          <div className="flex ">
            <div className='flex   space-x-1'>
              <input
                type="search"
                value={from}
                onChange={(e) => {
                  setFromSug(true);
                  setFrom(e.target.value);
                  handleLocationSuggestion(e.target.value); // Fetch suggestions as the user types
                }}
                className="block w-full md:w-[20rem] px-4 py-2 text-black bg-white border rounded-full focus:border-slate-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <button
                onClick={() => {
                  setSearch(true)
                  const [long, lat] = selectedLocation?.geometry.coordinates;
                  handleSearch(lat, long, 100);
                }}
                className="px-4 text-white bg-black rounded-full ">
                Nearby
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />

              </button>
            </div>
            <div className='absolute  w-full md:w-[40rem] top-[3.5rem] '>
              <ul className="absolute flex flex-col bg-white z-30 left-0">
                {
                  fromSug &&
                  locationSuggestions.map((suggestion) => (
                    <li className="text-lg border-b-2 border-white pl-5" key={suggestion.id}>
                      <span

                        className=" "
                        onClick={() => {
                          setFromSug(false);
                          setSearch(true)
                          setFrom(suggestion.place_name);
                          setSelectedLocation(suggestion)
                          // Update the input field with the selected suggestion
                          setLocationSuggestions([]); // Clear the suggestions list
                          // Now you can also get the longitude and latitude from suggestion.geometry.coordinates
                          const [long, lat] = suggestion?.geometry.coordinates;
                          // Update the turfs based on the selected location
                          handleSearch(lat, long, 10);
                        }}
                      >
                        {suggestion.place_name}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            <button className="px-4 text-white bg-black rounded-full "
              onClick={toggleModal}>
              filter
            </button>
            {showModal && <Modal setShowModal={setShowModal} trips={nearbyDestination} setNearbyDestination={setNearbyDestination}
            records={records} setRecords={setRecords} />}
          </div>

        </div>
      </div>

      {trips.length > 0 ?
        <Places trip={nearbyDestination} search={search} records={records} handleCanceled={handleCanceled}/> :
        <div className='flex justify-center items-center w-screen h-[calc(100vh-128px)] m-auto '>
          <ClipLoader className='' />

        </div>
      }
      
      {numbers.length>0 ?
                <div className=' flex justify-center  py-10   '>
                    <Pagination
                     numbers={numbers}
                      currenPage={currenPage} 
                      firstIndex={firstIndex}
                      lastIndex={lastIndex}
                      setCurretPage={setCurretPage}
                      
                      />
                      </div>
                : null}
    </div>
  )
}

export default Trips