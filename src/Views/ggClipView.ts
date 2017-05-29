import {AbstractView} from "./AbstractView";
import {PlayerEvents} from "../PlayerEvents";
/**
 * Created by ggdev on 15.05.17.
 */
export class ggClipView extends AbstractView {

    seekBar: HTMLElement;
    playButton: HTMLElement;
    muteButton: HTMLElement;
    volumeBar: HTMLElement;
    fullscreenButton: HTMLElement;
    volume: number;

    constructor(placeHolder: HTMLElement) {
        super(placeHolder);
        console.log('GGClip Created');

        this.playButton = <HTMLElement>document.getElementsByClassName('play-pause').item(0);
        this.playButton.addEventListener('click', () => this.playClicked());

        this.volumeBar = <HTMLElement>document.getElementsByClassName('sound-block').item(0);
        this.volumeBar.onmousedown = (e: any) => this.moveVolume(e);
        this.volumeBar.ondragstart = () => false;

        this.fullscreenButton = <HTMLElement>document.getElementsByClassName('full-exitfull').item(0);
        this.fullscreenButton.addEventListener('click', () => {
            this.emit(PlayerEvents.fullscreenToggle);
            this.fullscreenButton.classList.toggle('active')
        });

        this.muteButton = <HTMLElement>document.getElementsByClassName('mute-unmute').item(0);
        this.muteButton.addEventListener('click', () => this.mutePressed());
    }

    videoEnd(): void {
    }

    get seekBarValue(): string {
        return "none";
    }

    get volumeValue(): number {
        return this.volume;
    }

    private mutePressed() {
        this.emit(PlayerEvents.mute);
        this.muteButton.classList.toggle('mute');
    }

    private playClicked(): void {
        if (this.playButton.classList.contains('active'))
            this.emit(PlayerEvents.pause);
        else this.emit(PlayerEvents.play);

        this.playButton.classList.toggle('active');
    }


    private moveVolume(e: any): void {
        let sliderRange = <HTMLElement> this.volumeBar.getElementsByClassName('slider-range').item(0);
        let handle = <HTMLElement>this.volumeBar.getElementsByClassName('handle').item(0);

        let rect = this.volumeBar.getElementsByClassName('progress-sound')[0].getBoundingClientRect();

        let moveAt = (e: any) => {
            let handleLeft = (e.pageX - rect.left - handle.offsetWidth / 2);
            let sliderRight = (e.pageX - rect.left - handle.offsetWidth / 2);
            if (handleLeft < 0) {
                handleLeft = 0;
                sliderRight = 0;
            }
            if (sliderRight >= rect.width - handle.offsetWidth) {
                sliderRight = rect.width;

            }
            if (handleLeft >= rect.width - handle.offsetWidth) {
                handleLeft = rect.width;
            }
            if (handleLeft < rect.width / 2) {
                this.muteButton.classList.add('half');
            }
            if (handleLeft > rect.width / 2) {
                this.muteButton.classList.remove('half');
            }
            this.volume = handleLeft / rect.width;
            handle.style.left = handleLeft / rect.width * 100 + '%';
            sliderRange.style.width = sliderRight / rect.width * 100 + '%';

            this.emit(PlayerEvents.volumeChange);
        };
        moveAt(e);
        this.volumeBar.addEventListener('mousemove', (e: any) => moveAt(e));

        document.addEventListener('mouseup', (e: any) => {
                this.volumeBar.onmousemove = null;
                document.onmouseup = null;
            }
        )

    }
}