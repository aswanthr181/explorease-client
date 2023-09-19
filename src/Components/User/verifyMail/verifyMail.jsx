import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserAxios from '../../../Axios/userAxios'

function VerifyMail() {
     const userAxios=UserAxios()
    const { token } = useParams()

    useEffect(() => {
        console.log('tommmmm',token);
        userAxios.post('/verify', { token  }).then((res) => {
            console.log(res.data.status)
            if (res.data.status === true) {
                console.log("success")
            }
        })
    }, [])
    return (
        <>
            <div>
                <div className='text-center font-extrabold text-2xl mt-8'>Your email is Successfully verified</div>
                <div className='text-center font-bold text-xl mt-8 hover:text-blue-500'><Link to='/login'>Click here to go to Login page</Link></div>
            </div>

        </>
    )
}

export default VerifyMail