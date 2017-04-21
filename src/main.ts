import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'



window.onload = () =>{
    alert("HELLO");
    let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('http://techslides.com/demos/sample-videos/small.mp4', element);
    player.viewSet = new ConcreteView(element);
};