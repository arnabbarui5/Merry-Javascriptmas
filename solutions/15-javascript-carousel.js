const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const allImages = document.querySelectorAll('img.card');
const gallery = document.querySelector('.gallery');
const imageCount = allImages.length;

let visibleImageId = 0;

function togglePreviousButtonBlur(action = 'INCREASE_OPACITY') {
  if (action === 'LOWER_OPACITY') {
    previousButton.style.opacity = 0.3;
    return;
  }
  previousButton.style.opacity = 1;
}

function toggleNextButtonBlur(action = 'INCREASE_OPACITY') {
  if (action === 'LOWER_OPACITY') {
    nextButton.style.opacity = 0.3;
    return;
  }
  nextButton.style.opacity = 1;
}

function translateGallery(visibleImageId) {
  const currentVisibleImage = document.querySelector('.current');

  currentVisibleImage.classList.remove('current');
  allImages[visibleImageId].classList.add('current');
  gallery.style.transform = `translateX(${visibleImageId * -220}px)`;
}

function previousButtonClickHandler() {
  if (visibleImageId === 0) return;

  translateGallery(--visibleImageId);

  if (visibleImageId === 0) {
    togglePreviousButtonBlur('LOWER_OPACITY');
    return;
  }
  togglePreviousButtonBlur();
  toggleNextButtonBlur();
}

function nextButtonClickHandler() {
  if (visibleImageId === imageCount - 1) return;

  translateGallery(++visibleImageId);

  if (visibleImageId === imageCount - 1) {
    toggleNextButtonBlur('LOWER_OPACITY');
    return;
  }
  toggleNextButtonBlur();
  togglePreviousButtonBlur();
}

previousButton.addEventListener('click', previousButtonClickHandler);
nextButton.addEventListener('click', nextButtonClickHandler);
