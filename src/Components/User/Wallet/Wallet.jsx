import React, { useEffect, useState } from 'react'
import UserAxios from '../../../Axios/userAxios'

function Wallet() {
    const userAxios = UserAxios()
    const [userData, setUserData] = useState()
    const [transactions, setTransactions] = useState([])

    useEffect(() => {

        userAxios.get("/user-profile").then((response) => {

            setUserData(response.data.data)
            console.log(userData);
        }).catch((error) => {
            console.log(error);
        })


    }, [])
    useEffect(() => {
        userAxios.get('/transactions').then((res) => {
            const a=[...res.data.trans].reverse()
            setTransactions(a)
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <div className='bg-white'>
            <div className='mt-11 w-5/6 sm:w-1/3 m-auto ' >
                <div
                    className="mx-1  sm:w-2/3 sm:m-auto rounded-xl py-5 "
                    style={{
                        background: "linear-gradient(to bottom, #5050F9, #7777D6)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 150%",
                        color: "white", // Text color
                        padding: "1.5rem", // Adjust padding as needed
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow
                    }}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div className="sm:text-xl font-semibold tracking-tigh">
                            Explore Ease
                        </div>
                        <div className="flex items-start justify-between space-x-4 pb-2">
                            <div>Aswanth R</div>
                            <div className="font-semibold text-white">wallet</div>
                        </div>

                        <div className="inline-block w-8 h-6 sm:w-12 sm:h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                            <div className="relative w-full h-full grid grid-cols-2 gap-1">
                                {/* SVG paths */}
                            </div>
                        </div>

                        <div className="">
                            <div className="text-xs font-semibold tracking-tight">
                                Balance
                            </div>

                            <div className=" flex justify-between gap-1">
                                <div className="text-lg sm:text-2xl font-bold sm:font-semibold">
                                    {/* ₹{userData.wallet ? userData.wallet : 0} */}
                                    ₹{userData ? userData.wallet : 0}
                                </div>
                                <button
                                    // onClick={() => setwithdrawForm(true)} 
                                    class=" text-xs bg-indigo-400 hover:bg-indigo-700 text-white font-semibold py-1 px-1 rounded">
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full flex justify-center mt-9'>
                <div className="w-10/12 h-[75%] bg-slate-200   flex flex-col items-center gap-3 border overflow-scroll  top-[22%] left-[9%]  rounded-md bg-opacity-80">
                    <div className="flex w-11/12 h-[12%] mt-2 items-end justify-between ">
                        <div className="flex gap-2">
                            <button className="bg-slate-400 px-5 py-1 rounded-xl font-semibold">
                                Credited
                            </button>
                            <button className="bg-slate-400 px-5 py-1 rounded-xl font-semibold">
                                Debited
                            </button>
                        </div>
                        <button
                            //   onClick={() => setWithdrawel(true)}
                            title="withdraw">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                        </button>
                    </div>
                    {/* {transaction.map((item) => ( */}
                    <>
                        <div className="mx-auto w-[95%]  px-4 py-8 sm:px-2">

                            <div className="h-80  rounded-lg border">
                                <div className="overflow-x-auto overflow-y-scroll h-full">
                                    <table className="w-full ">
                                        <thead>
                                            <tr className="bg-slate-400 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                                <th className="px-5 py-3">ID</th>
                                                <th className="px-5 py-3">Transaction Id</th>
                                                <th className="px-5 py-3">Date</th>
                                                <th className="px-5 py-3">payment Mode</th>
                                                <th className="px-5 py-3">Amount</th>
                                                <th className="px-5 py-3">status</th>

                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-500">
                                            


                                            {transactions ?
                                                transactions.map((trans, i) => {
                                                    return (
                                                        <tr>
                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p className="whitespace-no-wrap">{i+1}</p>
                                                            </td>
                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <div className="flex items-center">
                                                                    <div className="h-10 w-10 flex-shrink-0">
                                                                        {trans.paymentMethod!=='withdraw'?
                                                                        <img className="h-full w-full rounded-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Eo_circle_green_arrow-down.svg/2048px-Eo_circle_green_arrow-down.svg.png' /> :
                                                                        <img className="h-full w-full rounded-full rotate-180" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEXlOTX////kKSTzrazlNjL1trXkKCPkMy/lNzPqZ2TkMCvkKSPkJiDjHxjkLyr++vruiYf+9PT1vbzoVVLypqX50tHmPjrzq6roWVb3ysntgH786urwl5X519bpYV7rbGr74+PmREHwnZz75OTseXf2w8LnT0vwmpjsdnPnSEXjGBDvj43mQT74zs3tg4DijIcGAAAKwElEQVR4nO2diWKiOhiFIUZIkUVFrbuli7UznXn/x7vYXpWdLCeEdnoeoPA1mOXkXyz7u8sy/QLa9UP49fVD+PX1Q4jQZj4dPI5Py2OyYB7x2CI5Lk/jx8F0vung6VoJo4fp610SBL5DQs91KWWfotR1vZA4fhAkh9fhLtL5EroIo81wHDuBE7rUahJ1Q+I78Xj4NNH0JjoIo4f757dg5FHWCHcTox4J3p8HDzoGE044+fN7SYjXPHKVmC4ZxeMVfCixhNHqb+KH3GNXMZZ+8vyChUQSztfvMoOXV/rBLtZ/gG8FI5zcH9Xx/h9Kz3mbwQYSRLg7BQSD9ylKgtMO82oQwtVd4AHxPuUF+xfEy6kTRsM4cOF8Z7n+cai+fqgSRtPYR36eeVEAoyLhdOnoGb8roxNPDRLu9pr5znLJfm6IcLIm+vk+GJ1nhbVDnnCWnoM6ATwvkGTWOeFD7HfF98HoH2WXRznCaOt384He5PpbuVlVinB3JF0O4KcYkRtGGcJZRzNMUa7Ur1GccHMYdT+An2LOQdzZESZcLfBbUH55i5VuwpnGPRqPqP+olTA6dLpGVIn5B7E5VYhwk4SG+c4KE6EfowjhjpmZQ4tymciyIUA4Dc3+BG+iocB5g5/w3sAqXydG7vGEM6c/gGdE7imVl3BrfBLNi/lbLOHYN41Ukj9GEvYQMEX8iyPc9hEwReT6UHkIH/sJaFkOz3TDQdinZSIvNuJYNNoJp70FPC8a7Ut/K+Eu7C9gihi2buDaCDesL1u1alHWtg1vIYySfmy26+UmLYepFsJDH45LzQoPKoS9XSeyajn1NxKuerYZrRbzG72bJsLNot+zzEV00TTbNBEeTLpqIvKafooNhDNH/dnUbRfgQ3EarOJ6wh1gL0Pju3bF6oiM1C/8tYTREbAScmyqzttC9Qe5x9pVsZZwC3iuRYYchEPIk2pPUnWEO8hC0R0h8+u+0zrCGLJb647QcmMxwhlmM9MhoeXXzKfVhBPQmbBLQkaqwxmqCdegtb5LQstb8xPOUe5vp4TMqZxsKgn3qENhp4SWu+clnAK2a5/qltByqjYYFYQRZqU4q2NCd1mxs6kgnI5QT+ya0BpVDGKZMALshC/qmtCNy4NYJhwCnYuuCS2//MAy4RF4sO+ckJb3biXCF6T51DmhVfZsSoSwtfCs7gnLa2KRcBcAH2eA0AqKG5si4QnqPhkg9E7NhBPoEJogtILCEaNAeI99mgnCYiBKgfAN6wGbIKRvTYRz3IbtQyYILZJPXsgTok6+14eZICychHOEk3fwTYwRQvae25zmCFfgZ5khtEhuX5MjRH+khgjzn2mWcJKgb9PMENIkuyRmCVfwG18zhJafzSPOEo7hl/aGCMPf1YTIw/3/MkRIs35NhvABH/xkiJCRp0pC8J70LEOEFhlUEj7jg4NMEXrPVYQReNd9lilC+nb7Id4In7BHww+ZIrSC2w/R0vogY4SZB98IxxqiZ4wRercw9xshfjU0SJjxTa+EkY6MEWOEzLlONVfCnY4wRGOEGVPR0vocc4S3WKUr4auOWFlzhOFrifBOR7izOUL3Gq54JXzXEUtqjpAmJUINOxqThFZQJNx8O8JL3PCFcK4lZt0goX/xhS+EuAiTrAwSXiNPLoQDLY8xSHg9BF8IH7WkjhgkDC9ZGBdCHScLo4TX08WF8KAlv8kgoXu5C74QLr8d4bJAqMGksYwS0mOBEH5l8SGThEmBcKElh8sgIVsUCNm3I2QFQj3V5UwSegVCPQnbJgnJPzeG3/93+P3n0u+/HgrvaVzCoV9chL94/pTorrK0pxHdl7qn4aBd9w8chLt7jr80PIm+YHFfKvoHGBUu76ekP6Kl7EtnC+HzIQsUKxgLaRqIzoSl86H4GZ8FPD8yjIbCgOUzvoxPEwzq3gisgYTVeZ3GVbw2Vpe2CdZMJie55LVJ+aXMea17K6AepSrClvxSOc+bkd917wXTVq7kbcnzlry3YA5nXThpjSVr+pbuLaS3bc5z9ZuBtJb04ivunqTtxFFLjR8lnWQvGyruD+XvgIk+xIP0prziDlhhh0/u9DTdiuQBM9mkkFiM8E5Hw63JncJdSnDd82PiacI9HnGyVwBkpBxPoxYTFcZoxMlS5TasKiZK8fbJe8N2+pu8qb1OVVybopngtpb3E9HGUrspqoxNVI0vdUOeAz2fnqjiVVhlfKlyjDCloC5b6qXRq2OE7WfVa2BKlZr64ABr4rwBwQqUIZre/VEvKFoTqw/It6Ceuj+1Ui9RV5dvES3VXWFKVLvBvQB68NXlzEDynlQtOHFTrUJ1eU+Y3DXG5XPXafgLcX9Sm7sGyj8M+PsWFCVjqpVVn38IyiGVt+CkTLWy6nNIUXnAshbcIyhdoCEPGJXLzUYyFtwWBEgbcrlhqc5sJG7ByZpqJXn5ngmFmgq4wmKiFpysqVZWY00FYPCXoD91gAE218VA5pEKISp4TqXnFu6LNNanIdzNtVRMtZJa6tNAawzxWnBKplpRbTWGsHWi+Cw4JVOtpNY6UdhaX2Hcbt6omWpFtdf6ApeOaLfgFE21ojjqtUFr7qX/U9qMqGqqFcRTcw9aNzGV6z2VHnHTk4eNL+eqm4guj9Fkwe3APV74al/CE4RobbvCHfYTrS5CW1WDFp2ZQGm1BTdHd+nhrUGLz/KqtuAAplpBvHWEwWviWVUWHMJUy4u/FrS9g+fmly24KbyHDRvx1/PGF/0qWXAYUy0nkZrssLr6WQVZf+oen5QrVlcf1Rsh9waZvkwgUy0nv8bE1NvfIqebBYcy1bIS7W8B6lGS18WCQ5lqub8t3KME02em+BofUXAwUy0r8T4zmF5BJTlroKmWkUyvIEi/p7K8hY6EY6l+T5ieXRUvo+OPyvXs+gf6rv0DvfO+f/9DLVsbvFquK5sJv38f0q/QS/ZNrZds//sBW4r9gNOF3+szIqCn89lt6O+EyjgClNoJ+9xb3YH0Vu9x3+OWXsf8hPa2n4h+7YlJmNAe9xHR54v34CPsIyInIC9h+qH2a7phfJ+oAKE969WMykY8k4wYYbpo9Gfpp8V2ORBC+6U3uxvqCUQiCxDau0U/tuFu7YWkKqG9SfpwmArFEpCECO3oYHxKZT53qJUM4fnUb/bHSLl2aiqE9kqL4ckrbyGc0CFMaG8OOmqbc4k5B/EEOXHC8+JvZk51iUyIvAyhvTvquFxpESNHqdw4KUI7evW7HkbX38pljMsR2vbDstN1g/mxbHKjLOH51xh2xcg8qV+gKqE9+et086m6zlohU1yBMJ1x9h0wumSvlJqqRGjb06VmRurEihW3FAlTxljjtEr9eKhac0OZ0I6GcaCH0fWPynwIwlSruwC/WfWCvWrG7YcghOmccwqgJgclwQmU3Q8iTD/WwZGAbA7mjd7uYZVEYISp5ut3dUjqkcUakdZ/EZIwHcjV38QPRYs43gaPen7y/IItBIMlTDX583tJZIYyHbxRPF7BS/nACVNFT4P1MXA87rFMx46kgzd40FFvSgfhWdFmOI5HgRO2hKtTNyQ+icfDJz3VtPQRfih6mL4ekiDwHRJ6rksp+xSlruuFxPGDIDm8Dne64D6klfB/bebTweP4tDwmi/Qc5LFFclyexo+D6RxbealaXRCa1Q/h19cP4dfXD+HX139OtL7TvmMTtgAAAABJRU5ErkJggg==" alt="" />
                                                    }
                                                                        </div>
                                                                    <div className="ml-3">
                                                                        <p className="whitespace-no-wrap">{trans._id}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p className="whitespace-no-wrap">{trans.date}</p>
                                                            </td>
                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p className="whitespace-no-wrap">{trans.paymentMode} </p>
                                                            </td>
                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p className={`whitespace-no-wrap  ${trans.paymentMethod!=='withdraw'?'text-green-600':'text-red-400'}`}>{trans.paymentMethod!=='withdraw'?'+':'-'} {trans.amount} </p>
                                                            </td>

                                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">success</span>
                                                            </td>
                                                        </tr>
                                                    )
                                                }) : ''}

                                            
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    </>
                    {/* ))} */}
                </div>
            </div>
        </div>
    )
}

export default Wallet