export const smothScroll = () => {
    const { height: cardHeight } = 
    document.querySelector(".gallery").firstElementChild.getBoundingClientRect();

    window.scrollBy({
    top: cardHeight * 5,
    behavior: "smooth",
});
}