import axios from "axios";
import Cookies from 'js-cookie'

const access_token1 = Cookies.get('access_token');

export const pharmacyApi=axios.create({
    baseURL:'https://pharmacy-app-production.up.railway.app',
    headers: {
        "Authorization": `Bearer ${access_token1}`,
        "httpOnly": true,
        "withCredentials": true,
        "Cookie": `access_token=${access_token1}`,
      },
})