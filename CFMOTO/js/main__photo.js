

const swiper4 = new Swiper('.main__photo-swiper', {
    speed: 1000,
    spaceBetween: 1,
    slidesPerView: 3,
    initialSlide: 2,
    centeredSlides: true,
    
    
    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.main__photo-pagination',
        direction: "horizontal",
        clickable: true,

    },


    breakpoints: {

        1251: {
            slidesPerView: 3,
            initialSlide: 2,
            centeredSlides: true,
        },

        805: {
            slidesPerView: 2,
            initialSlide: 2,
            centeredSlides: true,
        },

        561: {
            slidesPerView: 1,
            initialSlide: 0,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            initialSlide: 0,
            spaceBetween: 15,
        },
    },

});