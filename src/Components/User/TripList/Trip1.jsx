import React from "react";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Places = ({trip,search,records,handleCanceled}) => {
  const navigate = useNavigate()
  const generateError = (error) => toast.error(error, { position: 'bottom-center' })

  const datas = trip
  // const records=props.records
  // const search=props.search
  // const handleCanceled=props?.handleCanceled

  const viewDetails = (id,cancel) => {
    if(cancel===1){
      generateError('sorry this trip is cancelled')
      return;
    }else{
      navigate(`/tripDetails/${id}`)
    }
    
  }


  return (
    <div className="w-4/5 m-auto h-full cursor-default ">
      {datas.length>0?<div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl text-slate-800 font-bold">Places not to be missed</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a
          quibusdam. Et nostrum accusamus sunt fugiat, corrupti aut sint totam.
        </p>
      </div>: <div></div> }
      

      

      <div className="my-10 text-center">
        {search?<h1 className="text-4xl font-bold">Your Search</h1>
        :<h1 className="text-4xl font-bold">Our Recomendation</h1>}
        
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {datas.length>0?  datas.map((result,i) =>{
            const formattedDate = new Date(result.date).toLocaleDateString("en-GB");
              return(
                <div key={i}  onClick={()=>viewDetails(result._id,result.is_cancel)}
              className="drop-shadow-2xl h-80 text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
              <img
                className="w-full h-1/2 object-cover rounded-t-lg"
                src={result.photo ? result.photo :
                  "https://static.toiimg.com/photo/msid-77760003,width-96,height-65"}
                alt=""
              />
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-red-400">{result.destination[0].place}</p>
                  <p className="font-bold text-black">₹{result.amount}</p>
                </div>
                <p className="font-semibold text-black">
                  {result.title}
                </p>
                <div className="flex justify-between items-center">
                  <h2>{result.day} days tour</h2>
                  {/* <p className="flex items-center space-x-2 text-orange-400">
                    <AiFillStar />
                    <span>4.8</span> */}
                    <p className="flex items-center space-x-2 text-orange-400">{formattedDate}
                  </p>
                </div>
              </div>
            </div>
              )
            }



          ):
          <div className=" font-extrabold h-screen col-span-12 text-black text-3xl text-center">No trips found near the searched location.</div>
          }

          {/* <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://cdn.pixabay.com/photo/2014/01/02/10/14/beach-hut-237489_1280.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div> */}
         
         
          
       
         
          
        </section>
      </div>
    </div>
  );
};

export default Places;