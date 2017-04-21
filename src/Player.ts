import {Video} from "./Video";
import {AbstractView} from "./Views/AbstractView"

export class Player {

    private videoElement : Video;
    private view : AbstractView;

    constructor(videoURL:string, parent:HTMLElement) {
       this.videoElement = new Video(videoURL, parent);

    }

    set viewSet(view:AbstractView){
        this.view = view;
        this.view.addListener('playerPlay',()=>this.play());
        this.view.addListener('playerPause',()=>this.pause());
        this.view.addListener('playerMute',()=>this.mute());
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