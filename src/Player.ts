
import {AbstractView} from "./Views/AbstractView"
import {AbstractVideo} from "./Video/AbstractVideo";
import {VideoFactory} from "./Video/VideoFactory";

export class Player {

    private videoElement : AbstractVideo;
    private view : AbstractView;

    constructor(videoURL:string, parent:HTMLElement) {
       let factory = new VideoFactory();

        this.videoElement = factory.createVideo(videoURL,parent);
    }

    set viewSet(view: AbstractView) {
        this.view = view;
        this.view.addListener('playerPlay', () => this.play());
        this.view.addListener('playerPause', () => this.pause());
        this.view.addListener('playerMute', () => this.mute());
    }

    play():void {
        this.videoElement.playVideo();
    }

    /**
     * Пауза
     */
    pause():void {
        this.videoElement.pauseVideo();
    }

    /**
     * Выключение звука
     */
    mute():void {
        this.videoElement.muteVideo();
    }

    stop():void {

    }
}