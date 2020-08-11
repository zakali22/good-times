const body = document.querySelector('body');
let progressEl;


function addProgressIndicator(){
    const progressElement = document.createElement('DIV')
    progressElement.classList.add('progress-indicator');
    progressEl = progressElement;
    body.prepend(progressElement);
    runProgressIndicator();
} 

function runProgressIndicator(){
    const pageHeight = body.getBoundingClientRect().height;
    const browserHeight = window.innerHeight;
    const scrollableHeight = pageHeight - browserHeight;
    const pixelScrolled = window.pageYOffset;

    const percentScrolled = (pixelScrolled / scrollableHeight) * 100;

    progressEl.style.height =  `${percentScrolled}%`;
    changeProgressIndicatorColor()
}

function changeProgressIndicatorColor(){
    const pixelScrolled = window.pageYOffset;
    const sections = body.querySelectorAll('section')

    // Loop over sections and grab attributes
    sections.forEach(section => {
        const sectionAttr = section.getAttribute('data-indicator-color')
        if(pixelScrolled > section.offsetTop){
            progressEl.style.backgroundColor = sectionAttr
        }
    })
}

// Run the progressIndicator on page scroll
document.addEventListener('scroll', () => {
    runProgressIndicator();
})

// Run the progressIndicator on window resize
window.addEventListener('resize', () => {
    runProgressIndicator()
})

// Add the progressIndicator element to the body on window load
window.addEventListener('DOMContentLoaded', () => {
    addProgressIndicator();
})