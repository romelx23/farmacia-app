import axios from "axios";

export const pharmacyApi=axios.create({
    baseURL:'https://pharmacy-app-production.up.railway.app'
})