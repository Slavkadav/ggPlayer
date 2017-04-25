/**
 * Created by ggdev on 24.04.17.
 */
export abstract class AbstractVideo{
    videoElement : HTMLVideoElement;

    constructor(videoURL : string,parentElement:HTMLElement){
        this.videoElement = document.createElement('video');
        parentElement.appendChild(this.videoElement);
    }

     playVideo():void{
        this.videoElement.play();
    }
     pauseVideo():void{
        this.videoElement.pause();
    }
     muteVideo():void{
        this.videoElement.muted = !this.videoElement.muted;
     }
}