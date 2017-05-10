import {VideoMP4} from "./VideoMP4";
import {VideoStream} from "./VideoStream";
export class VideoFactory {


    constructor() {

    }

    public createVideo(url: string, parentElement: HTMLElement) {
        let urlSplit = url.split('.');
        let type = urlSplit[urlSplit.length - 1];
        switch (type) {
            case 'mp4':
                console.log('created mp4 video');
                return new VideoMP4(url, parentElement);
            case 'm3u8':
                console.log('created stream');
                return new VideoStream(url, parentElement);
            default :
                return null;
        }
    }
}