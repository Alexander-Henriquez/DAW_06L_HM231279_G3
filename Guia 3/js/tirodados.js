
(function(){
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else{
    window.attachEvent("onload", iniciar);
    }
    
    var imagenDado1;
    var imagenDado2;
    var imagenDado3;
    var imagenDado4;
    var imagenDado5;
    var imagenDado6;
   
    function iniciar(){
    var boton = document.getElementById("botonTirar");
    if(boton.addEventListener){
    boton.addEventListener("click", tirarDados,false);
    }
    else{
    boton.attachEvent("onclick", tirarDados);
    }
    imagenDado1 = document.getElementById("dado1");
    imagenDado2 = document.getElementById("dado2");
    imagenDado3 = document.getElementById("dado3");
    imagenDado4 = document.getElementById("dado4");
    imagenDado5 = document.getElementById("dado5");
    imagenDado6 = document.getElementById("dado6");
    }
    function tirarDados(){
    establecerImagen(imagenDado1);
    establecerImagen(imagenDado2);
    establecerImagen(imagenDado3);
    establecerImagen(imagenDado4);
    establecerImagen(imagenDado5);
    establecerImagen(imagenDado6);
    }
    function establecerImagen(imgDado){
    var valorDado = Math.floor(1+Math.random()*6);
    
    imgDado.setAttribute("src", "images/dice" +
   valorDado + ".png");
  
    imgDado.setAttribute("alt", "Imagen del dato con elvalor " + valorDado);
    }
   })();
   