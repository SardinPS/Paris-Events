import axios from 'axios';

const API_ENTRY = 'https://opendata.paris.fr/api/v2';

const errorHandler = (res) => {
    let errMessage = (res.response) ?
        `${res.response.statusText} : ${res.response.data.message}` :
        res.message;
    return Promise.reject(new Error(errMessage));
}
