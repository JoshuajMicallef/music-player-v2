var vocalsOpacityButton = document.querySelectorAll(".instrument-play")[0]
var vocalsOpacity = document.querySelectorAll(".instrument-image")[0]
var vocalsVisualiser = document.querySelectorAll(".visualiser")[0]
var vocals = document.getElementById("vocals")
var vocalsMute = document.querySelectorAll(".mute")[0]

var synthOpacityButton = document.querySelectorAll(".instrument-play")[1]
var synthOpacity = document.querySelectorAll(".instrument-image")[1]
var synthVisualiser = document.querySelectorAll(".visualiser")[1]
var synth = document.getElementById("synth")
var synthMute = document.querySelectorAll(".mute")[1]

var drumsOpacityButton = document.querySelectorAll(".instrument-play")[2]
var drumsOpacity = document.querySelectorAll(".instrument-image")[2]
var drumsVisualiser = document.querySelectorAll(".visualiser")[2]
var drums = document.getElementById("drums")
var drumsMute = document.querySelectorAll(".mute")[2]

var bassOpacityButton = document.querySelectorAll(".instrument-play")[3]
var bassOpacity = document.querySelectorAll(".instrument-image")[3]
var bassVisualiser = document.querySelectorAll(".visualiser")[3]
var bass = document.getElementById("bass")
var bassMute = document.querySelectorAll(".mute")[3]

var pianoOpacityButton = document.querySelectorAll(".instrument-play")[4]
var pianoOpacity = document.querySelectorAll(".instrument-image")[4]
var pianoVisualiser = document.querySelectorAll(".visualiser")[4]
var piano = document.getElementById("piano")
var pianoMute = document.querySelectorAll(".mute")[4]

var referenceTrack = document.getElementById("reference-track")

var playButton = document.getElementById('play')
var pauseButton = document.getElementById('pause')
var restartButton = document.getElementById('restart')


vocalsOpacityButton.addEventListener("click", function () {vocalsOpacity.classList.toggle("active");});
vocalsOpacityButton.addEventListener("click", function () {vocalsVisualiser.classList.toggle("active");});

synthOpacityButton.addEventListener("click", function () {synthOpacity.classList.toggle("active");});
synthOpacityButton.addEventListener("click", function () {synthVisualiser.classList.toggle("active");});

drumsOpacityButton.addEventListener("click", function () {drumsOpacity.classList.toggle("active");});
drumsOpacityButton.addEventListener("click", function () {drumsVisualiser.classList.toggle("active");});

bassOpacityButton.addEventListener("click", function () {bassOpacity.classList.toggle("active");});
bassOpacityButton.addEventListener("click", function () {bassVisualiser.classList.toggle("active");});

pianoOpacityButton.addEventListener("click", function () {pianoOpacity.classList.toggle("active");});
pianoOpacityButton.addEventListener("click", function () {pianoVisualiser.classList.toggle("active");});

pauseButton.addEventListener('click', function() {document.querySelectorAll('.visualiser').forEach(function(element) {element.style.animationPlayState = 'paused'});});
pauseButton.addEventListener('click', function() {
    referenceTrack.pause();
    vocals.pause();
    synth.pause();
    drums.pause();
    bass.pause();
    piano.pause();
});

playButton.addEventListener('click', function() {document.querySelectorAll('.visualiser').forEach(function(element) {element.style.animationPlayState = 'running'});});
playButton.addEventListener('click', function() {
    referenceTrack.play();
    vocals.play();
    synth.play();
    drums.play();
    bass.play();
    piano.play();
});


restartButton.addEventListener('click', function(){
    document.querySelectorAll('.visualiser').forEach(function(element) {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';
        element.style.animationPlayState = 'pause';
        });
    });

restartButton.addEventListener('click', function(){
    referenceTrack.currentTime = 0;
    vocals.currentTime = 0;
    synth.currentTime = 0;
    drums.currentTime = 0;
    bass.currentTime = 0;
    piano.currentTime = 0;
    referenceTrack.pause();
    vocals.pause();
    synth.pause();
    drums.pause();
    bass.pause();
    piano.pause();
});

vocalsMute.addEventListener('click', function() {
    vocals.muted = !vocals.muted;
});

pianoMute.addEventListener('click', function() {
    synth.muted = !synth.muted;
});

drumsMute.addEventListener('click', function() {
    drums.muted = !drums.muted;
});

bassMute.addEventListener('click', function() {
    bass.muted = !bass.muted;
});

synthMute.addEventListener('click', function() {
    piano.muted = !piano.muted;
});

function synchronizeTracks() {
    var referenceTime = referenceTrack.currentTime;
    var tracks = [vocals, synth, drums, bass, piano];

    tracks.forEach(function(track) {
        if (Math.abs(track.currentTime - referenceTime) > 0.07) {
            track.currentTime = referenceTime;
        }
    });
}

var syncInterval = setInterval(synchronizeTracks, 1000);

referenceTrack.addEventListener('ended', function() {
    referenceTrack.currentTime = 0;
    vocals.currentTime = 0;
    synth.currentTime = 0;
    drums.currentTime = 0;
    bass.currentTime = 0;
    piano.currentTime = 0;
    referenceTrack.pause();
    vocals.pause();
    synth.pause();
    drums.pause();
    bass.pause();
    piano.pause();

    document.querySelectorAll('.visualiser').forEach(function(element) {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';
        element.style.animationPlayState = 'pause';
    });
});