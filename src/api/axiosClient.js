import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://opentdb.com/',
    headers: {
        "Content-Type": 'application/json'
    }
})

export default axiosClient