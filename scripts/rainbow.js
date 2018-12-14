function sendToRainbow(){
  var audio = new Audio('videos/crab.mp3');

  var text = document.getElementById("text").value;
  // var th = document.getElementById("rainbowText");
  luketest = text.toLowerCase();
  console.log(luketest);
  if (luketest === "luke is gone") {
    audio.play();
  }
  document.getElementById("rainbowText").innerHTML = text;
  // alert(text);
}
