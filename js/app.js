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
 * Define Global Variables
 * 
*/
const navbar_list = document.querySelector('ul');
const menus = ['Home', 'About', 'Product'];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

menus.forEach(function (el) {
    let navbar_list_items = document.createElement('li');
    navbar_list_items.innerHTML = `<a>${el}</a>`;
    navbar_list.appendChild(navbar_list_items);
    navbar_list_items.firstElementChild.classList.add('menu__link');
});

    const menu_items = document.querySelectorAll('a');

    for(let i = 0; i < menu_items.length; ++i){
    menu_items[i].setAttribute('href',`#section${1+i}`);

    menu_items[i].addEventListener('click',smoothScroll);

}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function onscroll(event) {

    let sections = document.querySelectorAll('section');
    let scroll_position = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop;

    for (let i = 1; i < sections.length; i++){
        let  current_link = sections[i];
        if(current_link.offsetTop <= scroll_position && (current_link.offsetTop + current_link
            .offsetHeight > scroll_position)){
            current_link.classList.add('my-active-class');
        }else {
            current_link.classList.remove('my-active-class');

        }
    }

}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });

}
// build the nav


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
window.document.addEventListener('scroll',onscroll);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

