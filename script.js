function toggleActiveClass(element) {
    element.classList.toggle('active');
}












/* <>Code from another source</> */

window.addEventListener('scroll', function () {
    var ids = ['image1', 'image2', 'estate',
        'digitale', 'contemporaneo', 'biblioteca',
        'ricola', 'educazione', 'image1_mostre',
        'image2_mostre', 'image3_mostre'];

    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            var position = element.getBoundingClientRect();
            console.log('Element:', elementId, 'Position:', position);
            if (position.top < window.innerHeight && position.bottom > 0) {
                element.classList.add('show');
                console.log('Element shown:', elementId);
            } else {
                element.classList.remove('show');
                console.log('Element hidden:', elementId);
            }
        } else {
            console.warn('Element not found:', elementId);
        }
    }

    ids.forEach(toggleVisibility);
});
window.dispatchEvent(new Event('scroll'));