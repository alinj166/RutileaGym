import axios from 'axios'


const Axios = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    timeout: 500000,
})
export { Axios }