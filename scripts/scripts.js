var fundos = [
    {
        Name:"Feira Nortuna",
        Description:"Feira Nortuna in Xangai",
        Localization:"Xangai",
        Tags:["xangai","feira","portrait","nortuna"],
        AspectRatio:"16:9",
        src:"assets/bg1.png",
    },
    {
        Name:"Feira",
        Description:"Feira in Xangai",
        Localization:"Xangai",
        Tags:["xangai","feira","portrait"],
        AspectRatio:"16:9",
        src:"assets/bg2.png",
    }
]
var personagens = [
    {
        Name:"Jorge",
        Genre:"Male",
        Description:"Jorge é maneiro.",
        Tags:["jorge","male"],
        Pespective:"corpo",
        posX:0,
        posY:0,
        src:"assets/jorge.png",
    },
    {
        Name:"Alex",
        Genre:"Male",
        Description:"Alex é chato.",
        Tags:["chato","male"],
        Pespective:"corpo",
        posX:0,
        posY:0,
        src:"assets/alex.png",
    },
    {
        Name:"Michele",
        Genre:"Female",
        Description:"Michele é linda.",
        Tags:["michele","female"],
        Pespective:"corpo",
        posX:0,
        posY:0,
        src:"assets/michele.png",
    },
    {
        Name:"Carla",
        Genre:"Female",
        Description:"Carla é alta.",
        Tags:["calta","female"],
        Pespective:"corpo",
        posX:0,
        posY:0,
        src:"assets/carla.png",
    }
]
var elementos = [
    {
        Name:"Doguin",
        Type:"Pet",
        Description:"Doguin é o amiguinho da galera.",
        Tags:["dog","pet","doguin"],
        posX:0,
        posY:0,
        src:"assets/doguin.png",
    },
    {
        Name:"Gatin",
        Type:"Pet",
        Description:"Gatin não é o amiguinho da galera.",
        Tags:["cat","pet","gatin"],
        posX:0,
        posY:0,
        src:"assets/gatin.png",
    }
]

$(document).ready(function(){
var bg = document.querySelector(".bg-screen");
var char1 = document.querySelector(".char1");
var char2 = document.querySelector(".char2");
var elemento = document.querySelector(".element");

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
            char1.setAttribute('src', 'assets/jorge.png');
        })      
        $("#char1-2").click(function(){
            char1.setAttribute('src', 'assets/alex.png');           
        })
        // PERSONAGENS 2
        $("#char2-1").click(function(){
            char2.setAttribute('src', 'assets/michele.png');      
        })      
        $("#char2-2").click(function(){
            char2.setAttribute('src', 'assets/carla.png');        
        })
        // ELEMENTOS
        $("#char3-1").click(function(){
            elemento.setAttribute('src', 'assets/doguin.png'); 
        })      
        $("#char3-2").click(function(){
            elemento.setAttribute('src', 'assets/gatin.png'); 
        })      
    });
})