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
var PlayerEvents_1 = require("../PlayerEvents");
var VideoStream = (function (_super) {
    __extends(VideoStream, _super);
    function VideoStream(videoURL, parentElement) {
        var _this = _super.call(this, parentElement) || this;
        _this.ready = false;
        if (Hls.isSupported) {
            _this.hls = new Hls();
            //this.hls.autoLevelEnabled = false;
            _this.hls.attachMedia(_this.videoElement);
            _this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                _this.hls.loadSource(videoURL);
                _this.hls.on(Hls.Events.MANIFEST_LOADED, function (event, data) {
                    _this.qualityLevels = data.levels;
                    // this.ready = true;
                    // this.hls.loadLevel = 0;
                    console.log(' quality levels are loaded');
                    _this.emit('videoLoaded');
                    return _this.playVideo();
                });
            });
            _this.hls.on(Hls.Events.LEVEL_SWITCHED, function () {
                _this.emit(PlayerEvents_1.PlayerEvents.qualityAutoChange);
            });
        }
        return _this;
    }
    Object.defineProperty(VideoStream.prototype, "quality", {
        get: function () {
            return this.hls.currentLevel;
        },
        set: function (value) {
            if (value < this.qualityLevels.length && value >= 0) {
                this.hls.currentLevel = value;
            }
            else {
                this.hls.currentLevel = -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoStream.prototype, "videoQualityLevels", {
        get: function () {
            console.log('get quality levels');
            var levels = [];
            for (var _i = 0, _a = this.qualityLevels; _i < _a.length; _i++) {
                var level = _a[_i];
                levels.push(level.height.toString());
                //console.log(level.height);
            }
            return levels;
        },
        enumerable: true,
        configurable: true
    });
    return VideoStream;
}(AbstractVideo_1.AbstractVideo));
exports.VideoStream = VideoStream;
//# sourceMappingURL=VideoStream.js.map