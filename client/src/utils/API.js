import axios from "axios";

export default {
    newUser: userInfo => {
        return axios.post("/auth/signup", userInfo);
    },
    checkUser: userInfo => {
        console.log(userInfo);
        return axios.post("/auth/login", userInfo)
    }
}