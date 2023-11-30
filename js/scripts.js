window.onscroll = function() {
    var barraNav = document.querySelector('.header__nav'); // Asegúrate de que el selector coincida con tu barra de navegación
    var header = document.querySelector('.header'); // Selector para tu header
    var stickyNav = barraNav.offsetTop; // Obtén la posición inicial de la barra de navegación
    var stickyHeader = header.offsetTop; // Obtén la posición inicial del header

    // Para la barra de navegación (ajusta según tus necesidades)
    if (window.pageYOffset > stickyNav) {
        barraNav.classList.add('navbar-flotante');
    } else {
        barraNav.classList.remove('navbar-flotante');
    }

    // Para el header
    if (window.pageYOffset > stickyHeader) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};


