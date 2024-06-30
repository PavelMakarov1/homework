



const swiper = new Swiper('.header__swiper', {
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.header__content-slider',
        direction: "vertical",
        clickable: true,

    },

    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },


    // autoplay: {
    //     delay: 7000,
    //     stopOnLastSlide: 'fouls',
    //     disableOnInteraction: 'true',
    // },

});



(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger__icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')

        }



    }

})()