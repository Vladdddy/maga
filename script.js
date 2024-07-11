window.addEventListener('scroll', function () {
    var artcontainer = document.getElementById('artcontainer');
    var position = artcontainer.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        artcontainer.classList.add('show');
    } else if (position < window.inner) {
        artcontainer.classList.remove('show');
    }
});