export const imageMarkup = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => 
     `<a href="${largeImageURL}" class="gallery__item">
            <img src="${webformatURL}" alt="${tags}" class="gallery__image bla" title=""/>
                <div class="photo-card">
                <div class="info">
                    <p class="info-item">
                    <b>Likes</b> <span>${likes}</span>
                    </p>
                    <p class="info-item">
                    <b>Views</b> <span>${views}</span>
                    </p>
                    <p class="info-item">
                    <b>Comments</b> <span>${comments}</span>
                    </p>
                    <p class="info-item">
                    <b>Downloads</b> <span>${downloads}</span>
                    </p>
                </div>
                </div>
            </a>
            `