const menuBtn = document.querySelector('.toggle-menu');
const menuCloseBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.loopstudio-mobile-menu');

menuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('open');
    mobileMenu.classList.remove('close');
})

menuCloseBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('close');
})

const navItems = document.querySelectorAll('.loopstudio-nav-item');
const hoverLine = document.querySelector('.hover-line');

navItems.forEach(item => {
    item.addEventListener('mouseover', (e)=>{
        hoverLine.style.display = 'block';
        hoverLine.style.width = `${item.offsetWidth}px`;
        hoverLine.style.transform = `translateX(${item.offsetLeft}px)`;
    })
    item.addEventListener('mouseout', (e)=>{
        hoverLine.style.display = 'none';
        hoverLine.style.transform = `translateX(0)`;
    })
});


const footerItems = document.querySelectorAll('.footer-link');
const footerLine = document.querySelector('.footer-line');

footerItems.forEach(item => {
    item.addEventListener('mouseover', (e)=>{
        footerLine.style.display = 'block';
        footerLine.style.width = `${item.offsetWidth}px`;
        footerLine.style.transform = `translateX(${item.offsetLeft}px)`;
    })
    item.addEventListener('mouseout', (e)=>{
        footerLine.style.display = 'none';
        footerLine.style.transform = `translateX(0)`;
    })
});