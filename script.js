const headerButtons = document.querySelector('.header-buttons');
const header = document.querySelector('.transparent-header');
const image = header.querySelector('.header-image');
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')
const burgerdiv = document.querySelector('#burgerdiv')

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        image.style.maxWidth = '85px';
        menu.style.maxWidth = '60px'
    } else {
        header.classList.remove('scrolled');
        image.style.maxWidth = '125px';
        menu.style.maxWidth = '75px'
    }
}

function blurr() {
    this.style.display = fl;
}

window.addEventListener('scroll', handleScroll);

menu.addEventListener('click', () => {
    if (burgerdiv.style.display == 'flex') {
        burgerdiv.style.display = 'none'
    } else {
        burgerdiv.style.display = 'flex'
    }
});