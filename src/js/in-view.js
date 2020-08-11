const animatedTags = document.querySelectorAll('h1, h2, .h1, p, .btn, figure, .register__container, .schedule__listing') // Add any element you want to fade in
animatedTags.forEach(tag => {
    tag.style.opacity = 0;
})

function fadeIn(){ // Method 1
    let delayTiming = 0.16;
    animatedTags.forEach(tag => {
        const browserHeight = window.innerHeight;
        const topOfTag = tag.getBoundingClientRect().top
        const bottomOfTag = tag.getBoundingClientRect().bottom
        if(topOfTag < browserHeight && bottomOfTag > 100){ // We are in view
            tag.style.animation = `fadeIn 1s .25s both`;
            /* Creates a staggering animation effect
            tag.style.animation = `fadeIn 1s ${delayTiming}s both`;
            delayTiming = delayTiming + 0.1 */
        } else { // not in view
            tag.style.opacity = 0;
            tag.style.animation = '';
        }
    })
}

// Method 2 is to use intersectional observer
// Method 3 is to use scrollmagic

fadeIn();

// Run on scroll
document.addEventListener('scroll', () => {
    fadeIn();
})

// Run on resize
window.addEventListener('resize', () => {
    fadeIn();
})
