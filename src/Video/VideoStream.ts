import {AbstractVideo} from "./AbstractVideo";
import Hls = require("hls.js");


export class VideoStream extends AbstractVideo {
    private hls;
    private qualityLevels;

    constructor(videoURL: string, parentElement: HTMLElement) {
        super(parentElement);
        if (Hls.isSupported) {
            this.hls = new Hls();
            this.hls.attachMedia(this.videoElement);
            this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                this.hls.loadSource(videoURL);
                this.hls.on(Hls.Events.MANIFEST_LOADED, (event, data) => {
                    this.qualityLevels = data.levels.length;
                    console.log(data.levels.length + 'hls levels');
                    return this.playVideo()
                });
            })
        }
    }

    set quality(value: number) {
        if (value < this.qualityLevels) {
            this.hls.currentLevel = value;
        }
    }
}