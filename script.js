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

    // Split text into characters and create spans for each character
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.innerText = char;
        }
        span.style.animationDelay = `${index * 0.1}s`; // Adjust delay as needed
        textElement.appendChild(span);
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Intersection Observer to trigger animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.querySelectorAll('span').forEach((span, index) => {
                    span.style.animation = `fadeIn 1s forwards ${index * 0.1}s`; // Adjust animation delay if needed
                });
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of element is in viewport
    });

    // Start observing the text element
    observer.observe(textElement);

    // Additional check on scroll to handle cases where element is already in viewport on page load
    window.addEventListener('scroll', () => {
        if (isInViewport(textElement)) {
            textElement.classList.remove('hidden');
            textElement.querySelectorAll('span').forEach((span, index) => {
                span.style.animation = `fadeIn 1s forwards ${index * 0.1}s`; // Adjust animation delay if needed
            });
            observer.unobserve(textElement); // Stop observing once animation starts
        }
    });
});

