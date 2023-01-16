/**************************
Settings acquisition ahead!
***************************/

let params = new URLSearchParams(location.search);
var DefaultTags = "type:webm";
var URLtags = params.get("tags");
var URLmeta = params.get("meta");

var vidSource = "https://e621.net/posts.json?tags=" + DefaultTags + "+" + URLtags + "+" + URLmeta;
var VIDEOS = [];
var counter = 0;


/********************
Video controls ahead!
*********************/

var myVid = document.getElementById('myVid');
var mySound = document.getElementById('mySound');

function newVideo() {

  if(VIDEOS[counter].file.url === null) {
    while(VIDEOS[counter].file.url === null) {
      VIDEOS.splice(counter, 1);
      console.log("Cutting out an invalid video...");
    }
  }

  myVid.src = VIDEOS[counter].file.url;
  document.getElementById("linkE621").href = "https://e621.net/posts/"+VIDEOS[counter].id;

  myVid.play();
}
// End of newVideo method

function pickVideo(input) {
    counter += input;

    if(counter >= VIDEOS.length) {
      counter = 0;
    }
    else if (counter <= 0) {
      counter = VIDEOS.length - 1;
    }
}
// End of pickVideo method

function checkSound() {
  var muteBox = document.getElementById("muteBox").checked;
  var musicBox = document.getElementById("musicBox").checked;

  myVid.muted = muteBox;
  mySound.muted = musicBox;

  if((!VIDEOS[counter].tags.meta.includes("sound") || myVid.muted) && !musicBox) {
    mySound.volume = 1;
    mySound.play();
  }
  else
    mySound.volume = 0.15;

}
// End of checkSound method

function skipVideo(input = 0) {
  pickVideo(input);
  newVideo();
  checkSound();
  checkView();
  console.log("Skipping to next video...");
}
// End of skipVideo method

myVid.addEventListener('ended', (event) => {
  skipVideo(+1);
});
// End of 'ended' event listener

myVid.addEventListener('resize', (event) => {
  checkView();
});
// End of 'ended' event listener

function checkView() {
  var viewWidth = window.innerWidth;
  var viewHeight = window.innerHeight;

  console.log("Dimensions: " + viewWidth + "px wide by " + viewHeight + "px tall")
  if(viewWidth < viewHeight) {
    myVid.style.width = viewWidth + "px";
    myVid.style.height = "auto";
  }
  else if (viewHeight <= viewWidth) {
    myVid.style.height = viewHeight + "px";
    myVid.style.width = "auto";
  }
}
// end of checkView method

/*************************************
Video acquisition from e621.com ahead!
**************************************/
var request = new XMLHttpRequest();
console.log("Created a Request object!");

request.open('GET', vidSource, true);
console.log("Attempting to open a connection!");

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400)
  {
    console.log("Connection successful!");

    for (var i = 0; i < data.posts.length; i++) {
      console.log(data.posts[i].id);
      VIDEOS.push(data.posts[i]);
    }

    var start = new Date().getTime();
    var end = start;
    while(end < start + 500) {
      end = new Date().getTime();
    }
    myVid.muted = true;
    mySound.muted = true;
    skipVideo();
  }
  else
  {
    console.log('ERROR! Connection was not successful!');
  }
  // End of If/Else statement
}
// End of Onload function

request.send();
