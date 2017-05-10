import {AbstractView} from "./AbstractView";
import {PlayerEvents} from "../PlayerEvents";

export class ConcreteView extends AbstractView {

    fullscreen: HTMLButtonElement;

    protected htmlText: string =
        `<div id="controls">
            <input type="range" id="seekBar" value="0">
            <button type="button" id="play">Play</button>
            <button type="button" id="pause">Pause</button>
            <button type="button" id="mute">Mute</button>
            <button type="button" id="fullscreen">Fullscreen</button>
            <input type="range" id="volumeBar" value="100"/>
         </div>`;


    constructor(placeHolder: HTMLElement) {
        super(placeHolder);
        this.placeHolder.insertAdjacentHTML('beforeEnd', this.htmlText);
        this.init();
    }

    private init(): void {

        this.playButton = <HTMLButtonElement>document.getElementById('play');
        this.playButton.addEventListener('click', () => this.playClicked());

        this.pauseButton = <HTMLButtonElement>document.getElementById('pause');
        this.pauseButton.addEventListener('click', () => this.pauseClicked());

        this.muteButton = <HTMLButtonElement>document.getElementById('mute');
        this.muteButton.addEventListener('click', () => this.muteClicked());

        this.seekBar = <HTMLInputElement>document.getElementById('seekBar');

        this.seekBar.addEventListener('change', () => this.seekBarChange());

        this.volumeBar = <HTMLInputElement>document.getElementById('volumeBar');
        this.volumeBar.min = '0';
        this.volumeBar.max = '1';
        this.volumeBar.step = '0.01';
        this.volumeBar.addEventListener('change', () => this.emit('volumeChange'));

        this.fullscreen = <HTMLButtonElement>document.getElementById('fullscreen');
        this.fullscreen.addEventListener('click', () => this.fullscreenSet());

    }

    private pauseClicked(): void {
        this.emit(PlayerEvents.pause);
        this.pauseButton.disabled = true;
        this.playButton.disabled = false;
    }

    private fullscreenSet(): void {
        console.log('fullscreenPress');
        document.getElementById('controls').style.width = '100%';
        this.emit(PlayerEvents.fullscreenToggle);
    }

    private playClicked(): void {
        this.emit(PlayerEvents.play);
        this.playButton.disabled = true;
        this.pauseButton.disabled = false;
    }

    private muteClicked(): void {
        this.emit(PlayerEvents.mute);
        if (this.muteButton.textContent === "Mute")
            this.muteButton.textContent = "Unmute";
        else {
            this.muteButton.textContent = "Mute";
        }
    }

    private seekBarChange(): void {
        this.emit(PlayerEvents.seekBarChange);
    }

    get seekBarValue(): string {
        return this.seekBar.value;
    }

    set seekBarValue(value: string) {
        this.seekBar.value = value;
    }

    get volumeValue(): number {
        return +this.volumeBar.value;
    }

    videoEnd(): void {
        this.playButton.disabled = false;
        this.pauseButton.disabled = true;
        this.playButton.textContent = 'Repeat';
    }
}