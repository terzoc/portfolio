function time(){
  console.log("check1")
  updateTime();
  var myVar = setInterval(updateTime, 1000);
}

function updateTime() {

// get all parts of the current time
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
if (minutes < 10) {
minutes = '0' + minutes;
}
if (seconds < 10) {
seconds += '0';
}

if (hours >= 12 && hours < 24) {
var timeOfDay = 'PM';
}
else {
var timeOfDay = 'AM';;
}

if (hours > 12) {
hours = hours - 12;
}
var currentTime = hours + ":" + minutes + ":" +
seconds + ' ' + timeOfDay;

// get the clock div
var myClock = document.getElementById('clock');

// write the currentTime string to the clock div
myClock.innerHTML = currentTime;
}

// create a few global variables to be used later var video, speed, volume;

function init() {
// initialize the player

// first, get the media element and assign it to the video variable
video = document.getElementById('myVideo');

// get the current playbackRate from the HTML5 media API
// range is 0 to very fast, with 1 being normalplayback
speed = video.playbackRate;

// volume range is 0 to 1
// set it in the middle so we have room to move it with our buttons
volume = 0.5;
video.volume = volume;
}

function play() {
video.play();
}

function pause() {
video.pause();

}

function changeSpeed(direction) {
if (direction == 'up') {
if (speed < 10) {
// increase playbackRate
speed = speed + 0.1;
}
}
else if (direction == 'down') {
if (speed > 0) {
// decrease playbackRate
speed = speed - 0.1;
}
}
// so far all we&#39;ve done is change the value of our speed variable
// not let&#39;s assign it to the player
video.playbackRate = speed;
}

function changeVolume(direction) {
if (direction == 'up') {
// if not fully cranked yet, increase volume
if (volume < 0.9) {
volume = volume + 0.1;
}
}
else if (direction == 'down') {
// if not muted, decrease volume
if (volume > 0.1) {
volume = volume - 0.1;
}
}
// so far all we&#39;ve done is change the value of our volume variable
// not let&#39;s assign it to the player
video.volume = volume;
}

// wait until the web page has finished loading, then run the init function

window.onload = init;