/* view the page here
https://c-y-hsieh.github.io/JSforWaiver/  */

var video = document.getElementById( "player1");
var speed = 1;
var volume = document.getElementById("volume");
var slider = document.getElementById("slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

//play
document.getElementById("play").addEventListener("click", playVideo);
function playVideo() {
	video.play(); 
	console.log("Play Video");
}


//pause
document.getElementById("pause").addEventListener("click", pauseVideo);
function pauseVideo() {
	video.pause(); 
	console.log("Pause Video");
}

//speed
document.getElementById("slower").addEventListener("click", slowerVideo);
function slowerVideo() {
	speed = 0.95 * speed;
	video.playbackRate = speed;
	console.log("New speed is " + speed);
}
document.getElementById("faster").addEventListener("click", fasterVideo);
function fasterVideo() {
	speed = speed / 0.95;
	video.playbackRate = speed;
	console.log("New speed is " + speed);
}

//skip
document.getElementById("skip").addEventListener("click", skipVideo);
function skipVideo() {
	console.log("Original location " + video.currentTime);
	if(video.currentTime+15 > video.duration){
		//console.log("overtime");
		video.currentTime = 0;
	}
	else
		video.currentTime += 15;
	console.log("New location " + video.currentTime);
}


//mute
document.getElementById("mute").addEventListener("click", muteOrNot);
function muteOrNot() {
	if(video.muted  == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("muted");
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("unmuted");		
	}
} 

//volume
volume.innerHTML = slider.value + "%";
slider.addEventListener("change", volumeChange);
function volumeChange() {
	console.log("volume: " + slider.value);
	volume.innerHTML = slider.value + "%";
	video.volume = slider.value / 100;
} 

//style
document.getElementById("vintage").addEventListener("click", oldSchool);
function oldSchool() {
	video.className = "video oldSchool";
	console.log("change to oldschool style");
}
document.getElementById("orig").addEventListener("click", origStyle);
function origStyle() {
	video.className = "video";
	console.log("change to original style");
}



