"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ggdev on 24.04.17.
 */
var AbstractVideo = (function () {
    function AbstractVideo(videoURL, parentElement) {
        this.videoElement = document.createElement('video');
        parentElement.appendChild(this.videoElement);
    }
    AbstractVideo.prototype.playVideo = function () {
        this.videoElement.play();
    };
    AbstractVideo.prototype.pauseVideo = function () {
        this.videoElement.pause();
    };
    AbstractVideo.prototype.muteVideo = function () {
        this.videoElement.muted = !this.videoElement.muted;
    };
    return AbstractVideo;
}());
exports.AbstractVideo = AbstractVideo;
//# sourceMappingURL=AbstractVideo.js.map