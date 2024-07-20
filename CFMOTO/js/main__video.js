

let videoBtn = document.querySelector('.js-video-btn');
let videoText = document.querySelector('.js-inner-text');
let video = document.querySelector('.js-video');

videoBtn.onclick = function () {
    video.play();
    this.classList.add('hide');
    videoText.classList.add('conceal');
};

video.onclick = function () {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
};

video.addEventListener('play', function() {
    videoBtn.classList.add('hide');
});

video.addEventListener('pause', function() {
    videoBtn.classList.remove('hide');
});