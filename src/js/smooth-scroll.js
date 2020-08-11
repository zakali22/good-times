const navLinks = document.querySelectorAll('.header__nav--links a')
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const linkText = link.getAttribute('href')
        document.querySelector(`${linkText}`).scrollIntoView({behavior: 'smooth'})
    })
})