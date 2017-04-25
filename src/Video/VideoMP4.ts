import {AbstractVideo} from "./AbstractVideo";
/**
 * Created by ggdev on 24.04.17.
 */

export class VideoMP4 extends AbstractVideo {
    //TODO: добавить новый класс видео

    constructor(videoURL: string, parentElement: HTMLElement) {
        super(videoURL,parentElement);
        this.videoElement.src = videoURL;
    }

}