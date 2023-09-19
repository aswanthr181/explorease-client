import React, { useEffect, useState } from 'react'
import UserAxios from '../../../Axios/userAxios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../Utilities/Pagination'


function BookingHistory() {

    const userAxios = UserAxios()
    const [booking, setBooking] = useState([])
    const [load, setLoad] = useState(1)
    const navigate = useNavigate()

    const [currenPage, setCurretPage] = useState(1)
    const recordsPerPage = 2;
    const lastIndex = currenPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage
    const [records, setRecords] = useState([])
    const [npage, setNpage] = useState('')
    const [numbers, setNumber] = useState([])



    useEffect(() => {
        userAxios.get('/getBookingHistory')
            .then((response) => {
                setBooking(response.data.data)
                console.log('boooooooking', response.data.data);
                const a = response.data.data.slice(firstIndex, lastIndex)
                console.log('currentpage=', currenPage);
                console.log('a=', a, '++++', 'first' + firstIndex, '+++', 'last' + lastIndex);
                console.log('booklength=', booking.length);
                const b = Math.ceil(response.data.data.length / recordsPerPage)
                console.log('b===', b);
                const c = [...Array(b + 1).keys()].slice(1)
                console.log('c===', c);
                setRecords(a);
                setNpage(b)
                setNumber([...Array(b + 1).keys()].slice(1))

            }).catch((err) => {
                console.log(err)
            })
    }, [currenPage, load])
    // useEffect(() => {
    //     // Calculate numbers when npage changes
    //     if (npage !== '') {
    //         setNumber([...Array(npage + 1).keys()].slice(1));
    //       }
    //   }, [npage]);
    console.log(npage, 'npageeeeee');
    console.log((numbers, 'nymberererere'));

    const cancelBooking = async (id) => {
        try {


            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Cancel!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,  !",
            })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        setLoad(load + 1)
                        const response = await userAxios.patch(`/cancelBooking?id=${id}`);
                        Swal.fire("canceled!")
                        console.log(response.data.data);
                        setBooking(response.data.data)
                    }
                })
        } catch (error) {
            console.log(err)
        }
    }

    const viewDetails = (id) => {
        navigate(`/bookingDetails/${id}`)
    }

    return (
        // <div className="py-14 px-4 md:px-8 2xl:px-20 2xl:container 2xl:mx-auto h-screen">
        //     <div className="flex justify-start item-start space-y-2 flex-col ">
        //         <h1 className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 ml-4 text-black">BOOKING HISTORY</h1>
        //     </div>

        // </div>
        <div>
            <div className=" flex-col h-screen  overflow-scroll">
                <h1 className="text-4xl font-bold text-center mt-10">Booking History</h1>
                <div className='mt-[5%]'>

                    {records.length > 0 ?
                        records.map((trip, i) => {
                            const formattedDate = new Date(trip.bookedDate).toLocaleDateString("en-GB");
                            return (
                                <div key={i}
                                    className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl h-98 shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-slate-200">
                                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                        <img src={trip.trip.photo}
                                            alt="tailwind logo" className="rounded-xl w-48 h-48 " />
                                    </div>
                                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">

                                        <h5 className="font-black text-gray-800 md:text-xl text-xl">{trip.trip.title}</h5>
                                        <h6>BOOKING DATE:{formattedDate} </h6>
                                        <h6>AMOUNT PAID: ₹{trip.advance}</h6>
                                        {trip.isCanceled === 0 ?
                                            <h6>Balance ₹{trip.pending}</h6> : <h6>Amount of {0.8 * trip.advance} will be refunded</h6>}

                                        {/* <p className="text-xl font-black text-gray-800">
                        $110
                        <span className="font-normal text-gray-600 text-base">/night</span>
                    </p> */}
                                        <div className='flex justify-around'>
                                            <div onClick={() => viewDetails(trip._id)}
                                                className="bg-red-900 h-9  py-1 w-[7rem] text-center rounded-md text-md font-medium  text-white md:block">
                                                DETAILS</div>
                                            {trip.isCanceled === 0 ?
                                                <div
                                                    onClick={() => cancelBooking(trip._id)}
                                                    className="bg-red-600 h-9 px-3 py-1 w-[7rem] text-center rounded-md text-md font-medium  text-white  md:block">
                                                    CANCEL</div> :
                                                <div>
                                                    <p >Booking Cancelled</p>
                                                </div>}

                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        <div><h2>no booking</h2></div>}

                </div>


            </div>
            {numbers.length > 0 ?
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

export default BookingHistory