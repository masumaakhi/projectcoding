// Select elements
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');
const navLinks = document.querySelector('.nav-links'); // Define navLinks

// Toggle button click event
toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    // Update icon class
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Submenu toggle events
// let htmlcssArrow = document.querySelector('.htmlcss-arrow');
// htmlcssArrow.onclick = function() {
//     navLinks.classList.toggle('show1');
// };

// let moreArrow = document.querySelector('.more-arrow2');
// moreArrow.onclick = function() {
//     navLinks.classList.toggle('show2');
// };


// let jsArrow = document.querySelector('.js-arrow');
// jsArrow.onclick = function() {
//     navLinks.classList.toggle('show3');
// };



//Swiper slideshow

// const swiper = new Swiper('.slider-wrapper', {
    
//     loop: true,
//     grabCursor: true,
//     spaceBetween: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       DynamicBullets: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
  
//     },
  
//   });


  