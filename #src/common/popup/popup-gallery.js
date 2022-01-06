{
    let popupGalleryAll = document.querySelectorAll('.popup-gallery');
    if (popupGalleryAll.length) {
        popupGalleryAll.forEach(gallery => {
            let thumb;
            let mySwiper;
            let slider = gallery.querySelector('.popup-gallery__slider');

            thumb = new Swiper(gallery.querySelector('.popup-gallery__thumb .swiper-container'), {
                observer: true,
                observeParents: true,
                speed: 800,
                watchOverflow: true,
                preloadImages: false,
                freeMode: true,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                lazy: {
                    loadPrevNext: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                },
            });




            mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
                effect: 'fade',
                observer: true,
                observeParents: true,
                speed: 800,
                preloadImages: false,
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,
                lazy: {
                    loadPrevNext: true,
                },
                thumbs: {
                    swiper: thumb,
                },
                navigation: {
                    nextEl: gallery.querySelector('.slider-btn-next'),
                    prevEl: gallery.querySelector('.slider-btn-prev'),
                },
            });




        })
    }
}