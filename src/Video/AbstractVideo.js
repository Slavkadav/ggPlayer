"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
/**
 * Created by ggdev on 24.04.17.
 */
var AbstractVideo = (function (_super) {
    __extends(AbstractVideo, _super);
    function AbstractVideo(parentElement) {
        var _this = _super.call(this) || this;
        _this.videoElement = document.createElement('video');
        _this.videoElement.style.width = '100%';
        _this.videoElement.style.height = '100%';
        _this.parentElement = parentElement;
        parentElement.appendChild(_this.videoElement);
        _this.videoElement.addEventListener('timeupdate', function () { return _this.emit('videoUpdateTime'); });
        _this.videoElement.addEventListener('ended', function () { return _this.emit('videoEnd'); });
        return _this;
    }
    Object.defineProperty(AbstractVideo.prototype, "videoCurrentTime", {
        get: function () {
            return this.videoElement.currentTime * (100 / this.videoElement.duration);
        },
        enumerable: true,
        configurable: true
    });
    AbstractVideo.prototype.playVideo = function () {
        this.videoElement.play();
    };
    AbstractVideo.prototype.pauseVideo = function () {
        this.videoElement.pause();
    };
    AbstractVideo.prototype.muteVideo = function () {
        this.videoElement.muted = !this.videoElement.muted;
    };
    AbstractVideo.prototype.setFullscreen = function () {
        console.log('enter fullscreen');
        this.parentElement.webkitRequestFullScreen();
        this.parentElement.style.width = '100%';
        this.parentElement.style.height = '100%';
        this.videoElement.style.width = '100%';
        this.videoElement.style.height = '95%';
    };
    AbstractVideo.prototype.videoRewind = function (value) {
        this.videoElement.currentTime = this.videoElement.duration * (+value / 100);
    };
    Object.defineProperty(AbstractVideo.prototype, "volume", {
        set: function (value) {
            this.videoElement.volume = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractVideo.prototype, "quality", {
        get: function () { return null; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractVideo.prototype, "videoQualityLevels", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractVideo;
}(events_1.EventEmitter));
exports.AbstractVideo = AbstractVideo;
//# sourceMappingURL=AbstractVideo.js.map