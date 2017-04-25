import {Player} from './Player'
import {ConcreteView} from './Views/ConcreteView'



window.onload = () =>{
    alert("HELLO");
    let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('http://www.streambox.fr/playlists/test_001/stream.m3u8', element);
    player.viewSet = new ConcreteView(element);
};