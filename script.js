// Sélectionnez l'élément de l'en-tête
const header = document.querySelector('.transparent-header');

// Sélectionnez l'image à l'intérieur de l'en-tête
const image = header.querySelector('.header-image');

// Fonction de gestion du défilement
function handleScroll() {
    if (window.scrollY > 50) { // Vous pouvez ajuster cette valeur selon votre préférence
        header.classList.add('scrolled');
        image.style.maxWidth = '85px'; // Ajustez la taille de l'image ici
    } else {
        header.classList.remove('scrolled');
        image.style.maxWidth = '125px'; // Rétablissez la taille de l'image à 100%
    }
}

// Écoutez l'événement de défilement
window.addEventListener('scroll', handleScroll);
