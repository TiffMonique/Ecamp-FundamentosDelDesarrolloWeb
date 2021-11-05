function enviar() {
    var nombre = document.getElementById("nombre").value;
    var rut = document.getElementById("rut").value;
    var fecha = document.getElementById("fecha").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;

    var exnombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    var exrut= /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var exfecha= /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    var excorreo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var extelefono= /^\d{7,14}$/; // 7 a 14 numeros.
    var exdireccion= /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenida|Carril|Calle|Boulevard|Barrio|Colonia|Casa|Ave|Blvd|Col|Bo)\.?/;
    var exciudad= /(?:[A-Z][a-z.-]+[ ]?)+/;
    var expais= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (nombre === "" || rut === "" || fecha === "" || correo === "" || telefono === "" || direccion === "" ||ciudad === "" || pais === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length == 0 || nombre.length > 40) {
        alert("El campo nombre es obligatorio y debe contener menos de 40 caracteres");
        return false;
    }

    else if (!exnombre.test(nombre)) {
        alert("El campo nombre no es valido, inserte de nuevo");
        return false;
    }
 

    else if (rut.length == 0 || rut.length > 12) {
        alert("El campo rut es obligatorio y debe contener menos de  12 caracteres");
        return false;
    }
    else if (!exrut.test(rut)) {
        alert("El campo rut no es valido, inserte de nuevo");
        return false;
    }



    else if (correo.length == 0 || correo.length > 50) {
        alert("El campo email es obligatorio y debe contener menos de 50 caracteres");
        return false;
    }

    else if (!excorreo.test(correo)) {
        alert("El campo rut no es valido, inserte de nuevo");
        return false;
    }

    else if (direccion.length == 0 || direccion.length > 100) {
        alert("El campo direccion es obligatorio y debe contener menos de 100 caracteres");
        return false;
    }

    else if (!exdireccion.test(direccion)) {
        alert("El campo direccion no es valido, inserte de nuevo");
        return false;
    }


    else if (ciudad.length == 0 || ciudad.length > 20) {
        alert("El campo ciudad es obligatorio y debe contener menos de 20 caracteres");
        return false;
    }
    

    else if (!exciudad.test(ciudad)) {
        alert("El campo ciudad no es valido, inserte de nuevo");
        return false;
    }


    else if (pais.length == 0 || pais.length > 20) {
        alert("El campo nombre es obligatorio y debe contener menos de 20 caracteres");
        return false;
    }

    else if (!expais.test(pais)) {
        alert("El campo pais no es valido, inserte de nuevo");
        return false;
    }


    return true;

}



