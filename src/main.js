"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var ConcreteView_1 = require("./Views/ConcreteView");
window.onload = function () {
    alert("HELLO");
    var element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    var player = new Player_1.Player('http://techslides.com/demos/sample-videos/small.mp4', element);
    player.viewSet = new ConcreteView_1.ConcreteView(element);
};
//# sourceMappingURL=main.js.map