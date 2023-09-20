import React, { useEffect } from 'react'
import {GoogleLogin,useGoogleOneTapLogin} from '@react-oauth/google'
import {decodeJwt, errors} from 'jose'
import UserAxios from '../../../Axios/userAxios';
import {useNavigate} from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector} from 'react-redux';
// import { clientLogin } from '../../Redux/client';
import {ClientLogin} from '../../../Redux/ClientAuth'



function Googlelogin() {
const userAxios=UserAxios()
    const generaterror = (err) => toast.error(err, { position: 'top-center' });
   const navigate = useNavigate()
   const dispatch = useDispatch()

    return (
        <div className='flex items-center justify-center h-12  mt-8 rounded font-semibold text-sm text-blue-100'>
           <GoogleLogin
           onSuccess={credentialResponse=>{
            console.log(credentialResponse)
            const {credential} = credentialResponse
            const payload = credential ? decodeJwt(credential) :undefined
            console.log(payload)
            if(payload){
                userAxios.post('/googlelogin',payload)
                .then((res)=>{
                    console.log('google response  ',res.data);
                    if(res.data.Success){
                        const token=res.data.userSignUp.token
                        dispatch(
                            ClientLogin({
                                token: token
                                
                            })
                        )
                        navigate('/')

                    }
                    else{
                        navigate('/login')
                        generaterror(res.data.userSignUp.message)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    generaterror(err)
                })
                
              
            }
           }}
           onError={error =>console.log(error)}
           
           />
          
        </div>
    )
}

export default Googlelogin