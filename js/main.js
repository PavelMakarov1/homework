(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        // if (burgerIcon) {
        //     e.preventDefault()

        // }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')

        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // (function() { - самовызывающая функция. Отличается от той
    // которая была в JS что все что происходит в ней не выносится
    // в глобальную область.

    // document.addEventListener('click', burgerInit) - дабовляем действие(клик)
    // для  "burgerInit". По клику на документ будет происходить эта функция

    // function burgerInit(e) { - дабовляем в функцию burgerInit и даем ему
    // сокращенное название(е)

    // const burgerIcon = e.target.closest('.burger-icon') - создаем переменную
    // что бы вызвать класс из HTML.
    // closest - Метод, который возвращает ближайший родительский элемент 
    // или его самого.

    // if (!burgerIcon && !burgerNavLink) return - если мы не нажимаем на один
    // из элементов в скобках то функция полностью прекрощается

    // (!document.body.classList.contains('body--opened-menu') - Проверить есть ли
    // класс у 'body' - ('body--opened-menu') есть ли нет то значение (true) все
    // что ниже сработает. ! - дабовляет значение true.

    // document.body.classList.add('body--opened-menu') - дабавляем класс в HTML
    // "body" - 'body--opened-menu'(по умолчанию его не будет)

    // document.body.classList.remove('body--opened-menu') - если класс есть то
    // при нажатии на него мы его удаляем(закрываем окно)

    // if (burgerIcon) {
    // e.preventDefault() - отменить дефолтное поведение. То есть при нажатии на
    // крестик он ведет себя как ссылка и возращает нас на начало странице,
    // мы отменяем это.

    // if (document.documentElement.clientWidth > 900) return - До этой записи
    // клик который мы задавали срабатывал на все боди при любом размере экрана
    // после этой функции клик будет срабатывать только при ширене экрана
    // меньше 900px.



    // Модалка

    /*=======================================================*/

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    /* const modal = document.querySelector('.modal') - объявляем переменную из
HTML *modal* и даем ей название *modal*.

const modalButton = document.querySelector('.about__img-button') - объявляем 
переменную из HTML *about__img-button*(кнопка при нажатии на которую появляется
модальное окно) и даем ей название *modalButton*.\

modalButton.addEventListener('click', openModal) - навешиваем на modalButton 
слушатель событий 'click' и выполняем вот эту функцию openModal когда
кто то кликает по кнопке.

modal.addEventListener('click', closeModal) - навешивает слушатель событий
на весь элемент modal(в HTML).

function openModal(e) { - вызов функции.
e.preventDefault() - отменяется стандартное поведение.
document.body.classList.toggle('body--opened-modal') - на body навешиваем
класс 'body--opened-modal', то есть модальное окно появляется.

function closeModal(e) { - вызываем функцию.
e.preventDefault() - отменяется стандартное поведение.
const target = e.target - обЪявляем в переменную target сам элемент на который
мы кликнули внутри модального окна(e.target).

if - запускаем условное ветвление.
(target.closest('.modal__cancel') - первое условие, функция ниже сработает
если мы нажмем на '.modal__cancel'(крестик).
или
target.classList.contains('modal') - второе условие, функция ниже сработает если
мы нажмем на 'modal'(область за границами модального окна)

document.body.classList.remove('body--opened-modal') - функция которая будет
работать при выполнение двух выше перечисленных условий(будет закрывать 
модальное окно).*/

    // ======================================================================

    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }

        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

    /*const tabControls = document.querySelector('.tab__controls') -
вызываем селектор из HTML.

tabControls.addEventListener('click', toggleTab) - навешиваем слушатель
событий "клик" и "переключатель вкладку(toggleTab)".

function toggleTab(e) { -создаем функцию для переключателя
вкладки.
const tabControl = e.target.closest('.tab__controls-link') - 
проверяем есть ли у "e.target" родитель с классом - 
'.tab__controls-link'.
И если он есть то он записывается в переменную e.target.

if (!tabControl) return - если у нас нет этого элемента
то функцию мы прекращаем.

Если этот элемент есть то функция продолжается ниже.

e.preventDefault() - отменяем дефолтное поведение.

const tabContentId = tabControl.getAttribute('href') - 
получаем значение атрибута "href" и записываем его в 
переменную "tabContentId". 

document.querySelector(tabContentId).classList.add('tabs-content--show') - 
выбрать элемент из "tabs-content".
document.querySelector('.tab-content--show').classList.remove('tab-content--show') - 
Находим Элемент '.tab-content--show' и удаляем его что бы окна табов
не выстраивались в столбик а менялись на одном месте.

document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active') - добавляем
        модификатор(изменение цвета при наведении на табы и во второй строке
        делаем что бы он не повторялся(был только на том табе на который
        мы нажали.
        
        f (tabControl.classList.contains('tab-controls__link--active')) return - 
        (проверка)Если tabControl содержит в себе класс - 
        'tab-controls__link--active' то мы этот класс отменяем, проверка
        дальше не пойдет.*/

    // ======================================================================================

    // Аккардион

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

    /*accordionLists - записываем сюда все '.accordion-list' что есть и будут на сайте.
    
    accordionLists.forEach(el => { - по каждому из них пробегаемся.
    el.addEventListener('click', (e) => { - навешиваем событие клика.
    
    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return - если мы кликаем на кнопку то код продолжаем и 
    выполняем следующие действие.
    
    const accordionItem = accordionControl.parentElement; - записываем в переменную
    accordionItem родителя accordionControl(его родителя accordion-list__control).
    
    const accordionContent = accordionControl.nextElementSibling; - Записываем следующий элемент
    в HTML после accordionControl(его родителя accordion-list__control).
    
    accordionItem.classList.toggle('accordion-list__item--opened'); - выполняем функцию 
    для accordionItem мы навешиваем класс ('accordion-list__item--opened').
    
    if (accordionItem.classList.contains('accordion-list__item--opened')) - делаем проверку, если
    accordionItem - находится под влиянием это модификатора accordion-list__item--opened - 
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; - (продолжение с верхней строки)
    тогда мы прописываем стиль для контента, его максимальную высоту мы увеличиваем(accordionContent.scrollHeight
    - здесь мы узнаем высоту нашего элемента как если бы он не был скрыт сейчас(его правдивая высота)) 
    } else {
                accordionContent.style.maxHeight = null;
            } - иначе если клика не было то мы это свойство(maxHeight) обнуляем*/

    /*document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px'
    Это отдельная строчка, нужна для того что бы при входе на сайт один аккардион был 
    открыт. */

    /*
    Добавляем еще одну функцию при открытии одного аккардиона если открыт второй то
    он будет закрываться.
    
    const accordionList = e.currentTarget - получем тот элемент
    на который мы навесили обработчик событий. 
    
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened') - 
    ищем открытые айтомы внутри accordionList на одну из вкладок которого мы кликнул.
    
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__control') -
    Добавляем.
    
    if (!accordionControl && accordionItem != accordionOpenedItem) return - если 
    accordionControl этот элемент существует и при этом accordionItem этот элемент и
    вот этот элемент accordionOpenedItem разные только тогда у нас срабатывает вот 
    этот скрипт accordionOpenedContent.style.maxHeight = null;.
        
    accordionOpenedItem.classList.remove('accordion-list__item--opened');
    - здесь мы закрываем(отбираем класс) если этот айтем существует что бы
вторая вкладка закрывалась.

accordionOpenedContent.style.maxHeight = null; - закрываем открытую вторую вкладку.*/


    // Слайдер-галерея

    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });

    // Слайдер-отзывы

    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.4,
            },
            1201: {
                slidesPerView: 2.1,
            },
        }


    });

// Маска для телефона

    const telInputs = document.querySelectorAll('input[type ="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)



})()

