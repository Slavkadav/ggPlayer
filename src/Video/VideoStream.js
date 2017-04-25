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
        var _this = _super.call(this, videoURL, parentElement) || this;
        if (Hls.isSupported) {
            var hls = new Hls();
            hls.loadSource(videoURL);
            hls.attachMedia(_this.videoElement);
            hls.on(Hls.Events.MANIFEST_LOADED, function () { return _this.playVideo(); });
        }
        return _this;
    }
    return VideoStream;
}(AbstractVideo_1.AbstractVideo));
exports.VideoStream = VideoStream;
//# sourceMappingURL=VideoStream.js.map