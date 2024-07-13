window.addEventListener('scroll', function () {
    var ids = ['image1', 'image2', 'estate',
        'digitale', 'contemporaneo', 'biblioteca',
        'ricola', 'educazione'];

    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        var position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 0) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    }

    ids.forEach(toggleVisibility);
});