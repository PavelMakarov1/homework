


const swiper2 = new Swiper('.routes__swiper', {

    slidesPerView: 1,
    centeredSlides: true,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.routes__pagination',
        clickable: true,

    },

    breakpoints: {
        1151: {
        },

        702: {
            centeredSlides: true,
            initialSlide: 1,
        },

        321: {
            slidesPerView: 1,
            initialSlide: 1,
        },

    }


});

const swiper3 = new Swiper('.routes__next-swiper', {

    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 3,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.routes__pagination',
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

$(document).ready(function () {

    $('.prev').on("click", function () {

        var prev = $(this).closest('.routes__modal-number').find('input').val()

        if (prev == 1) {
            $(this).closest('.routes__modal-number').find('input').val('1')

        } else {
            var prevVal = prev - 1

            $(this).closest('.routes__modal-number').find('input').val(prevVal)
        }
    })


    $('.next').on("click", function () {

        var next = $(this).closest('.routes__modal-number').find('input').val()

        if (next == 30) {
            $(this).closest('.routes__modal-number').find('input').val('30')

        } else {
            var nextVal = ++next

            $(this).closest('.routes__modal-number').find('input').val(nextVal)
        }
    })
})


window.addEventListener('click', e => {
    if (
        !e.target ||
        !e.target.closest('.bike__modal-close') &&
        !e.target.matches('.bike__modal-info')
    ) {

        document.querySelectorAll('[data-popup]').forEach(node => {
            node.classList.remove('bike--opened-modal');
        });
        return;
    }

    e.target.closest('[data-popup]').classList.remove('bike--opened-modal');
});

window.addEventListener('click', e => {
    if (!e.target.closest('[data-popup-id]')) {
        return;
    }

    const popupId = e.target.closest('[data-popup-id]').dataset.popupId;

    document.querySelectorAll(`[data-popup="${popupId}"]`).forEach(node => {
        node.classList.add('bike--opened-modal');
    });
});



const linkArray = document.querySelectorAll('.js-routes-modal-btn')
const routeOverlay = document.querySelector('.js-route-overlay')
const routeCancel = document.querySelectorAll('.route__modal-cancel')

linkArray.forEach(function (item) {

    item.addEventListener('click', function (event) {
        event.preventDefault()
        const modalRoutesBtn = this.getAttribute('data-modal')
        const modalRoutes = document.querySelector('.js-route-modal[data-modal="' + modalRoutesBtn + '"]')

        modalRoutes.classList.add('route__modal-open')
        routeOverlay.classList.add('route__modal-open')
    })
})

routeCancel.forEach(function (item) {

    item.addEventListener('click', function () {

        const parent = this.parentNode
        parent.classList.remove('route__modal-open')
        routeOverlay.classList.remove('route__modal-open')
    })
})

routeOverlay.addEventListener('click', function () {
    const openModals = document.querySelectorAll('.route__modal-open')
    openModals.forEach(function (modal) {
        modal.classList.remove('route__modal-open')
    })
    routeOverlay.classList.remove('route__modal-open')
})




const modalBrambleBtn = document.querySelectorAll('.js-bramble-modal');
const modalBramble = document.querySelector('.header__top-modal')

modalBrambleBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalBramble.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle('header--opened-modal');
}

function closeModal(e) {
    e.preventDefault();
    const target = e.target;

    if (target.closest('.top__modal-cancel') || target.classList.contains('header__top-modal')) {
        document.body.classList.remove('header--opened-modal');
    }
}