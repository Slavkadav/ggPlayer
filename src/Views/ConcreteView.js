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
var ConcreteView = (function (_super) {
    __extends(ConcreteView, _super);
    function ConcreteView(placeHolder) {
        var _this = _super.call(this, placeHolder) || this;
        _this.htmlText = "<div id=\"controls\">\n            <button type=\"button\" id=\"play\">Play</button>\n            <button type=\"button\" id=\"pause\">Pause</button>\n            <button type=\"button\" id=\"mute\">Mute</button>\n         </div>";
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
    };
    ConcreteView.prototype.pauseClicked = function () {
        this.emit('playerPause');
        this.pauseButton.disabled = true;
        this.playButton.disabled = false;
    };
    ConcreteView.prototype.playClicked = function () {
        this.emit('playerPlay');
        this.playButton.disabled = true;
        this.pauseButton.disabled = false;
    };
    ConcreteView.prototype.muteClicked = function () {
        this.emit('playerMute');
        if (this.muteButton.textContent === "Mute")
            this.muteButton.textContent = "Unmute";
        else {
            this.muteButton.textContent = "Mute";
        }
    };
    return ConcreteView;
}(AbstractView_1.AbstractView));
exports.ConcreteView = ConcreteView;
//# sourceMappingURL=ConcreteView.js.map