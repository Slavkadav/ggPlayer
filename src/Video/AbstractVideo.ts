import {EventEmitter} from 'events';
/**
 * Created by ggdev on 24.04.17.
 */
export abstract class AbstractVideo extends EventEmitter {
    videoElement: HTMLVideoElement;
    parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        super();
        this.videoElement = document.createElement('video');
        this.parentElement = parentElement;
        parentElement.appendChild(this.videoElement);
        this.videoElement.addEventListener('timeupdate', () => this.emit('videoUpdateTime'));
        this.videoElement.addEventListener('ended', () => this.emit('videoEnd'));
    }

    get videoCurrentTime(): number {
        return this.videoElement.currentTime * (100 / this.videoElement.duration);
    }

    playVideo(): void {
        this.videoElement.play();
    }

    pauseVideo(): void {
        this.videoElement.pause();
    }

    muteVideo(): void {
        this.videoElement.muted = !this.videoElement.muted;
    }

    setFullscreen(): void {
        console.log('enter fullscreen');
        this.parentElement.webkitRequestFullScreen();
        this.parentElement.style.width = '100%';
        this.parentElement.style.height = '100%';
        this.videoElement.style.width = '100%';
        this.videoElement.style.height = '95%';

    }

    videoRewind(value: string): void {
        this.videoElement.currentTime = this.videoElement.duration * (+value / 100);
    }

    set volume(value: number) {
        this.videoElement.volume = value;
    }

}