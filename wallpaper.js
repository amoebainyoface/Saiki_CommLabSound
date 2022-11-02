// Initializing variables
var intro = document.getElementById('intro');
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');
var curaud = intro;

// Functions to play, pause, and switch between recordings

function play001() {
    if (curaud != audio1){
        curaud.pause();
        audio1.play();
        curaud = audio1;
    }
    else if(!audio1.paused){
        audio1.pause();
        curaud = intro;
    }
    }
    function play002() {
    if (curaud != audio2){
        curaud.pause();
        audio2.play();
        curaud = audio2;
    }
    else if(!audio2.paused){
        audio2.pause();
        curaud = intro;
    }
    }
    function play003() {
    if (curaud != audio3){
        curaud.pause();
        audio3.play();
        curaud = audio3;
    }
    else if(!audio3.paused){
        audio3.pause();
        curaud = intro;
    }
    }
    function play004() {
    if (curaud != audio4){
        curaud.pause();
        audio4.play();
        curaud = audio4;
    }
    else if(!audio4.paused){
        audio4.pause();
        curaud = intro;
    }
    }
    function play005() {
    if (curaud != audio5){
        curaud.pause();
        audio5.play();
        curaud = audio5;
    }
    else if(!audio5.paused){
        audio5.pause();
        curaud = intro;
    }
    }