import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const setTimeToLocalStorage = function(event) {  

localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
};

player.on('timeupdate', throttle(setTimeToLocalStorage, 1000));

let currentTime = {};
function currentTimefromLocalStorage(){
    if (localStorage.getItem(STORAGE_KEY)){
    currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds;}
}
currentTimefromLocalStorage();
player.setCurrentTime(currentTime).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':   
            break;
        default:
            break;
    }
});