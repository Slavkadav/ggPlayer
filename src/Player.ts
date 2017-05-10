import {AbstractView} from "./Views/AbstractView"
import {AbstractVideo} from "./Video/AbstractVideo";
import {VideoFactory} from "./Video/VideoFactory";
import {PlayerEvents} from "./PlayerEvents";

export class Player {

    private video: AbstractVideo;
    private view: AbstractView;

    constructor(videoURL: string, parent: HTMLElement) {
        this.video = new VideoFactory().createVideo(videoURL, parent);
    }

    set playerView(view: AbstractView) {
        this.view = view;
        this.view.on(PlayerEvents.play, () => this.play());
        this.view.on(PlayerEvents.pause, () => this.pause());
        this.view.on(PlayerEvents.mute, () => this.mute());
        this.view.on(PlayerEvents.seekBarChange, () => this.changeSeekBar());
        this.view.on(PlayerEvents.volumeChange, () => this.changeVolume());
        this.view.on(PlayerEvents.fullscreenToggle, () => this.setFullscreen());
        this.video.on(PlayerEvents.videoEnd, () => this.videoEnd());
        this.video.on(PlayerEvents.updateTime, () => this.changeSeekBarValue());
    }


    videoEnd(): void {
        this.view.videoEnd();
    }

    play(): void {
        this.video.playVideo();
    }


    pause(): void {
        this.video.pauseVideo();
    }


    mute(): void {
        this.video.muteVideo();
    }

    changeSeekBarValue(): void {
        this.view.seekBarValue = this.video.videoCurrentTime.toString();
    }

    changeSeekBar(): void {
        this.video.videoRewind(this.view.seekBarValue);
    }

    changeVolume(): void {
        console.log(this.view.volumeValue);
        this.video.volume = this.view.volumeValue;
    }

    setFullscreen(): void {
        console.log('setFullscreen');
        this.video.setFullscreen();
    }
}