import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getItem = localStorage.getItem("videoplayer-current-time");

if (getItem) {
    player.setCurrentTime(getItem);
}

player.on("timeupdate", throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));






