$(document).ready(function(){
var bg = document.querySelector(".bg-screen");
var char1 = document.querySelector(".silueta1-screen");
var char2 = document.querySelector(".silueta2-screen");
    $(function () {
        // FUNDOS
        $("#bg1").click(function(){
            bg.setAttribute('src', 'assets/bg1.png');
        })      
        $("#bg2").click(function(){
            bg.setAttribute('src', 'assets/bg2.png');
        })
        // PERSONAGENS 1
        $("#char1-1").click(function(){
            char1.setAttribute('src', 'assets/siluetahomem1.png');
        })      
        $("#char1-2").click(function(){
            char1.setAttribute('src', 'assets/siluetahomem2.png');           
        })
        // PERSONAGENS 2
        $("#char2-1").click(function(){
            char2.setAttribute('src', 'assets/siluetamulher1.png');      
        })      
        $("#char2-2").click(function(){
            char2.setAttribute('src', 'assets/siluetamulher2.png');        
        })
    });
})