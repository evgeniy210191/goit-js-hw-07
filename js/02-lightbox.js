import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

function displayListGallery(listGallery) {
  return listGallery
    .map((item) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
          src="${item.preview}" 
          alt="${item.description}" 
        />
      </a>
    </li>
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
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

  window.addEventListener('keydown', closeModalEsc);
}

function closeModalEsc(event) {
  event.preventDefault();
  const box = document.querySelector('.basicLightbox');

  if (!box) {
    return;
  }

  if (event.code === 'Escape') {
    box.classList.remove('basicLightbox--visible');
    setTimeout(() => document.body.removeChild(box), 400);
  }

  window.removeEventListener('keydown', closeModalEsc);
}

galleryContainer.insertAdjacentHTML('beforeEnd', showGallery);

galleryContainer.addEventListener('click', openModal);
