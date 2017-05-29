import {Player} from './Player';
import {ggClipView} from './Views/ggClipView';
// TODO: добавить возможность изменять качество стрима по нажатию на соответствующие кнопки

// TODO: Инициализация плеера не должна быть в общем бандле! Нужно вынести ее в index.html
// TODO: Бандл грузит сам плеер, вставкой его в страницу занимается уже сам сайт
// TODO: В параметры плеера нужно передавать указатель на элемент, куда вставится плеер
window.onload = () => {
    //let element = document.getElementById('PlayerPlace');
    ///home/ggdev/FirstStep/media/big_buck_bunny.mp4
    let player = new Player('https://www.w3schools.com/html/mov_bbb.mp4', null);
    player.playerView = new ggClipView(null);

};