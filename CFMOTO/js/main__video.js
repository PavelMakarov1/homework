let videoBtn = document.querySelector('.js-video-btn')
let videoText = document.querySelector('.js-inner-text')
video = document.querySelector('.js-video')



videoBtn.onclick = function () {
    video.play()
    this.classList.add('hide')
    videoText.classList.add('conceal')
}


video.onclick = function () {
    if (this.paused) {
        this.play()
    } else {
        this.pause()
    }
}

video.addEventListener('ended', videoHandler, false)

function videoHandler () {
    videoBtn.classList.remove('hide')
    videoText.classList.remove('conceal')
}
