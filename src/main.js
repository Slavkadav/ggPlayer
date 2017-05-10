"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var ConcreteView_1 = require("./Views/ConcreteView");
//TODO: добавить возможность изменять качество стрима по нажатию на соответствующие кнопки
window.onload = function () {
    var element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    var player = new Player_1.Player('https://hls.goodgame.ru/hls/18482.smil', element);
    player.playerView = new ConcreteView_1.ConcreteView(element);
};
//# sourceMappingURL=main.js.map