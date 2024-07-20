

const titles = document.querySelectorAll('.questions__accordion-content');
const contents = document.querySelectorAll('.questions__accordion-text');
const border = document.querySelectorAll('.questions__accordion-inner');

titles[0].classList.add('active');
contents[0].classList.add('active');
contents[0].style.maxHeight = contents[0].scrollHeight + 'px';
border[0].classList.add('active');

titles.forEach((item, index) => {
    item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
            item.closest('.questions__accordion-inner').classList.remove('active');
        } else {
            contents.forEach((element, i) => {
                if (i !== index) {
                    element.classList.remove('active');
                    element.style.maxHeight = 0;
                    border[i].classList.remove('active');
                }
            });

            titles.forEach((element, i) => {
                if (i !== index) {
                    element.classList.remove('active');
                }
            });

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
            item.closest('.questions__accordion-inner').classList.add('active');
        }
    });
});