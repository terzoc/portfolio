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
