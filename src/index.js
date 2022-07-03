import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderNextPage } from './js/renderNextPage';
import { renderImages } from './js/renderImages';
import { observer } from './js/infiniteScroll';
export const AUTH_KEY = '28392948-79f8fed4c19d5276dcc9cb237'
export const lightBox = new SimpleLightbox('.gallery a', {captionDelay: 250,});
export const params = new URLSearchParams ({
  key: AUTH_KEY,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  per_page: 40,
})

const searchFormEl = document.querySelector('.search-form')

searchFormEl.addEventListener('submit', renderImages)
