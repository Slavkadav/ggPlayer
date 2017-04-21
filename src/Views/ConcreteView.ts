import {AbstractView} from "./AbstractView";

export class ConcreteView extends AbstractView {

    playButton: HTMLButtonElement ;
    pauseButton: HTMLButtonElement;
    muteButton: HTMLButtonElement;

    protected template: string =
        `<div id="controls">
            <button type="button" id="play">Play</button>
            <button type="button" id="pause">Pause</button>
            <button type="button" id="mute">Mute</button>
         </div>`;


    constructor(placeHolder:HTMLElement) {
        super(placeHolder);
        this.placeHolder.insertAdjacentHTML('afterBegin', this.template);
        this.init();
    }


    init(): void {

        this.playButton = <HTMLButtonElement>document.getElementById('play');
        this.playButton.addEventListener('click', () => this.playClicked());

        this.pauseButton = <HTMLButtonElement>document.getElementById('pause');
        this.pauseButton.addEventListener('click', () => this.pauseClicked());

        this.muteButton = <HTMLButtonElement>document.getElementById('mute');
        this.muteButton.addEventListener('click', () => this.muteClicked());

    }

    pauseClicked(): void {
        this.emit('playerPause');
        this.pauseButton.disabled = true;
        this.playButton.disabled = false;
    }

    playClicked(): void {
        this.emit('playerPlay');
        this.playButton.disabled = true;
        this.pauseButton.disabled = false;
    }

    muteClicked(): void {
        this.emit('playerMute');
        if(this.muteButton.textContent === "Mute")
            this.muteButton.textContent = "Unmute";
        else {
            this.muteButton.textContent = "Mute";
        }
    }

}