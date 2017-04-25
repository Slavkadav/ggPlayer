"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoFactory_1 = require("./Video/VideoFactory");
var Player = (function () {
    function Player(videoURL, parent) {
        var factory = new VideoFactory_1.VideoFactory();
        this.videoElement = factory.createVideo(videoURL, parent);
    }
    Object.defineProperty(Player.prototype, "viewSet", {
        set: function (view) {
            var _this = this;
            this.view = view;
            this.view.addListener('playerPlay', function () { return _this.play(); });
            this.view.addListener('playerPause', function () { return _this.pause(); });
            this.view.addListener('playerMute', function () { return _this.mute(); });
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.play = function () {
        this.videoElement.playVideo();
    };
    /**
     * Пауза
     */
    Player.prototype.pause = function () {
        this.videoElement.pauseVideo();
    };
    /**
     * Выключение звука
     */
    Player.prototype.mute = function () {
        this.videoElement.muteVideo();
    };
    Player.prototype.stop = function () {
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map