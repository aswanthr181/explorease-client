import React, { useState } from "react";

const Discover = () => {

  return (
    <div className="w-4/5 m-auto cursor-default bg-white">
      <h1 className="text-4xl font-bold text-center">Discover</h1>


      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="https://img.theculturetrip.com/wp-content/uploads/2017/07/sctp0154-merzouga-and-desert-villages-morocco-papageorgiou-28-e1524657576718.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View Details
          </h1>
        </div>
      </div>

      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm">Adventure awaits, go find it..</h1>
          <h2 className="md:text-4xl sm:text-base">
          Travel far, travel wide, travel deep.
          </h2>
          <p className="md:text-base sm:text-xs">
            Expertise: With years of experience and a passion for exploring the world, our team of travel experts knows the ins and outs of every destination we offer.
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            Book Now
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1586520748101-a5df6afa76f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG90dXMlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://www.travel-challenges.com/cdn/shop/articles/Blog_Photos_-_Travel_Challenges_15.jpg?v=1685615524"
            alt=""
          />
          <div>
            <h2 className="font-bold">Tailored Experiences.</h2>
            <h1 className="text-2xl font-bold">Diverse Destinations:</h1>
          </div>
          <p className="text-sm">
            Exclusive Offers: Enjoy access to exclusive deals and promotions that make your dream getaway more affordable than ever.

            Join us on a journey of discovery, where the world becomes your playground and each trip is a masterpiece waiting to be painted. Explore our website, discover our destinations, and let your wanderlust guide you.
          </p>
          <p className="text-sm">
          With over [6] years of experience in the travel industry, we've amassed a wealth of knowledge and cultivated deep connections worldwide. Our travel experts are your trusted guides, ensuring every detail of your journey is meticulously planned.
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">with your Budget.</h2>
          <h1 className="font-bold text-2xl"> Seamless Planning</h1>
          <p className="text-sm">
          We know that planning a trip can be overwhelming. Let us take the stress off your shoulders. Our dedicated team will handle all the logistics, from finding the best flights to arranging local transportation and even recommending the finest dining spots.
          At Explore ease, we don't just plan vacations; we craft unforgettable stories, enriching experiences, and lifelong memories. Our passion for travel knows no bounds, and we're dedicated to sharing the world's wonders with you.
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://media.istockphoto.com/id/1162291446/photo/young-couple-travelling-with-a-map-in-the-city.jpg?s=612x612&w=0&k=20&c=UKp1ZrJejnzJZ65kyvCsrSjs75dT5gqL_VPvXdlzkXA="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;