import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import userAxios from '../../../Axios/userAxios'

function Tripdetail() {

    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState()
    console.log('vaaaaaaaaaaaaanm');
    console.log('**', id);
    useEffect(() => {
        // userAxios.get(`/getTripDetails?id=${id}`)
        if (id) {
            userAxios.get(`/getTripDetails?id=${id}`)
                .then((res) => {
                    const result = res.data.data
                    console.log('ajmallll', result);
                    setData(result)
                })
        }
    }, [])

    return (
        <>
            <div className="w-4/5 m-auto h-full cursor-default bg-white flex">
                <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
                    {/* <div className='w-1/2'> */}
                    <div className='w-full text-black'>
                        <div className="fixed left-7 top-40 w-1/3 h-screen space-y-5">

                            <img
                                className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
                                src={data ?
                                    data.photo : ''}
                                alt=""
                            />

                            <div>
                                <h2 className="font-bold">{data ? data.destination : ''}</h2>
                                <h1 className="
                                text-2xl font-bold">{data ? data.title : ''}</h1>
                            </div>
                            <p className="text-sm">
                                {data ? data.start : ''} to {data ? data.destination : ''}           .
                                {data ? data.date : ''} architecto    h     {data ? data.day : ''} day
                                {data ? data.night : ''}  night quos ullam fuga doloremque quod dicta
                                {data ? data.amount : ''}
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in

                            </p>
                            <div className=' flex gap-4  h-16 px-2 py-1'>
                                <div className='w-1/2 flex justify-center items-center bg-green-400 hover:bg-green-700 '>
                                    CHAT
                                </div>
                                <div className='w-1/2 bg-red-500 font-semibold flex justify-center items-center hover:bg-red-600'>
                                    <p className='text-center'>BOOK NOW</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='h-screen'>
                        <div className="w-full  space-y-4 text-left text-black ">
                            <h2 className="font-bold">Lorem ipsum dolor sit.</h2>
                            <h1 className="font-bold text-2xl">Lorem ipsum dolor sitamet.</h1>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                assumenda rem, autem accusamus magni nam culpa aut perspiciatis,
                                totam beatae reiciendis repellendus eligendi? Qui. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Delectus assumenda rem, autem
                                accusamus magni nam culpa aut perspiciatis, totam beatae reiciendis
                                repellendus eligendi? Qui.
                            </p>

                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                assumenda rem, autem accusamus magni nam culpa aut perspiciatis,
                                totam beatae reiciendis repellendus eligendi? Qui. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Delectus assumenda rem, autem
                                accusamus magni nam culpa aut perspiciatis, totam beatae reiciendis
                                repellendus eligendi? Qui.
                            </p>
                            <ol className="border-l border-neutral-300 dark:border-neutral-500">

                                <li>
                                    <div className="flex-start flex items-center pt-3">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                            01.07.2021
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">
                                            Title of section 1
                                        </h4>
                                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                            scelerisque diam non nisi semper, et elementum lorem ornare.
                                            Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                            sodales vehicula.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                            13.09.2021
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">
                                            Title of section 2
                                        </h4>
                                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                            Libero expedita explicabo eius fugiat quia aspernatur autem
                                            laudantium error architecto recusandae natus sapiente sit nam
                                            eaque, consectetur porro molestiae ipsam an deleniti.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                            13.09.2021
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">
                                            Title of section 2
                                        </h4>
                                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                            Libero expedita explicabo eius fugiat quia aspernatur autem
                                            laudantium error architecto recusandae natus sapiente sit nam
                                            eaque, consectetur porro molestiae ipsam an deleniti.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                            13.09.2021
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">
                                            Title of section 2
                                        </h4>
                                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                            Libero expedita explicabo eius fugiat quia aspernatur autem
                                            laudantium error architecto recusandae natus sapiente sit nam
                                            eaque, consectetur porro molestiae ipsam an deleniti.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                            25.11.2021
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5">
                                        <h4 className="mb-1.5 text-xl font-semibold">
                                            Title of section 3
                                        </h4>
                                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                            Voluptatibus temporibus esse illum eum aspernatur, fugiat
                                            suscipit natus! Eum corporis illum nihil officiis tempore.
                                            Excepturi illo natus libero sit doloremque, laborum molestias
                                            rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                                        </p>
                                    </div>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Tripdetail