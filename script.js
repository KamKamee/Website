document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-with-text');
    const prevButton = document.querySelector('#Previous');
    const nextButton = document.querySelector('#Next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    showImage(currentIndex);

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
});
