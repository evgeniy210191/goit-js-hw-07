import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function displayListGallery(listGallery) {
  return listGallery
    .map((item) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>
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

  const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            <img src="${event.target.src}" width="800" height="600">
        </p>
    </div>
`);
  instance.show();
  window.addEventListener('keydown', function closeModalEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalEsc);
    }
  });
}



galleryContainer.insertAdjacentHTML('beforeEnd', showGallery);
galleryContainer.addEventListener('click', openModal);
