import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { LinearScale, CategoryScale } from "chart.js/auto";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
Chart.register(LinearScale, CategoryScale);

const LineChartD = ({ dailyData,month }) => {
  const [bookings, setBookings] = useState(null)
//   const reversedData = [...monthlyData].reverse();
  //   useEffect(()=>{
  //     proAxios.get(`/proBookings?id=${proData._id}`).then((res)=>{
  //       if(res.data){
  //         setBookings(res.data)
  //       }
  //     })
  //   },[])
  // Get the current date
  const currentDate = new Date();

  // Function to get the number of weeks in the recent month
  const getWeeksInMonth = (year, month) => {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const daysInMonth = endDate.getDate();
    const firstDay = startDate.getDay();
    const totalWeeks = Math.ceil((daysInMonth + firstDay) / 7);
    return totalWeeks;
  };

  // Function to get the name of the current month
  const getCurrentMonthName = (monthNum) => {
    const date = new Date();
    date.setMonth(monthNum - 1); // Subtract 1 because months are zero-based
    const options = { month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // Calculate the number of weeks in the recent month
  const currentYear = currentDate.getFullYear();
  // const currentMonth = currentDate.getMonth();
  const currentMonth=month
  const weeksInMonth = getWeeksInMonth(currentYear, currentMonth);
  const currentMonthName = getCurrentMonthName(month);


  const generateRandomData = () => {
    return Array.from({ length: weeksInMonth }, () => Math.floor(Math.random() * 30));
  };

  const data = {
    // labels: weekLabels,
    labels: dailyData.map((data) => data.date),
    datasets: [
      {
        label: "total trips",
        // data: generateRandomData(),
        data: dailyData.map((data) => data.totalTrips),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
      {
        label: "total bookins",
        // data: generateRandomData(),
        data: dailyData.map((data) => data.totalBookings),
        backgroundColor: "rgba(255, 205, 86, 0.6)",
        borderColor: "rgba(255, 205, 86, 1)",
        borderWidth: 2,
      },
      {
        label: "revenue",
        // data: generateRandomData(),
        data: dailyData.map((data) => data.totalRevenue),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Bookings",
        },
      },
      x: {
        type: "category",
        title: {
          display: true,
          text: `Weeks of ${currentMonthName}`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="chart-container h-full w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default LineChartD;