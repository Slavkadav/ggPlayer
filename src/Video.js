"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ggdev on 21.04.17.
 */
var Video = (function () {
    function Video(videoURL, parentElement) {
        this.videoElement = document.createElement('video');
        this.videoElement.src = videoURL;
        this.videoElement = parentElement.appendChild(this.videoElement);
    }
    Object.defineProperty(Video.prototype, "setId", {
        set: function (id) {
            this.videoElement.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype.playVideo = function () {
        this.videoElement.play();
    };
    Video.prototype.pauseVideo = function () {
        this.videoElement.pause();
    };
    Video.prototype.muteVideo = function () {
        this.videoElement.muted = !this.videoElement.muted;
    };
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=Video.js.map