import axios from "axios"

const api = axios.create({
    baseURL: 'https://manse99sharkattack-production.up.railway.app/api/sharkattack'
})

export default api