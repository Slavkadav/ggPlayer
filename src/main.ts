import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'
import {ggClipView} from "./Views/ggClipView";
//TODO: добавить возможность изменять качество стрима по нажатию на соответствующие кнопки


window.onload = () => {
    //let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('https://www.w3schools.com/html/mov_bbb.mp4', null);
    player.playerView = new ggClipView(null);

};