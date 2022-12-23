const swiper = new Swiper('.gallery-sliders', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    spaceBetween: 60,
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
});

const swiperTwo = new Swiper('.sliders', {
    loop: true,
    pagination: {
      el: '.sliders-pagination',
    },
});
const swiperThree = new Swiper('.towar-imgs-slider', {
    loop: true,
    pagination: {
        el: '.towar-pagination',
        clickable: true,
        type : 'custom',
        bulletClass:'towar_pagination_img'
      },
});


window.addEventListener('click', function(event) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    let body = document.body;
    if (event.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('overflow')
    } else if (menu.closest('.active') && !event.target.closest('.menu')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('overflow')
    }
    if (event.target.closest('.advantages-arrow')) {
        let arrow = event.target;
        let home = event.target.closest('.advantages-block');
        let item = home.querySelector('.advantages-none');
        arrow.classList.toggle('arrow-open')
        item.classList.toggle('advantages-open');
    }
    if (event.target.closest('.thakns-open')) {
        let thanks = document.querySelector('.thanks');
        thanks.classList.toggle('thanks-active')
        body.classList.toggle('overflow')
    }
})