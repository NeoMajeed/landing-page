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
var sections = document.querySelectorAll('section');
var navigation = document.getElementsByClassName('navbar__list')[0];
const windowSize = document.documentElement.clientWidth;
let menuLink;

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

        navUI += `<li><a data-link="${sectionID}" class="menu__link ${sectionID}">${sectionDatanav}</a></li>`;
    });
    navigation.innerHTML = navUI ;    
    menuLink = document.querySelectorAll('.menu__link')

}

// Add class 'active' to section when near top of viewport

function addActiveClass(){
    sections.forEach(section => {
        const sectionID = section.id;
        console.log(sectionID)
        if(section.getBoundingClientRect().y <= 250 && section.getBoundingClientRect().bottom >= 250 ){
            section.classList.add("active-class")
            menuLink.forEach(link => {
                console.log()
                if(link.classList.contains(`${sectionID}`)){
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

function myFunction() {
    if(windowSize < 600){
        if (navigation.className === "navbar__list") {
      navigation.className += " checked";
    }   else {
      navigation.className = "navbar__list";
    }
    }
  
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("load", navBuilder());

// Scroll to section on link click
menuLink.forEach(link =>{
    link.addEventListener("click", () =>{
        const item = document.getElementById(link.getAttribute("data-link"))
        item.scrollIntoView({behavior:"smooth", block:"start"});
        myFunction();
    })
})

// Set sections as active
let noScroll;
document.addEventListener("scroll", function() {
    addActiveClass()
    console.log()
    const menu = document.querySelector('header');
    menu.style.top = '0'
    clearTimeout(noScroll)

    noScroll = setTimeout(() =>{       
        menu.style.top = '-104px'
        navigation.classList.remove('checked')
    },1000)
});

