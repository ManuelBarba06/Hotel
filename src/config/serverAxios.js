import axios from "axios";

const serverAxios = axios.create({
    baseURL: process.env.REACT_APP_URL_BACKEND
});

export default serverAxios