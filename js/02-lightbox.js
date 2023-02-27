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

function openModal(event) {
  event.preventDefault();

  if (event.target.className !== 'gallery__image') {
    return;
  }
  
const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  scrollZoom: false,
  disableScroll: true,
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
});
  console.log(lightbox);
  
lightbox.on('show.simplelightbox', function (e) {
  document.querySelector('body').removeAttribute('style')
});
}

galleryContainer.insertAdjacentHTML('beforeEnd', showGallery);
galleryContainer.addEventListener('click', openModal);
