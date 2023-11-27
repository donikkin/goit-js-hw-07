import { galleryItems } from './gallery-items.js';
// Change code below this line

  document.querySelector('.gallery').addEventListener('click', function (event) {
  event.preventDefault();

  const { tagName, dataset } = event.target;

  if (tagName === 'IMG') {
    const { source } = dataset;

    const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
    instance.show();

    document.addEventListener('keydown', function closeOnEscape(e) {
      if (e.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeOnEscape);
      }
    });
  }
});
console.log(galleryItems);