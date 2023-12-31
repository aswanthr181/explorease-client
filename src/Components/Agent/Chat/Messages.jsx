import React, { useEffect, useRef, useState } from 'react';
import AgencyAxios from '../../../Axios/agencyAxios';
import io from 'socket.io-client'


function Messages() {
    const agencyAxios = AgencyAxios()
    const [sender, setSender] = useState('agency')
    const [chatList, setChatList] = useState()
    const [chatId, setChatId] = useState()
    const [chat, setChat] = useState()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState(null)
    const [recepient, setReciepient] = useState(null)
    const [ok, setOk] = useState(false)
    const [profile1,setProfile1]=useState()

    const messageHolder = useRef(null)



    useEffect(() => {
        agencyAxios.get('/loadList')
            .then((res) => {
                console.log(res.data.list, 'okkkkkkk');
                setChatList(res.data.list)
            })
    }, [])

    useEffect(() => {
        let socket = io('https://api.explorease.site/')
        setSocket(socket)
        socket.emit('setup', chatId)
        console.log('socket connecting');
        socket.on('connection')

        return () => {
            socket.disconnect()
        }
    }, [chatId])

    useEffect(() => {
        if (socket) {
            console.log(chatId)
            socket.on('messageResponse', (message, chatId) => {
                if (chatId === chatId) {
                    console.log('response in');
                    console.log("msgggggggggggggggggggggggggggg", message)
                    setMessages(prevMessage => [...prevMessage, message])

                }
            })
        }
    }, [socket])


    useEffect(() => {
        if (recepient) {
            agencyAxios.post('/loadChat', { id: recepient, chatType: "agency" })
                .then((res) => {
                    console.log(res.data.chat, '*************');
                    setChat(res.data.chat)
                    setMessages(res.data.chat.messages)
                })
        }
    }, [])

    useEffect(() => {
        if (messageHolder.current)
            messageHolder.current.scrollTop = messageHolder.current.scrollHeight
    }, [messages])

    const sendMessage = () => {

        if (message.length !== 0) {
            let newMessage = {
                text: message,
                senderType: 'agency',
                user: 'fghjkl;',
                timestamp: Date.now()
            }
            agencyAxios.post('/addMessage', { message, chatId, sender })
                .then((res) => {
                    // setMessages(res.data.chat.messages)
                    socket.emit('newMessage', newMessage, chatId)
                    console.log(messages, 'msgsgs');
                    setMessage('')
                })
        }
    }



    return (
        <div >
            <div className="flex h-screen full antialiased justify-center items-center text-gray-800">
                

                <div className={!true ? "hidden md:flex w-2/6 md:w-7/12 lg:6/12 xl:w-4/12 h-[92%]  justify-center items-center rounded-lg bg-gray-300 ml-2 " : "w-2/6  h-[92%] flex justify-center items-center rounded-lg bg-gray-300 md:ml-2 "}>
                    <div className="h-[90%]  overflow-scroll w-[96%]  bg-gray-200">
                        <p className="m-2 font-bold">Chats</p>
                        {!chatList ? <div className='w-fukk h-full flex justify-center items-center'>
                            {/* <Loader /> */}
                        </div> : <>
                            {chatList ? (

                                chatList.map((list) => {
                                    return (

                                        <div
                                        onClick={() => {
                                            setOk(true)
                                            setChatId(list._id)
                                            setReciepient(list.sender)
                                            setMessages(list.messages)
                                            setProfile1(list.sender?.image)
                                        }}
                                            className="m-1 bg-white h-[5rem]  flex items-center"
                                        >
                                            <img
                                                src={list?.sender?.image}
                                                // 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                                className="h-[50%] rounded-full  md:block w-[10%] ml-[1%]"
                                                alt=""
                                            />
                                            <div className="overflow-hidden ml-3 h-[60%]  w-full">
                                                <h1 className="font-bold">{list?.sender?.name}</h1>


                                                {/* {show.receiver == list._id ? <small className="w-[100%]">{show.text}</small> : ''} */}
                                                <small className="w-[100%]">{list?.messages[list?.messages.length-1].text } </small>

                                            </div>
                                            <div className="md:mr-[2%] text-end w-full flex-col h-full">
                                                <p className="text-xs">
                                                    {/* {list.messages &&
                                                        list.messages[list.messages.length - 1] &&

                                                        new Date(
                                                            list.messages[list.messages.length - 1].timestamp
                                                        ).toLocaleDateString()
                                                    } */}
                                                </p>{" "}
                                                {/* <small>{list.messages.length?new Date( list.messages[list.messages.length - 1].timestamp) < timestamp ? 'read' : 'unread':""}</small> */}

                                                {/* <div className="border mt-[50%]  rounded-full w-[40%] text-center text-xs font-bold bg-green-600 text-white h-[26%]">
												1
											</div> */}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>
                                    <h1>no list</h1>{" "}
                                </div>
                            )}
                        </>

                        }

                    </div>
                </div>



                <div className="sm:flex sm:flex-row h-full w-4/6 overflow-x-hidden">

                    <div className="flex flex-col flex-auto h-full p-6 ">


                        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-200 h-full p-4">
                            <div className="flex flex-col h-full overflow-x-auto mb-4" ref={messageHolder} >

                                <div className="flex flex-col h-full">

                                    {messages.map((message) => (
                                        <div key={message._id} className="grid grid-cols-12 gap-y-2">
                                            {(message?.senderType || message?.user) == 'agency' ? <div className="col-start-7 col-end-13 p-3 rounded-lg">
                                                <div className="flex items-center justify-start flex-row-reverse">
                                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                        <img
                                                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                                            alt="Avatar"
                                                            className="h-full w-full rounded-full"
                                                        />
                                                    </div>
                                                    <div className="relative mr-3 w-full text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                                        <div className='break-words'>{message?.text}</div>
                                                        <small className="text-xs text-gray-400"> {new Date(message?.timestamp).toLocaleString('en-US', {
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            hour12: true
                                                        })}</small>
                                                    </div>
                                                </div>
                                            </div> : <div className="col-start-1 col-end-7 p-3 rounded-lg">
                                                <div className="flex flex-row items-center">
                                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                        <img
                                                            src={profile1?profile1:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                                                            // 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                                            alt="Avatar"
                                                            className="h-full w-full rounded-full"
                                                        />
                                                    </div>
                                                    <div className="relative mr-3 w-full text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                                        <div className='break-words'>{message?.text}</div>
                                                        <small className="text-xs text-gray-400"> {new Date(message?.timestamp).toLocaleString('en-US', {
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            hour12: true
                                                        })}</small>
                                                    </div>
                                                </div>
                                            </div>}
                                            <div />
                                        </div>
                                    ))}


                                </div>

                            </div>

                            <div>
                                {ok ?
                                    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                                        <div className="flex-grow ml-4">
                                            <div className="relative w-full">
                                                <input
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    type="text"
                                                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                                    placeholder="Type your message..."
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter')
                                                            sendMessage()
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <button
                                                onClick={() => sendMessage()}
                                                type='button'
                                                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                            >
                                                <span>Send</span>
                                            </button>
                                        </div>
                                    </div> : ''}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Messages;