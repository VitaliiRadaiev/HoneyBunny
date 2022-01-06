let girls = document.querySelector('.girls');
if (girls) {

    let dataSlider = new Swiper(girls.querySelector('.swiper-container'), {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        watchOverflow: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: girls.querySelector('.slider-button.next'),
            prevEl: girls.querySelector('.slider-button.prev'),
        },
        breakpoints: {
        	320: {
                slidesPerView: 'auto',
                spaceBetween: 0,
        	},
        	992: {
                slidesPerView: 'auto',
                spaceBetween: 40,
        	},
        },
    });
}