// Sélectionnez l'élément de l'en-tête
const header = document.querySelector('.transparent-header');

// Sélectionnez l'image à l'intérieur de l'en-tête
const image = header.querySelector('.header-image');

const container = document.querySelector('.container')

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        image.style.maxWidth = '85px';
    } else {
        header.classList.remove('scrolled');
        image.style.maxWidth = '125px';
    }
}

window.addEventListener('scroll', handleScroll);
