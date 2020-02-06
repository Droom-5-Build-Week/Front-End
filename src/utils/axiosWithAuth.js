import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://droom-bt-tl.herokuapp.com/api/',
        headers: {
            'baseURL': 'https://droom-bt-tl.herokuapp.com/api/',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};
