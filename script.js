const hamburger = document.querySelector('.hamburger i');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
      hamburger.classList.toggle('fa-xmark');
      navbar.classList.toggle('slide');
});