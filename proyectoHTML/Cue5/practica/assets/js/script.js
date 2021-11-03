function enviar(){
    var nombre=document.getElementById("inputName").value; 
    var email=document.getElementById("inputEmail").value;
    var direccion=document.getElementById("inputAddress").value; 
    var ciudad=document.getElementById("inputCity").value;
    var pais=document.getElementById("inputCountry").value;
    var pass=document.getElementById("inputPassword").value;


if(nombre.length==0||nombre.length>40){
    alert("El campo nombre es obligatorio y debe contener menos de 40 caracteres");
    return false;
}

if(email.length==0||email.length>50){
    alert("El campo email es obligatorio y debe contener menos de 50 caracteres");
    return false;
}

if(direccion.length==0||direccion.length>100){
    alert("El campo direccion es obligatorio y debe contener menos de 100 caracteres");
    return false;
}

if(ciudad.length==0||ciudad.length>20){
    alert("El campo ciudad es obligatorio y debe contener menos de 20 caracteres");
    return false;
}

if(pais.length==0||pais.length>20){
    alert("El campo nombre es obligatorio y debe contener menos de 20 caracteres");
    return false;
}


return true;
}