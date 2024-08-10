const faSolid = document.querySelector('.fa-solid');
const menuCelu = document.querySelector('.lista-navbar-celu');

function toggleMenu() {
    if (menuCelu.classList.contains('show')) {
        menuCelu.classList.remove('show');
        menuCelu.classList.add('hide');
        menuCelu.addEventListener('animationend', () => {
            menuCelu.style.display = 'none';
        }, { once: true });
    } else {
        menuCelu.classList.remove('hide');
        menuCelu.classList.add('show');
        menuCelu.style.display = 'flex';
    }
}

function handleResize() {
    if (window.innerWidth > 600) {
        menuCelu.classList.remove('show', 'hide');
        menuCelu.style.display = '';
    }
}

faSolid.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);