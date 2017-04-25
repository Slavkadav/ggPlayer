"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoMP4_1 = require("./VideoMP4");
var VideoStream_1 = require("./VideoStream");
var VideoFactory = (function () {
    function VideoFactory() {
    }
    VideoFactory.prototype.createVideo = function (url, parentElement) {
        var urlSplit = url.split('.');
        var type = urlSplit[urlSplit.length - 1];
        switch (type) {
            case 'mp4':
                console.log('created mp4 video');
                return new VideoMP4_1.VideoMP4(url, parentElement);
            case 'm3u8':
                console.log('created stream');
                return new VideoStream_1.VideoStream(url, parentElement);
            default:
                return new VideoStream_1.VideoStream(url, parentElement);
        }
        //return null;
    };
    return VideoFactory;
}());
exports.VideoFactory = VideoFactory;
//# sourceMappingURL=VideoFactory.js.map