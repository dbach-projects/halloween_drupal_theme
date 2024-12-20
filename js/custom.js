/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    console.log('CLICK');

    navMenu.classList.add('show-menu');
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    console.log('CLICK');
    navMenu.classList.remove('show-menu');
  });
}

/*===== Atropos JS =====*/
const myAtropos = Atropos({
  el: '.home__images',
  shadow: false,
  highlight: false,
});

/*===== ADD SHADOW HEADER =====*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);
