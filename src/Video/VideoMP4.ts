import {AbstractVideo} from "./AbstractVideo";
/**
 * Created by ggdev on 24.04.17.
 */

export class VideoMP4 extends AbstractVideo {

    constructor(videoURL: string, parentElement: HTMLElement) {
        super(parentElement);
        console.log('WTF!?');
        this.videoElement.src = videoURL;
    }

}