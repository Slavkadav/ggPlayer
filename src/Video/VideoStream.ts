import {AbstractVideo} from "./AbstractVideo";
import Hls = require("hls.js");


export class VideoStream extends AbstractVideo {
    constructor(videoURL: string, parentElement: HTMLElement) {
        super(parentElement);
        if (Hls.isSupported) {
            let hls = new Hls();
            hls.loadSource(videoURL);
            hls.attachMedia(this.videoElement);
            hls.on(Hls.Events.MANIFEST_LOADED, () => this.playVideo());
        }
    }
}