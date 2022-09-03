import axios from 'axios';
export const moviesDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'b855bb6606a802b7fcb6c0fa81e2f121',
        language: 'en-US',
        page:1
    },
});