const headerButtons = document.querySelector('.header-buttons');
const header = document.querySelector('.transparent-header');
const image = header.querySelector('.header-image');
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')
const burgerdiv = document.querySelector('#burgerdiv')
const blurdiv = document.querySelector('#blurdiv')

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        image.style.maxWidth = '85px';
        image.style.maxHeight = '85px';
        menu.style.maxWidth = '60px';
        burgerdiv.style.marginTop = '85px'
        burgerdiv.style.backgroundColor = 'transparent'
    } else {
        header.classList.remove('scrolled');
        image.style.maxWidth = '125px';
        image.style.maxHeight = '125px';
        menu.style.maxWidth = '75px'
        burgerdiv.style.marginTop = '125px'
        burgerdiv.style.backgroundColor = "rgba(0, 0, 0, 0.316)";
    }
}

function hidediv() {
    document.querySelector('#blurdiv').style.display = 'none'
    menu.click()
}

window.addEventListener('scroll', handleScroll);

menu.addEventListener('click', () => {
    if (burgerdiv.style.display == 'flex') {
        burgerdiv.style.display = 'none'
        blurdiv.style.display = 'none'
    } else {
        burgerdiv.style.display = 'flex'
        blurdiv.style.display = 'block'
    }
});