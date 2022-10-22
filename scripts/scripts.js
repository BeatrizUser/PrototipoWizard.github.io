$(document).ready(function(){
    $(function () {
        // FUNDOS
        $("#bg1").click(function(){
            var img = document.querySelector(".bg-screen");
            img.setAttribute('src', 'assets/bg1.png');
        })      
        $("#bg2").click(function(){
            var img = document.querySelector(".bg-screen");
            img.setAttribute('src', 'assets/bg2.png');
        })
        // PERSONAGENS 1
        $("#char1-1").click(function(){
            var img = document.querySelector(".silueta1-screen");
            img.setAttribute('src', 'assets/siluetahomem1.png');
        })      
        $("#char1-2").click(function(){
            var img = document.querySelector(".silueta1-screen");
            img.setAttribute('src', 'assets/siluetahomem2.png');
        })
        // PERSONAGENS 2
        $("#char2-1").click(function(){
            var img = document.querySelector(".silueta2-screen");
            img.setAttribute('src', 'assets/siluetamulher1.png');
        })      
        $("#char2-2").click(function(){
            var img = document.querySelector(".silueta2-screen");
            img.setAttribute('src', 'assets/siluetamulher2.png');
        })
    });
})