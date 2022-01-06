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
const navigation = document.getElementById('navbar__list');


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
function navBuilder(){
    let navUI = ``;
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDatanav = section.dataset.nav;

        navUI += `<li><a class="menu__link ${sectionID}" href="#${sectionID}">${sectionDatanav}</a></li>`;
    });
    navigation.innerHTML = navUI ;
}
navBuilder();

// Add class 'active' to section when near top of viewport
const menuLink = document.querySelectorAll('.menu__link')

function addActiveClass(){
    sections.forEach(section => {
        const sectionID = section.id;
        console.log(sectionID)
        //console.log(section.getBoundingClientRect().y)
        if(section.getBoundingClientRect().y <= 250 && section.getBoundingClientRect().bottom >= 250 ){
            section.classList.add("active-class")
            menuLink.forEach(link => {
                console.log()
                if(link.classList.contains(`${sectionID.toString()}`)){
                    link.classList.add('activeLink')
                }
                else{
                    link.classList.remove('activeLink')
                }
            })
        }
        else{
            section.classList.remove("active-class")
        }            
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener("scroll", function() {
    addActiveClass()
});
// Set sections as active


