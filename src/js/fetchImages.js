import axios from 'axios';
import {params} from '../index'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages (searchWord) {
    try {return await axios.get(`?q=${searchWord}&${params}`)}
    catch (error) {
        console.log(error);
    }
}