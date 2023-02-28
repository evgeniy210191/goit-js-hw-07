import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function displayListGallery(listGallery) {
  return listGallery
    .map((item) => {
      return `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}"
          />
        </a>
      `;
    })
    .join('');
}

const showGallery = displayListGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  scrollZoom: false,
  disableScroll: true,
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
});

galleryContainer.insertAdjacentHTML('beforeEnd', showGallery);
