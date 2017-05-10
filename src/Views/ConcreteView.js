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
var ConcreteView = (function (_super) {
    __extends(ConcreteView, _super);
    function ConcreteView(placeHolder) {
        var _this = _super.call(this, placeHolder) || this;
        _this.htmlText = "<div id=\"controls\">\n            <input type=\"range\" id=\"seekBar\" value=\"0\">\n            <button type=\"button\" id=\"play\">Play</button>\n            <button type=\"button\" id=\"pause\">Pause</button>\n            <button type=\"button\" id=\"mute\">Mute</button>\n            <button type=\"button\" id=\"fullscreen\">Fullscreen</button>\n            <input type=\"range\" id=\"volumeBar\" value=\"100\"/>\n         </div>";
        _this.placeHolder.insertAdjacentHTML('beforeEnd', _this.htmlText);
        _this.init();
        return _this;
    }
    ConcreteView.prototype.init = function () {
        var _this = this;
        this.playButton = document.getElementById('play');
        this.playButton.addEventListener('click', function () { return _this.playClicked(); });
        this.pauseButton = document.getElementById('pause');
        this.pauseButton.addEventListener('click', function () { return _this.pauseClicked(); });
        this.muteButton = document.getElementById('mute');
        this.muteButton.addEventListener('click', function () { return _this.muteClicked(); });
        this.seekBar = document.getElementById('seekBar');
        this.seekBar.addEventListener('change', function () {
            return _this.seekBarChange();
        });
        this.volumeBar = document.getElementById('volumeBar');
        this.volumeBar.min = '0';
        this.volumeBar.max = '1';
        this.volumeBar.step = '0.01';
        this.volumeBar.addEventListener('change', function () {
            return _this.emit('volumeChange');
        });
        this.fullscreen = document.getElementById('fullscreen');
        this.fullscreen.addEventListener('click', function () {
            return _this.fullscreenSet();
        });
    };
    ConcreteView.prototype.pauseClicked = function () {
        this.emit(PlayerEvents_1.PlayerEvents.pause);
        this.pauseButton.disabled = true;
        this.playButton.disabled = false;
    };
    ConcreteView.prototype.fullscreenSet = function () {
        console.log('fullscreenPress');
        document.getElementById('controls').style.width = '100%';
        this.emit(PlayerEvents_1.PlayerEvents.fullscreenToggle);
    };
    ConcreteView.prototype.playClicked = function () {
        this.emit(PlayerEvents_1.PlayerEvents.play);
        this.playButton.disabled = true;
        this.pauseButton.disabled = false;
    };
    ConcreteView.prototype.muteClicked = function () {
        this.emit(PlayerEvents_1.PlayerEvents.mute);
        if (this.muteButton.textContent === "Mute")
            this.muteButton.textContent = "Unmute";
        else {
            this.muteButton.textContent = "Mute";
        }
    };
    ConcreteView.prototype.seekBarChange = function () {
        this.emit(PlayerEvents_1.PlayerEvents.seekBarChange);
    };
    Object.defineProperty(ConcreteView.prototype, "seekBarValue", {
        get: function () {
            return this.seekBar.value;
        },
        set: function (value) {
            this.seekBar.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcreteView.prototype, "volumeValue", {
        get: function () {
            return +this.volumeBar.value;
        },
        enumerable: true,
        configurable: true
    });
    ConcreteView.prototype.videoEnd = function () {
        this.playButton.disabled = false;
        this.pauseButton.disabled = true;
        this.playButton.textContent = 'Repeat';
    };
    return ConcreteView;
}(AbstractView_1.AbstractView));
exports.ConcreteView = ConcreteView;
//# sourceMappingURL=ConcreteView.js.map