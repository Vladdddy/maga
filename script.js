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

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const text = textElement.innerText;
    textElement.innerHTML = '';

    // Create span elements for each character
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.innerText = char;
        }
        span.style.animationDelay = `${index * 0.02}s`;
        textElement.appendChild(span);
    });

    // Function to handle intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textElement.classList.remove('hidden');
            } else {
                textElement.classList.add('hidden');
            }
        });
    }

    // Intersection Observer to trigger animation
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    observer.observe(textElement);
});