"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoFactory_1 = require("./Video/VideoFactory");
var PlayerEvents_1 = require("./PlayerEvents");
var Player = (function () {
    function Player(videoURL, parent) {
        this.video = new VideoFactory_1.VideoFactory().createVideo(videoURL, parent);
    }
    Object.defineProperty(Player.prototype, "playerView", {
        set: function (view) {
            var _this = this;
            this.view = view;
            this.view.on(PlayerEvents_1.PlayerEvents.play, function () {
                return _this.play();
            });
            this.view.on(PlayerEvents_1.PlayerEvents.pause, function () {
                return _this.pause();
            });
            this.view.on(PlayerEvents_1.PlayerEvents.mute, function () {
                return _this.mute();
            });
            this.view.on(PlayerEvents_1.PlayerEvents.seekBarChange, function () {
                return _this.changeSeekBar();
            });
            this.view.on(PlayerEvents_1.PlayerEvents.volumeChange, function () {
                return _this.changeVolume();
            });
            this.view.on(PlayerEvents_1.PlayerEvents.fullscreenToggle, function () {
                return _this.setFullscreen();
            });
            this.video.on(PlayerEvents_1.PlayerEvents.videoEnd, function () {
                return _this.videoEnd();
            });
            this.video.on(PlayerEvents_1.PlayerEvents.updateTime, function () {
                return _this.changeSeekBarValue();
            });
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.videoEnd = function () {
        this.view.videoEnd();
    };
    Player.prototype.play = function () {
        this.video.playVideo();
    };
    Player.prototype.pause = function () {
        this.video.pauseVideo();
    };
    Player.prototype.mute = function () {
        this.video.muteVideo();
    };
    Player.prototype.changeSeekBarValue = function () {
        this.view.seekBarValue = this.video.videoCurrentTime.toString();
    };
    Player.prototype.changeSeekBar = function () {
        this.video.videoRewind(this.view.seekBarValue);
    };
    Player.prototype.changeVolume = function () {
        console.log(this.view.volumeValue);
        this.video.volume = this.view.volumeValue;
    };
    Player.prototype.setFullscreen = function () {
        console.log('setFullscreen');
        this.video.setFullscreen();
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map