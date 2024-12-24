const galleryImages = document.querySelectorAll('.gallery-image');
const captionDiv = document.getElementById('caption');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const caption = image.dataset.caption;
    captionDiv.textContent = caption;
  });
});