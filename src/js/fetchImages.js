import axios from 'axios';
import {params} from '../index'

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages (searchWord) {
    try {return await axios.get(`?q=${searchWord}&${params}`)}
    catch (error) {
        console.log(error);
    }
}