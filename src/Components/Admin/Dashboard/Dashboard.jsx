import React, { useEffect, useState } from 'react'
// import LineChart from './Chart'
// import LineChartD from './ChartDaily';
import AdminAxios from '../../../Axios/adminAxios';
import LineChart from './LineChart';


function DashBoard() {
    const adminAxios = AdminAxios()
    const [monthlyData, setMonthlyData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [dailyData, setDailyData] = useState([]);

    const [revenue,setRevenue]=useState('')
    const [totalTrips,setTotalTrips]=useState('')
    const [booking,setBooking]=useState('') 

    const [year,setYear]=useState(true)
    


    useEffect(() => {
        // Make an API request to fetch monthly data
        adminAxios.get('/sales-report').then((response) => {
            setMonthlyData(response.data);
            console.log('sales report***', response.data);
            const a=response.data.map((v)=>{ return v.totalRevenue }).reduce((a,b)=>{ return a+(b*1000) })
            setRevenue(a)
            const b=response.data.map((v)=>{ return v.totalTrips }).reduce((a,b)=>{ return a+b })
            setTotalTrips(b)
            const c=response.data.map((v)=>{ return v.totalBookings }).reduce((a,b)=>{ return a+b })
            setBooking(c)

        });
    }, []);

    useEffect(() => {
    // Fetch daily data for the selected month from your backend API
    adminAxios.get(`/dailySales-report/${new Date().getFullYear()}/${selectedMonth}`)
      .then((response) => {
        setDailyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedMonth]);

    const handleMonthChange = (event) => {
        
        setYear(false)
        const selectedValue = parseInt(event.target.value);
        console.log('going daily data',selectedValue);
        setSelectedMonth(selectedValue);
    };
    console.log(monthlyData ? monthlyData : 'null');

    return (
        <>
            <div className="flex  justify-center items-center mt-1 w-full overflow-hidden">

                <div className="h-full pb-6 flex justify-center rounded-sm  shadow-md md:left-[16%] bg-opacity-10 w-[98%] md:w-10/12 bg-black">
                    <div className="h-[70%] flex flex-grow w-full mt-[1%] ml-[2%]  lg:flex md:gap-x-3">
                        <div className="flex flex-grow  flex-col">
                            <div className="grid grid-cols-12  w-full lg:flex gap-2 lg:gap-3 lg:justify-center mt-2">
                                <div className="  col-span-4 sm:w-[16rem]  text-center   rounded-md shadow-md bg-gradient-to-t to-blue-600 from-blue-400">
                                    <h1 className="mt-[2%] font-medium text-lg text-white">TOTAL TRIPS</h1>
                                    <h1 className="mt-[2%] font-semibold sm:text-4xl">
                                        {totalTrips?totalTrips:0} </h1>
                                </div>
                                <div className="  col-span-4 sm:w-[16rem]  h-[6rem] text-center rounded-md shadow-md  bg-gradient-to-t to-blue-600 from-blue-400">
                                    <h1 className="mt-[2%] font-medium text-lg text-white">TOtal Bookings</h1>
                                    <h1 className="mt-[2%] font-semibold sm:text-4xl ">{booking?booking:0} </h1>
                                </div>
                                <div className="  col-span-4 sm:w-[16rem]   h-[6rem] text-center rounded-md shadow-md  bg-gradient-to-t to-blue-600 from-blue-400">
                                    <h1 className="mt-[2%] font-medium text-lg text-white">Toatl Revenue</h1>
                                    <h1 className="mt-[2%] font-semibold sm:text-4xl">₹{revenue?revenue:0}</h1>
                                </div>
                            </div>
                            <div class="flex">
                            <div onClick={()=>setYear(true)}
                             class="flex-grow"> 
                                        <button class=" text-black placeholder-gray-400 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100  hover:border-blueGray-500 hover:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" >yearly</button>
                                    </div>
                                {/* <div class="flex-grow w-1/4 pr-2">
                                    
                                    <select
                                        value={selectedMonth} // Set the value of the select element
                                        onChange={handleMonthChange}
                                        placeholder="PLZ" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" >
                                        <option value="" >None</option>
                                        <option value="1" >Januery</option>
                                        <option value="2" >Febreury</option>
                                        <option value="3" >March</option>
                                        <option value="4" >April</option>
                                        <option value="5" >May</option>
                                        <option value="6" >June</option>
                                        <option value="7" >July</option>
                                        <option value="8" >August</option>
                                        <option value="9" >september</option>
                                        <option value="10" >October</option>
                                        <option value="11" >November</option>
                                        <option value="12" >December</option>
                                    </select>

                                </div> */}
                            </div>
                            <div className="  lg:h-full w-[99%] lg:w-full ">

                                <div className="lg:w-[99%]  mt-4 m-auto  rounded-md shadow-md bg-white">
                                <LineChart monthlyData={monthlyData} selectedMonth={selectedMonth} />

                                    {/* <LineChart /> */}
                                    {/* {year?
                                    <LineChart monthlyData={monthlyData} selectedMonth={selectedMonth} />
                                :<LineChartD dailyData={dailyData} month={selectedMonth} /> } */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashBoard