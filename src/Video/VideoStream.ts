import {AbstractVideo} from "./AbstractVideo";
import Hls = require("hls.js");
import {isUndefined} from "util";
import {PlayerEvents} from "../PlayerEvents";


export class VideoStream extends AbstractVideo {
    private hls;
    private qualityLevels;
    private ready: boolean = false;

    constructor(videoURL: string, parentElement: HTMLElement) {
        super(parentElement);
        if (Hls.isSupported) {
            this.hls = new Hls();
            //this.hls.autoLevelEnabled = false;
            this.hls.attachMedia(this.videoElement);
            this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                this.hls.loadSource(videoURL);
                this.hls.on(Hls.Events.MANIFEST_LOADED, (event, data) => {
                    this.qualityLevels = data.levels;
                    // this.ready = true;
                    // this.hls.loadLevel = 0;
                    console.log(' quality levels are loaded');
                    this.emit('videoLoaded');
                    return this.playVideo();
                });
            })

            this.hls.on(Hls.Events.LEVEL_SWITCHED, () => {
                this.emit(PlayerEvents.qualityAutoChange);
            })
        }
    }

    set quality(value: number) {
        if (value < this.qualityLevels.length && value >= 0) {
            this.hls.currentLevel = value;
        }
        else {
            this.hls.currentLevel = -1;
        }
    }

    get quality(): number {
        return this.hls.currentLevel;
    }

    get videoQualityLevels(): string[] {
        console.log('get quality levels');
        let levels: string[] = [];
        for (let level of this.qualityLevels) {
            levels.push(level.height.toString());
            //console.log(level.height);
        }
        return levels;
    }
}