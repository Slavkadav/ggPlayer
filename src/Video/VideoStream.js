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
var AbstractVideo_1 = require("./AbstractVideo");
var Hls = require("hls.js");
var VideoStream = (function (_super) {
    __extends(VideoStream, _super);
    function VideoStream(videoURL, parentElement) {
        var _this = _super.call(this, parentElement) || this;
        if (Hls.isSupported) {
            _this.hls = new Hls();
            _this.hls.attachMedia(_this.videoElement);
            _this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                _this.hls.loadSource(videoURL);
                _this.hls.on(Hls.Events.MANIFEST_LOADED, function (event, data) {
                    _this.qualityLevels = data.levels.length;
                    console.log(data.levels.length + 'hls levels');
                    return _this.playVideo();
                });
            });
        }
        return _this;
    }
    Object.defineProperty(VideoStream.prototype, "quality", {
        set: function (value) {
            if (value < this.qualityLevels) {
                this.hls.currentLevel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return VideoStream;
}(AbstractVideo_1.AbstractVideo));
exports.VideoStream = VideoStream;
//# sourceMappingURL=VideoStream.js.map