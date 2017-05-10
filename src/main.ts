import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'


window.onload = () => {
    let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4', element);
    player.playerView = new ConcreteView(element);

};