window.addEventListener('scroll', function () {
    var image1 = document.getElementById('image1');
    var position = image1.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        image1.classList.add('show');
    } else if (position < window.inner) {
        image1.classList.remove('show');
    }
});

window.addEventListener('scroll', function () {
    var image2 = document.getElementById('image2');
    var position = image2.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        image2.classList.add('show');
    } else if (position < window.inner) {
        image2.classList.remove('show');
    }
});