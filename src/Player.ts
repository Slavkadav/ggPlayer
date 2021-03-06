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


        this.video.on('videoLoaded', () => {
            console.log('set quality levels');
            this.view.qualityLevels = this.video.videoQualityLevels

        });

        this.video.on(PlayerEvents.qualityAutoChange, () => {
            this.view.currentQuality = this.video.quality;
        });

        this.view.on(PlayerEvents.play, () => this.play());
        this.view.on(PlayerEvents.pause, () => this.pause());
        this.view.on(PlayerEvents.mute, () => this.mute());
        this.view.on(PlayerEvents.seekBarChange, () => this.changeSeekBar());
        this.view.on(PlayerEvents.volumeChange, () => this.changeVolume());
        this.view.on(PlayerEvents.fullscreenToggle, () => this.setFullscreen());
        this.view.on(PlayerEvents.qualityChange, () => this.changeQuality());
        this.video.on(PlayerEvents.videoEnd, () => this.videoEnd()); // TODO: Разделить эвенты видео и вью
        this.video.on(PlayerEvents.updateTime, () => this.changeSeekBarValue());
    }


    videoEnd(): void {
        this.view.videoEnd(); // TODO: Эвенты
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
        this.video.volume = this.view.volumeValue; // TODO: Значение должно приходить в эвенте
    }

    setFullscreen(): void {
        console.log('setFullscreen');
        this.video.setFullscreen();
    }

    changeQuality(): void {
        console.log('change quality level to ' + this.view.currentQuality);
        this.video.quality = this.view.currentQuality;
    }
}