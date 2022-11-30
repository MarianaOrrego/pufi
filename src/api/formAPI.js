import axios from 'axios';

export const formAPI = axios.create({
    baseURL: 'https://formspree.io/f/myyvqkzy'
});