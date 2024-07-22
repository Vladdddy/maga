/*       < NOT WORKING >

window.addEventListener('scroll', function () {
    var ids = ['imagess', 'image2_mostre'];

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
});*/