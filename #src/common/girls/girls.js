let girls = document.querySelector('.girls');
if (girls) {

    let dataSlider = new Swiper(girls.querySelector('.swiper-container'), {
        speed: 800,
        watchOverflow: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: girls.querySelector('.slider-button.next'),
            prevEl: girls.querySelector('.slider-button.prev'),
        },
        breakpoints: {
        	320: {
                slidesPerView: 1,
                spaceBetween: 0,
        	},
        	992: {
                slidesPerView: 1,
                spaceBetween: 40,
        	},
        },
    });
}