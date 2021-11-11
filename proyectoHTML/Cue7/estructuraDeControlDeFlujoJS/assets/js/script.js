const numeroCorrecto = Math.round(100*Math.random());

function leerNumero(){
    let numero = document.getElementById("numero").value;
    if(numero <0 || numero >100){
        alert("Ingreso numero entre 0 y 100");
        return -1;
    }
    return numero;
}

var contador =0;
function comprobarNumero(){
    contador++; 
    var numeroIngresado=leerNumero();
    if(numeroIngresado==-1){
        return false;
    }
    if(numeroIngresado==numeroCorrecto){
        alert("¡Felicidades, has acertado! Demoraste "+contador+" intentos");
        return true;
    }
    else if(numeroIngresado<numeroCorrecto){
        alert("Prueba con un número más alto");
        return false;
    }else{alert("Prueba con un número más bajo");
        return false;
    }
    
    
}