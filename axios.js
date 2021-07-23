import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lyceum--backend.herokuapp.com/'
});

export default instance;