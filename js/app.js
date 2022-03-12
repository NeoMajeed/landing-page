
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigation = document.getElementsByClassName('navbar__list')[0];
const icon = document.querySelector('.icon');
const btnGoUp = document.querySelector('.goup');
const menu = document.querySelector('header');
let menuLink = [];
let noScrolling;
let ishamburgerChecked = false;
    
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* If user use phone it will shows navItems*/
function hamburger() {
    const windowSize = document.documentElement.clientWidth;
    if(windowSize < 600){
        if (navigation.className === "navbar__list") {
      navigation.className += " checked";
      ishamburgerChecked = true;
    } else {
      navigation.className = "navbar__list";
      ishamburgerChecked = false;
        }
    }    
}

// Scroll to Top using scrollTO event
function goUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

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
        if(section.getBoundingClientRect().y <= 250 && section.getBoundingClientRect().bottom >= 250 ){
            section.classList.add("active-class");

            // Add class 'activeLink' to your navigation items when a section is in the viewport  
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

/* If user scrolled under 1.5/of page it will shows button To UP*/
function ScrolledDown(){
    if(window.pageYOffset > (window.innerHeight / 1.5)){
        btnGoUp.style.display = "block";
    }
    else{
        btnGoUp.style.display = "none";
    }
}

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
        hamburger();
        
    })
})

// Set sections as active
document.addEventListener("scroll", ()=>{
    ScrolledDown();
    addActiveClass();

    if(window.pageYOffset > 175){
    menu.style.top = '0'
    clearTimeout(noScrolling)
    
    noScrolling = setTimeout(()=>{   
            if(ishamburgerChecked){
                return;
            }    
            menu.style.top = '-104px'
            navigation.classList.remove('checked')
        },1000)    
    }
    else{
        clearTimeout(noScrolling);
    }
    
});

/* show navItems when click hamburger icon on phones*/
icon.addEventListener('click', ()=>{
    hamburger();
});

/* scroll To top event */
btnGoUp.addEventListener("click", ()=>{
    goUp();
});


