// import axios from "axios";
// import { adminAPI } from "../Constants/Api";

// const adminInstance=axios.create({
//     baseURL:adminAPI
// });

// export default adminInstance;

import axios from "axios";
import { adminAPI } from "../Constants/Api";
import { useSelector } from "react-redux";

const createAdminInstance = () => {
    const token = useSelector((state) => state.Admin.Token);

    const adminInstance = axios.create({
        baseURL: adminAPI
    });

    adminInstance.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return adminInstance;
}

export default createAdminInstance