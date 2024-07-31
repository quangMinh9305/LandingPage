/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navMenu = document.querySelector('#navbar__list')
for (const section of sections) {
    const navItem = document.createElement('li');
    navItem.textContent = section.getAttribute('data-nav');
    navItem.classList.add('menu__link');
    navItem.setAttribute('data-link', section.id);
    navItem.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToAnchor(navItem);
    });
    navMenu.appendChild((navItem));
}


// Add class 'active' to section when near top of viewport
const VALUE = 150;
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= VALUE && box.bottom >= VALUE) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
}
document.addEventListener('scroll', () => { makeActive(); });

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(element) {
    const item = document.getElementById(element.getAttribute('data-link'));
    item.scrollIntoView({ behavior: 'smooth' });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// Top button on the page
// Create the button element
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Scroll to Top';
scrollToTopButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; display: none";

// Add the button to the page
document.body.appendChild(scrollToTopButton);

// Fold height
const foldHeight = 600; // pixels

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > foldHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Add an event listener to the button's click event
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide fixed navigation bar
const navbar = document.querySelector('.page__header');
let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    navbar.style.position = 'fixed';
    isScrolling = setTimeout(() => {
        if (window.scrollY > foldHeight) {
            navbar.style.position = 'static';
        }
    }, 2000);
});





