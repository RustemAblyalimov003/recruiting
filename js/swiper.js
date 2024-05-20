document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper .swiper-button-next, .rec__other-swiper-circle-right',
                prevEl: '.swiper .swiper-button-prev, .rec__other-swiper-circle-left',
            },
        });
    let container = document.getElementById('toggleMe');
        
    const swiper2 = new Swiper('.swiper2', {
        loop: true,
        slidesPerView: 2,
        setWrapperSize: true,
        autoHeight: false,
        navigation: {
            nextEl: '.swiper2 .swiper-button-next, .rec__reviews-swiper-circle-right',
            prevEl: '.swiper2 .swiper-button-prev, .rec__reviews-swiper-circle-left',
        },
        breakpoints: {
            295: {
                slidesPerView: 1,
            },
            823: {
                slidesPerView: 2,
            },
        }
    });

});