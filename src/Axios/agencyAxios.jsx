// import axios from "axios";
// import { agencyAPI } from "../Constants/Api";

// const agencyInstance=axios.create({
//     baseURL:agencyAPI,
// })

// export default agencyInstance;
import axios from "axios";

import { agencyAPI } from "../Constants/Api";
import { useSelector } from "react-redux";

const createAgencyInstance = () => {
    const token = useSelector((state) => state.Agency.Token)

    const agencyInstance = axios.create({
        baseURL: agencyAPI,
    });

    agencyInstance.interceptors.request.use(
        (config)=>{
            if(token){
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error)=>{
            return Promise.reject(error)
        }
    );

    return agencyInstance;

};

export default createAgencyInstance;

