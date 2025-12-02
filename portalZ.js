document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (!track || !prevButton || !nextButton) return;

    // Função para rolar o track
    const scrollCarousel = (direction) => {
        const scrollAmount = track.offsetWidth / 2; 
        if (direction === 'prev') {
            track.scrollLeft -= scrollAmount;
        } else {
            track.scrollLeft += scrollAmount;
        }
    };

    prevButton.addEventListener('click', () => scrollCarousel('prev'));
    nextButton.addEventListener('click', () => scrollCarousel('next'));

    
    const checkViewport = () => {
        if (window.innerWidth > 768) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
});

