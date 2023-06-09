class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progresBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
        this.mouseDown = false;
    }

    init() {
        //start plugin
        this.events();
    }

    events() {
        // All events
        // this.video.addEventListener('click', this.togglePlay.bind(this));
        this.video.addEventListener('click', e => this.togglePlay(e));
        this.video.addEventListener('timeupdate', e => this.handleProgress(e));
        this.toggle.addEventListener('click', e => this.togglePlay(e));
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
        this.progress.addEventListener('click', e => this.scrub(e));
        this.progress.addEventListener('mousemove', e => this.mouseDown && this.scrub(e));
        this.progress.addEventListener('mousedown', () => this.mouseDown = true);
        this.progress.addEventListener('mouseup', () => this.mouseDown = false);

    }

    togglePlay(e) {
        // Play/pause video
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '||' : '▶';
        this.video[method]();
    }

    handleRangeUpdate(e) {
        // this.video['volume'] = e.target.value
        // this.video['playBackRate'] = e.target.value
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        // Time skip
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }

    handleProgress(e) {
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.progresBar.style.flexBasis = `${percent}%`;
    }

    scrub(e) {
        const time = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
        this.video.currentTime = time;
    }


}

const video = new VideoPlayer();
video.init();