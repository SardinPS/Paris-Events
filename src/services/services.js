import axios from 'axios';

const API_ENDPOINT = 'https://opendata.paris.fr/api/v2/catalog/datasets/';

const errorHandler = (res) => {
    let errMessage = (res.response) ?
        `${res.response.statusText} : ${res.response.data.message}` :
        res.message;
    return Promise.reject(new Error(errMessage));
}
export default {
    fetchAll: function () {
        return axios.get(`${API_ENDPOINT}que-faire-a-paris-/records`)
            .then(res => res.data)
            .catch(errorHandler)
           
    },
}
