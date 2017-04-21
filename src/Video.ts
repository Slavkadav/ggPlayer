/**
 * Created by ggdev on 21.04.17.
 */
export class Video {
    private videoElement: HTMLMediaElement;

    constructor(videoURL: string, parentElement:HTMLElement) {
        this.videoElement = document.createElement('video');
        this.videoElement.src = videoURL;
        this.videoElement =  parentElement.appendChild(this.videoElement);
    }

    set setId(id:string){
        this.videoElement.id = id;
    }


    playVideo(): void {
        this.videoElement.play();
    }

    pauseVideo():void {
        this.videoElement.pause();
    }

    muteVideo():void {
        this.videoElement.muted = !this.videoElement.muted;
    }

}