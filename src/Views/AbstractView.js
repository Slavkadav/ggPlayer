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
var AbstractView = (function (_super) {
    __extends(AbstractView, _super);
    //protected playButton: HTMLButtonElement;
    //protected pauseButton: HTMLButtonElement;
    //protected muteButton: HTMLButtonElement;
    // protected seekBar: HTMLInputElement;
    //protected volumeBar: HTMLInputElement;
    function AbstractView(placeHolder) {
        var _this = _super.call(this) || this;
        _this.template = '';
        _this.placeHolder = placeHolder;
        return _this;
    }
    Object.defineProperty(AbstractView.prototype, "currentQuality", {
        get: function () {
            return null;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(AbstractView.prototype, "qualityLevels", {
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    return AbstractView;
}(events_1.EventEmitter));
exports.AbstractView = AbstractView;
//# sourceMappingURL=AbstractView.js.map