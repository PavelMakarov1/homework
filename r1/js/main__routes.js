


const swiper2 = new Swiper('.routes__swiper', {
    // loop: true,
    // speed: 700,
    // slidesPerView: 1,

    slidesPerView: 1,
    // spaceBetween: 30,
    centeredSlides: true,
    // centeredSlides: true,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.routes__pagination',
        // direction: "vertical",
        clickable: true,

    },

    breakpoints: {
        1151: {
            // initialSlide: 1,


        },

        702: {
            centeredSlides: true,
            initialSlide: 1,
        },

        321: {
            slidesPerView: 1,
            // centeredSlides: true,
            initialSlide: 1,
        },
        
    }


});

const swiper3 = new Swiper('.routes__next-swiper', {
    // loop: true,
    // speed: 1000,
    // slidesPerView: 1,

    slidesPerView: 1,
    // spaceBetween: 30,
    centeredSlides: true,
    // centeredSlides: true,
    initialSlide: 3,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.routes__pagination',
        // direction: "vertical",
        clickable: true,

    },

    breakpoints: {
        1151: {
            initialSlide: 3,
        },

        702: {
            centeredSlides: true,
            initialSlide: 1,
        },

        321: {
            initialSlide: 1
        },
        
    }



});