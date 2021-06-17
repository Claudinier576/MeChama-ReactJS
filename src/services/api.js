import axios from 'axios'

const api = axios.create({
    baseURL: "http://tn-15mechama-com.umbler.net",
})

export default api