import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'


window.onload = () => {
    let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('https://hls.goodgame.ru/hls/18482.smil', element);
    player.playerView = new ConcreteView(element);

};