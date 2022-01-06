let workWithUsSlider = document.querySelector('.work-whith-us__slider .swiper-container');
if(workWithUsSlider) {
    let dataSlider = new Swiper(workWithUsSlider, {
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
    });
    
}