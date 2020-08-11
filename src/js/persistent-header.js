const persistentHeader = document.querySelector('.header--desktop')
const heroHeader = document.querySelector('.hero__header')

function addContentWithinPersistentHeader(){

}

function revealPersistentHeader(){
    const topOfWindow = pageYOffset;
    const heroHeaderBottom = heroHeader.getBoundingClientRect().bottom;

    if(heroHeaderBottom < topOfWindow){
        persistentHeader.classList.add('is-visible')
    } else {
        persistentHeader.classList.remove('is-visible')
    }
}

// Run on scroll
document.addEventListener('scroll', () => {
    revealPersistentHeader();
})

// Run on resize
window.addEventListener('resize', () => {
    revealPersistentHeader()
})

window.addEventListener('DOMContentLoaded', () => {
    addContentWithinPersistentHeader();
})