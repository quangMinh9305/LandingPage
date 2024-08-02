// Create and add new paragraph
const newPara = document.createElement('section');
newPara.setAttribute('id', 'section4');
newPara.setAttribute('data-nav', 'Section 4');
newPara.innerHTML = document.querySelector('#section1').innerHTML;
newPara.querySelector('h2').textContent = 'Section 4';
document.querySelector('main').appendChild(newPara);

// build the nav
const navMenu = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section');
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
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}
document.addEventListener('scroll', () => { makeActive(); });

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(element) {
    const item = document.getElementById(element.getAttribute('data-link'));
    item.scrollIntoView({ behavior: 'smooth' });
}


// Scroll-To-Top button on the page
// Create the button element
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Scroll to Top';
scrollToTopButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; display: none";

// Add the button to the page
document.body.appendChild(scrollToTopButton);

// set a const value for the fold height
const foldHeight = 600;

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






