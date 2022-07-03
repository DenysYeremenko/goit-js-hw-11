import {params} from '../index'
import {fetchImages} from './fetchImages';
import { lightBox } from '..';
import { imageMarkup } from './imageMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {smothScroll} from './smothScroll'
let pageCount =1
const inputValue = document.querySelector('.search-form__input')

export const renderNextPage = () => {
    pageCount+=1
    params.set('page', pageCount)

    fetchImages(inputValue.value)
    .then(function (response) {
      
      response.data.hits.map((image) => {
        document.querySelector('.gallery').insertAdjacentHTML("beforeend", imageMarkup(image))
      })

    lightBox.refresh()
    
    smothScroll()

    if(response.data.hits.length < 40) {
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
    })
}