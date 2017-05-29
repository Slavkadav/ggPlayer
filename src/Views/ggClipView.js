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
var AbstractView_1 = require("./AbstractView");
var PlayerEvents_1 = require("../PlayerEvents");
/**
 * Created by ggdev on 15.05.17.
 */
var ggClipView = (function (_super) {
    __extends(ggClipView, _super);
    function ggClipView(placeHolder) {
        var _this = _super.call(this, placeHolder) || this;
        console.log('GGClip Created');
        _this.playButton = document.getElementsByClassName('play-pause').item(0);
        _this.playButton.addEventListener('click', function () { return _this.playClicked(); });
        _this.volumeBar = document.getElementsByClassName('sound-block').item(0);
        _this.volumeBar.onmousedown = function (e) { return _this.moveVolume(e); };
        _this.volumeBar.ondragstart = function () { return false; };
        _this.fullscreenButton = document.getElementsByClassName('full-exitfull').item(0);
        _this.fullscreenButton.addEventListener('click', function () {
            _this.emit(PlayerEvents_1.PlayerEvents.fullscreenToggle);
            _this.fullscreenButton.classList.toggle('active');
        });
        _this.muteButton = document.getElementsByClassName('mute-unmute').item(0);
        _this.muteButton.addEventListener('click', function () { return _this.mutePressed(); });
        return _this;
    }
    ggClipView.prototype.videoEnd = function () {
    };
    Object.defineProperty(ggClipView.prototype, "seekBarValue", {
        get: function () {
            return "none";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ggClipView.prototype, "volumeValue", {
        get: function () {
            return this.volume;
        },
        enumerable: true,
        configurable: true
    });
    ggClipView.prototype.mutePressed = function () {
        this.emit(PlayerEvents_1.PlayerEvents.mute);
        this.muteButton.classList.toggle('mute');
    };
    ggClipView.prototype.playClicked = function () {
        if (this.playButton.classList.contains('active'))
            this.emit(PlayerEvents_1.PlayerEvents.pause);
        else
            this.emit(PlayerEvents_1.PlayerEvents.play);
        this.playButton.classList.toggle('active');
    };
    ggClipView.prototype.moveVolume = function (e) {
        var _this = this;
        var sliderRange = this.volumeBar.getElementsByClassName('slider-range').item(0);
        var handle = this.volumeBar.getElementsByClassName('handle').item(0);
        var rect = this.volumeBar.getElementsByClassName('progress-sound')[0].getBoundingClientRect();
        var moveAt = function (e) {
            var handleLeft = (e.pageX - rect.left - handle.offsetWidth / 2);
            var sliderRight = (e.pageX - rect.left - handle.offsetWidth / 2);
            if (handleLeft < 0) {
                handleLeft = 0;
                sliderRight = 0;
            }
            if (sliderRight >= rect.width - handle.offsetWidth) {
                sliderRight = rect.width;
            }
            if (handleLeft >= rect.width - handle.offsetWidth) {
                handleLeft = rect.width;
            }
            if (handleLeft < rect.width / 2) {
                _this.muteButton.classList.add('half');
            }
            if (handleLeft > rect.width / 2) {
                _this.muteButton.classList.remove('half');
            }
            _this.volume = handleLeft / rect.width;
            handle.style.left = handleLeft / rect.width * 100 + '%';
            sliderRange.style.width = sliderRight / rect.width * 100 + '%';
            _this.emit(PlayerEvents_1.PlayerEvents.volumeChange);
        };
        moveAt(e);
        this.volumeBar.addEventListener('mousemove', function (e) { return moveAt(e); });
        document.addEventListener('mouseup', function (e) {
            _this.volumeBar.onmousemove = null;
            document.onmouseup = null;
        });
    };
    return ggClipView;
}(AbstractView_1.AbstractView));
exports.ggClipView = ggClipView;
//# sourceMappingURL=ggClipView.js.map