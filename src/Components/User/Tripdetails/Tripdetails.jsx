import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import UserAxios from '../../../Axios/userAxios'
import Itenary from './Itenary';
import Map from './Map'
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

function Tripdetail() {
    const navigate = useNavigate()
    const userAxios = UserAxios()
    const { id } = useParams();
    const [data, setData] = useState()
    const [itinerary, setItinerary] = useState([])
    const [people, setPeople] = useState(0)
    const [showDetails, setShowDetails] = useState(true)

    const token = useSelector((state) => state.Client.Token)

    console.log(id, 'murshiii');
    useEffect(() => {
        if (id) {
            userAxios.get(`/getTripDetails?id=${id}`)
                .then((res) => {

                    const result = res.data.data
                    setData(result)
                    setPeople(result.peoples)
                    setItinerary(result.itinerary)
                })
        }
    }, [])
    console.log(data);
    const loadChat = (id) => {
        navigate(`/chat/${id}`)
    }


    const handlePayments = async () => {
        try {
            const response = await userAxios.post('/create-checkout-session', {
                data, people
            })

            console.log(response.data);

            if (response.data.url) {
                window.location.href = response.data.url
            }
        } catch (error) {
            toast.error("payment failed")
        }
    }
    const handlePayment = () => {
        if (data?.peoples > 0) {
            if (id && people) {
                console.log(id, 'ididididid');
                navigate(`/passengers/${id}`)
            } else {
                toast.error("id not found")
            }
        }else{
            toast.error("sorry this trip is full")
        }

    }
    console.log(itinerary.length > 0 ? itinerary[0].destination : 'hi');


    return (
        <>
            {data ?
                <section className="overflow-hidden  font-poppins   m-1 ">

                    <div className="  ml-3 mr-3 mt-7 sm:px-20">
                        <Toaster></Toaster>
                        <div className="flex justify-between  ">
                            {/* <img className="w-[5rem] " src={data.logo} alt="" /> */}
                            <h2 className="max-w-xl md:mb-5 text-xl text-white font-bold md:text-3xl">
                                explore manali
                            </h2>
                            <button

                                className="w-[5.5rem] h-[2rem] font-bold text-white rounded-md bg-green-400"
                            >

                            </button>
                        </div>


                        <div className="flex flex-wrap -mx-3  ">
                            <div className="w-full  md:w-1/2  bg-white bg-opacity-60 rounded-lg shadow-2xl">
                                <div className="sticky top-0  overflow-hidden m-2">
                                    <div className="relative sm:w-[90%]  mb-6 lg:mb-10 lg:h-2/4">

                                        <img
                                            src={data ? data.photo : ""}

                                            alt=""
                                            className="object-cover w-full h-40  md:h-96 mt-4 rounded-lg"
                                        />

                                        <div className='flex justify-center pb-4'>

                                            <h1 className="text-2xl text-slate-800 font-bold">{data ? data.title : ''}</h1>

                                        </div>
                                        <div className='flex justify-around text-slate-800'>
                                            <div className='flex justify-center items-center'>
                                                <h2 className="font-bold">PAY ADVANCE ₹{data ? data.advance : ''}</h2>

                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <h2 className="font-bold">BOOKING REMAIN {data ? data.peoples : ''}</h2>

                                            </div>

                                        </div>
                                    </div>






                                    <div className=' flex gap-4  h-16 px-2 py-1'>
                                        <div onClick={() => loadChat(data.agency)}
                                            //  onClick={loadChat(data.agency)}
                                            className='w-1/2 flex justify-center items-center bg-green-700 hover:bg-green-700 '>
                                            CHAT
                                        </div>
                                        <div onClick={handlePayment} className='w-1/2 bg-red-500 font-semibold flex justify-center items-center hover:bg-red-600'>
                                            <p className='text-center'>BOOK NOW</p>
                                        </div>

                                    </div>




                                </div>
                            </div>
                            <div className="w-full px-4 shadow-2xl bg-white bg-opacity-50  rounded-lg md:w-1/2 ">

                                <div className="lg:pl-20 mt-4 mb-4">
                                    <div className="w-full  space-y-4 text-left text-black ">

                                        <h2 className="font-bold">TRIP DETAILS.</h2>

                                        <h1 className="font-bold text-2xl">{data.start[0].place.split(',')[0].trim()} To  {data.destination[0].place.split(',')[0].trim()}</h1>



                                        <ol className="border-l bg-white border-neutral-300 dark:border-neutral-500">

                                            {
                                                itinerary.map((result, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="flex-start flex items-center pt-3">
                                                                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>

                                                            </div>
                                                            <div className="mb-6 ml-4 mt-2">
                                                                <h4 className="mb-1.5 text-xl font-semibold">
                                                                    <Itenary key={index} data={result} number={index} />
                                                                </h4>

                                                            </div>
                                                        </li>
                                                    )
                                                })}







                                        </ol>
                                        <p className="flex flex-col justify-center">
                                            {data ? data.description : ''}
                                        </p>


                                    </div>
                                    <div className="w-32 mb-8"></div>
                                    <div>
                                        <Map startLatitude={data.start[0].latitude} startLongitude={data.start[0].longitude} endLatitude={data.destination[0].latitude} endLongitude={data.destination[0].longitude} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {reviewData.reviews? <Review review={reviewData}/>:<div className="flex justify-center mt-8"><h1 className="text-xl text-white font-bold">NO REVIEW AVAILABLE</h1></div> } */}
                </section>








                :
                <div className='flex justify-center items-center w-screen h-[calc(100vh-128px)] m-auto '>
                    <ClipLoader className='' />

                </div>}

        </>

    )
}

export default Tripdetail