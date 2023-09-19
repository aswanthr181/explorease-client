// import axios from "axios";
// import { userAPI } from "../Constants/Api";

// const userInstance=axios.create({
//     baseURL: userAPI
// })

// export default userInstance
import axios from "axios";
import { userAPI } from "../Constants/Api";
import { useSelector } from "react-redux";

const createUserInstance = () => {
    const token = useSelector((state) => state.Client.Token)

    const userInstance = axios.create({
        baseURL: userAPI
    });

    userInstance.interceptors.request.use(
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
    return userInstance
};

export default createUserInstance;