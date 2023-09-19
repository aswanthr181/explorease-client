// import React from "react";

// function AdminHome() {
//   return (
//     <>
//       <div className="bg-white flex w-screen justify-center">
//         <div className="mt-5 font-bold text-gray-700 text-xl ml-5 ">WELCOME ADMIN</div>
  
//       </div>
//     </>
//   );
// }

// export default AdminHome;
import React, { useEffect, useState } from "react";
import AdminAxios from "../../../Axios/adminAxios";
import Cards from "../../Utilities/DashCard";


function AdminHome() {
  const adminAxios=AdminAxios()
  const [details, setDetails] = useState({});

  useEffect(() => {
    adminAxios.get("/getDashBoard")
      .then((response) => {
        console.log(response.data.details);
        setDetails(response.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let users = {
    // image: "/UserImages/banner2.avif",
    title: "TOTAL USERS REGISTERED",
    numbers:details?.userCount
  };

  let agencys = {
    // image: "/UserImages/banner2.avif",
    title: "TOTAL Agencies REGISTERED",
    numbers: details?.agencyCount
  };

  let trips = {
    // image: "/UserImages/banner2.avif",
    title: "TOTAL TRIPS REGISTERED",
    numbers: details?.tripCount
  };

  // let tournaments = {
  //   image: "/UserImages/banner2.avif",
  //   title: "TOTAL TOURNAMENTS CONDUCTED",
  //   numbers: details?.tournamentCount,
  // };
  return (
    
    <div className="bg-gray-900 w-full h-screen overflow-y-auto">
      <div className="bg-gray-900 flex w-full justify-center">
        <div className="mt-5 font-bold text-white text-xl ">
          WELCOME ADMIN
        </div>
      </div>
      <div className="flex justify-center items-center ">
      <div className="grid grid-cols-12 m-2  ">
        <div className="md:col-span-6 col-span-12  p-1">
        <Cards reg={users} />
        </div>
        <div className="md:col-span-6 col-span-12  p-1">
        <Cards reg={agencys} />
        </div>
        <div className="md:col-span-6 col-span-12  p-1">
        <Cards reg={trips} />
        </div> 
        {/* <div className="md:col-span-6 col-span-12  p-1">
        <Cards reg={tournaments} />
        </div> */}
      </div>
      </div>
 
    </div>
  );
}

export default AdminHome;
