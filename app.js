const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const unorderList = document.querySelector('ul');

// build the nav
sections.forEach(section => {
    
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.classList.add('menu__link');
    
    let dataNav = section.getAttribute('data-nav');
    const textNode = document.createTextNode(dataNav);
    newLink.appendChild(textNode);
    newLi.appendChild(newLink);
    
    newLink.addEventListener('click', function(){
        section.scrollIntoView({'behavior':'smooth'});
    })
    
    fragment.appendChild(newLi);
})
unorderList.appendChild(fragment);

// Add class 'active' to section and its link when near top of viewport
window.addEventListener('scroll', function(){
    sections.forEach((section) => {
        const position = section.getBoundingClientRect();
        if (position.top >= 0 && position.bottom < window.innerHeight+20){
            section.classList.add('your-active-class');
            
            let links = document.querySelectorAll('a');
            let dataNav = section.getAttribute('data-nav');
            links.forEach((link) => {
                if(link.textContent == dataNav){
                    link.classList.add('active');
                    link.style.color = 'white'; 
                }})
            
        }else{
             section.classList.remove('your-active-class');
            
            let links = document.querySelectorAll('a');
            let dataNav = section.getAttribute('data-nav');
            links.forEach((link) => {
                if(link.textContent == dataNav){
                    link.classList.remove('active');
                    link.style.color = 'black'; 
                }})
        }
    })
})