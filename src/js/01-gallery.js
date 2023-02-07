import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const myGallery = document.querySelector(".gallery");

createMarkup();

new SimpleLightbox('.gallery a',{
    captionDelay: "250"
});

function createMarkup() {
    const items = [];

    galleryItems.forEach(item => {
        const { preview, original, description } = item;

        const link = document.createElement("a");
        link.classList.add("gallery__item");
        link.setAttribute("href", original);

        const image = document.createElement('img');
        image.classList.add("gallery__image");

        image.src = preview;
        image.alt = description;
        image.setAttribute("title", description);

        link.append(image);

        items.push(link);
    });

    myGallery.append(...items);
}

console.log(galleryItems);
