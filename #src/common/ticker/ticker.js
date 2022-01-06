let tickers = document.querySelectorAll('.ticker');
if(tickers.length) {
    tickers.forEach(ticker => {
        let dataSlider = new Swiper(ticker, {
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 40,
            speed: 15000,
            loop: true,
        });
    })
}