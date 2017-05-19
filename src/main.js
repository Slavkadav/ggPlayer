"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var ggClipView_1 = require("./Views/ggClipView");
//TODO: добавить возможность изменять качество стрима по нажатию на соответствующие кнопки
window.onload = function () {
    //let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    var player = new Player_1.Player('https://www.w3schools.com/html/mov_bbb.mp4', null);
    player.playerView = new ggClipView_1.ggClipView(null);
};
//# sourceMappingURL=main.js.map