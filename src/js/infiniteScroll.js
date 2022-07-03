import { renderNextPage } from "./renderNextPage";
const options = {
    rootMargin: '50px',
    treshhold: 1.0
}
export const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            renderNextPage()
        }
    })
}, options)

