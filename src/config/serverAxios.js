import axios from "axios";

console.log(process.env.REACT_APP_URL_BACKEND)

const serverAxios = axios.create({
    baseURL: process.env.REACT_APP_URL_BACKEND
});

export default serverAxios