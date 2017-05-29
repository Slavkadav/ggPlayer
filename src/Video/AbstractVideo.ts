import {EventEmitter} from 'events';
/**
 * Created by ggdev on 24.04.17.
 */
export abstract class AbstractVideo extends EventEmitter {
    videoElement: HTMLVideoElement;
    parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        super();
        this.videoElement = document.getElementsByTagName('video')[0];

        // TODO: Бинды событий вынеси в отдельную функцию
        this.videoElement.addEventListener('timeupdate', () => this.emit('videoUpdateTime')); // TODO: В одном месте ты используешь строковое значение, в других - static readonly
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

        // TODO: При переходе в фулскрин не нужно менять стили, это делается просто выводом нужного элемента в RequestFullScreen
        // TODO: У тебя тут только webkit, как насчет других браузеров?

        this.parentElement.webkitRequestFullScreen();
        this.parentElement.style.width = '100%';
        this.parentElement.style.height = '100%';
        this.videoElement.style.width = '100%';
        this.videoElement.style.height = '95%';

    }

    // TODO: Rewind - это перемотка назад. Переход в произвольное место - это seek
    videoRewind(value: string): void {
        this.videoElement.currentTime = this.videoElement.duration * (+value / 100);
    }

    set volume(value: number) {
        this.videoElement.volume = value;
    }

    set quality(value: number) {
    }

    get quality(): number {
        return null;
    }

    get videoQualityLevels(): string[] {
        return null;
    }

}