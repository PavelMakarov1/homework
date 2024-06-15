// Ошибка в коде: 
// - В строке const tabControls = document.querySelector('.tab-controls') ошибка в выборе селектора. Необходимо использовать .tab-controls__link вместо .tab-controls. 

// Полное исправление:
// const tabControls = document.querySelector('.tab-controls__link')

// tabControls.addEventListener('click', toggleTab)

// function toggleTab(e) {

//     const tabControl = e.target.closest('.tab-controls__link')

//     if (!tabControl) return
//     e.preventDefault()
//     if (tabControl.classList.contains('tab-controls__link--active')) return


//     const tabContentID = tabControl.getAttribute('href')

//     document.querySelector('.tab-content--show').classList.remove('tab-content--show')
//     document.querySelector(tabContentID).classList.add('tab-content--show')

//     document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
//     tabControl.classList.add('tab-controls__link--active')
// }