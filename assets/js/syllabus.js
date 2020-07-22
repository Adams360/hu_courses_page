
var slider = tns({
    container: '.tabs__menu',
    items: 3,
    slideBy: 1,
    mouseDrag: true,
    loop: false,
    nav: false,
    controlsContainer: ".tabs__controls",
    controlsPosition: 'bottom',
    responsive: {
        576: {
            items: 5
        }
    }
});




function setupTabs() {

    const btns = document.querySelectorAll('.tabs__btn');

    btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const moduleNumber   = btn.dataset.forTab;
                const modulesContent = document.querySelectorAll('.tabs__content');
                const selectedContent = document.querySelector(`.tabs__content[data-tab="${moduleNumber}"]`);

               btns.forEach(btn => {
                   btn.classList.remove('tabs__btn--active');
               })

               modulesContent.forEach(content => {
                    content.classList.remove('tabs__content--active');
               });


               btn.classList.add('tabs__btn--active');

               selectedContent.classList.add('tabs__content--active');
           

            });
    });


};


document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
});








