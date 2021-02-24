import axios from 'axios';
import { devUrl } from '../constants/envVariables';


export const apiPost = (url, body, header) => {
   return axios.post(devUrl + url, JSON.stringify(body), {headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.data)
        .then(data => data.content || data)
};

export const apiPut = (url, body, header) => {
   return axios.put(devUrl + url, JSON.stringify(body), {headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.data)
        .then(data => data.content || data)
};

