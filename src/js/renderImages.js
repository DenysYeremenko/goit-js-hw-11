import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchImages } from './fetchImages';
import { lightBox } from '..';
import { params } from '..';
import { imageMarkup } from './imageMarkup';
import { observer } from './infiniteScroll';
export function renderImages (event) {
    event.preventDefault()
    params.set('page', 1)

    fetchImages(event.target.elements.searchQuery.value)
    .then(function (response) {
        if(response.data.hits < 1) {
            return Notify.failure("Sorry, there are no images matching your search query. Please try again")
        }
        Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
        document.querySelector('.gallery').innerHTML = ''

        response.data.hits.map((image) => {
            document.querySelector('.gallery')
            .insertAdjacentHTML("beforeend", imageMarkup(image))
            });
        lightBox.refresh()
        document.querySelector('body')
        .insertAdjacentHTML('beforeend', '<div class="scroll-point" style="display: inline-block;"></div>')
        observer.observe(document.querySelector('.scroll-point'))    
    })
}
