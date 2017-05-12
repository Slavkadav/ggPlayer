import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'
//TODO: добавить возможность изменять качество стрима по нажатию на соответствующие кнопки


window.onload = () => {
    let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('https://hls.goodgame.ru/hls/39803.smil', element);
    player.playerView = new ConcreteView(element);

};