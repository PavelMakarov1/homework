



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


    autoplay: {
        delay: 7000,
        stopOnLastSlide: 'fouls',
        disableOnInteraction: 'true',
    },

});


(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger__icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1200) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
            

        }

    }

})()

const modal = document.querySelector('.header__top-modal')
const modalButton = document.querySelector('.js-header-modal')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('header--opened-modal')
}

function closeModal(e) {
    e.preventDefault()
    const target = e.target

    if (target.closest('.top__modal-cancel') || target.classList.contains('header__top-modal')) {
        document.body.classList.remove('header--opened-modal')
    }
}

