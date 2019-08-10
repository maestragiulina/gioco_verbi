function rispostaesattaprimapagina(){
    var i=1;
    i++;
    var punteggiounicorno=1;
    localStorage.setItem("i", i);
    localStorage.setItem("punteggiounicorno", punteggiounicorno);
    console.log(i);
    var audio = document.getElementById("correctaudio");
    audio.play();
    setTimeout(function(){ $(location).attr('href',"page"+i+".html"); }, 2000);
    
}

function rispostaesatta(){
    var i = localStorage.getItem("i");
    var punteggiounicorno = localStorage.getItem("punteggiounicorno");
    punteggiounicorno++;
    i++;
    localStorage.setItem("punteggiounicorno", punteggiounicorno);  
    localStorage.setItem("i", i);
    var audio = document.getElementById("correctaudio");
    console.log(i);
    audio.play();
    setTimeout(function(){ $(location).attr('href',"page"+i+".html"); }, 2000);
}


function rispostaesattafinale(){
    var i = localStorage.getItem("i");
    var punteggiounicorno = localStorage.getItem("punteggiounicorno");
    punteggiounicorno++;
    i++;
    localStorage.setItem("punteggiounicorno", punteggiounicorno); 
    localStorage.setItem("i", i);
    var audio = document.getElementById("correctaudio");
    console.log(i);
    audio.play();
    setTimeout(function(){ $(location).attr('href',"finale.html"); }, 2000);
}


function rispostasbagliata(){
    var audio = document.getElementById("wrongaudio");
    audio.play();
    var punteggiounicorno = localStorage.getItem("punteggiounicorno");
    punteggiounicorno--;
    localStorage.setItem("punteggiounicorno", punteggiounicorno);
}