//////////// header nav ////////////

const menuItems = document.querySelectorAll('.header_nav ul li');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(a=>a.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header_nav ul li a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === id) {
                        link.parentElement.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
        observer.observe(section);
    });
});

////////intro////////////
const introBoxes = document.querySelectorAll('.ani_box');

function showBox (a){
    const box = a.getBoundingClientRect();

    if( box.top < 65 * window.innerHeight / 100 ){
        a.classList.add('ani_box_show');
    }else{
        a.classList.remove('ani_box_show');
    }
};


function handleScroll() {
    introBoxes.forEach(a => showBox(a));
}

let animationFrameId;

window.addEventListener('scroll', () => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(handleScroll);
});

handleScroll();

//////////////////////intro2////////////////////

let aniText = document.querySelectorAll('.ani_text');
const it1 = document.querySelector('.it1');
const it2 = document.querySelector('.it2');



function updateOpacity() {
    aniText.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        const elementCenter = elementTop + (elementHeight / 2);
        const viewportCenter = window.scrollY + (window.innerHeight / 2);

        const distanceFromViewportCenter = Math.abs(elementCenter - viewportCenter);
        const distanceRatio = distanceFromViewportCenter / (window.innerHeight / 4);
        const opacity = 1 - Math.min(Math.max(distanceRatio, 0), 0.85);

        
        element.style.opacity = opacity;

    });
}

function updateClass() {
    const viewportCenter = window.scrollY + (window.innerHeight / 2);

    const elementTop1 = it1.getBoundingClientRect().top + window.pageYOffset;
    const elementCenter1 = elementTop1 + (it1.offsetHeight / 2);

    const elementTop2 = it2.getBoundingClientRect().top + window.pageYOffset;
    const elementCenter2 = elementTop2 + (it2.offsetHeight / 2);

    const distanceFromViewportCenter1 = viewportCenter - elementCenter1 ;
        const distanceRatio1 = distanceFromViewportCenter1 / (window.innerHeight / 4);
        const opacity1 = 1 - Math.min(Math.max(distanceRatio1, 0), 0.85);

        const distanceFromViewportCenter2 = elementCenter2 - viewportCenter  ;
        const distanceRatio2 = distanceFromViewportCenter2 / (window.innerHeight / 4);
        const opacity2 = 1 - Math.min(Math.max(distanceRatio2, 0), 0.85);

        it1.style.opacity = opacity1;
        it2.style.opacity = opacity2;

    
}





window.addEventListener('scroll', updateOpacity);
updateOpacity();

window.addEventListener('scroll', updateClass);
updateClass();


///////////////////stacks////////////////


const stacksIcon = document.querySelectorAll('.stacks_icon_img');
const stacksContent = document.querySelector('.stacks_content p');
const stacksContentImg = document.querySelector('.stacks_content_icon img');
const stacksContentIcon = document.querySelector('.stacks_content_icon');


stacksIcon.forEach(function(icon){
    icon.addEventListener('mouseover', function(){
        let content = icon.lastElementChild.textContent;
        let img = icon.querySelector('img').src;

        stacksContent.innerHTML = content;
        stacksContent.style.opacity = 1;
        stacksContentImg.src = img;
        stacksContentIcon.style.transform = 'translateX(-50%)';
    });
});

stacksIcon.forEach(function(icon){
    icon.addEventListener('mouseleave', function(){

        stacksContent.style.opacity = 0;
        stacksContentIcon.style.transform = 'translate(-50%, 250%)';
    })
})


///////////////////////// scrollbar  //////////////////



