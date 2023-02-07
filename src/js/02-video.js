import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', (data) => 
    localStorage.setItem("videoplayer-current-time", data.seconds)
);






