import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import AgencyAxios from '../../../Axios/agencyAxios'
import axios from 'axios'

function Dayplan({dayNo,tripId,setDay,limit,complete}) {

    const agencyAxios=AgencyAxios()
    const [interpoint,setInterpoint]=useState('')
    const [description,setDescription]=useState('')
    const [fromSug, setFromSug] = useState(false)
    const [fromLongitude, setFromLongitude] = useState('')
  const [fromLatitude, setFromLatitude] = useState('')

    const generateError= (err) => toast.error(err, { position: "bottom-center" })

    const savePoint = (e)=>{
        e.preventDefault()
        if(!interpoint.trim() || !description.trim()){
            console.log('nothing in days');
            generateError("please fill all fields ");
        }else{
            console.log('going ');
            console.log(tripId,'=== tripid');
            agencyAxios.post('/addIterate',{
                interpoint,description,tripId,
                fromLongitude,fromLatitude
            }).then((res)=>{
                if(res.data.success){
                    setDay()
                    setInterpoint('')
                    setDescription('')
                    console.log('iterate update');
                }
                
            })
            .catch((err)=>{

            })
        }
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
    
    return (
        <>
            <div className="flex bg-gray-200 border-black shadow shadow-slate-700 p-2 mb-4 flex-col gap-3">
                <div className="flex justify-between mr-4">
                    <h3 className="font-bold">Day {dayNo}  </h3>
                    <div className="flex items-end mr-2 text-sm">

                    </div>
                </div>

                <div className="flex-col space-y-2 w-full">
                    <div className='flex justify-between'>
                        <input
                            className="border rounded w-1/2   h-10 border-gray-400 bg-slate-50 px-2 mb-4"
                            type="text"
                            name="interpoint"
                            placeholder="destination point  "
                            value={interpoint}
                            onChange={(e)=>{
                                setFromSug(true)
                                setInterpoint(e.target.value)
                                handleLocationSuggestion(e.target.value)}}
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
                                setInterpoint(suggestion.place_name); // Update the input field with the selected suggestion
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
                <input
                    className="border rounded h-10 border-gray-400 bg-slate-50 px-2 mb-4"
                    type="text"
                    name="description"
                    placeholder="description"
                    value={description}
                    
                    onChange={(e)=>{
                        
                        setDescription(e.target.value) 
                        
                    }}
                />
                

                <div onClick={savePoint}  className='text-green-500 font-bold w-fit px-2 py-2 rounded-lg cursor-pointer'>Save</div>
            </div>
            </>
    )
}

export default Dayplan