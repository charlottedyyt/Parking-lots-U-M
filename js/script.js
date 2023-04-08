document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector("#navbarNav").classList.toggle('collapse');
    document.querySelector(".title").classList.toggle('showHeader');
});