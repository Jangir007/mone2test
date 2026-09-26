// Логика появления элементов при скролле (Intersection Observer)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Элемент появляется, когда 15% его видно на экране
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
