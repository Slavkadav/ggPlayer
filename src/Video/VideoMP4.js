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
/**
 * Created by ggdev on 24.04.17.
 */
var VideoMP4 = (function (_super) {
    __extends(VideoMP4, _super);
    function VideoMP4(videoURL, parentElement) {
        var _this = _super.call(this, parentElement) || this;
        _this.videoElement.src = videoURL;
        return _this;
    }
    return VideoMP4;
}(AbstractVideo_1.AbstractVideo));
exports.VideoMP4 = VideoMP4;
//# sourceMappingURL=VideoMP4.js.map