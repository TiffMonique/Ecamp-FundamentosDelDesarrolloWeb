/////////////////////////////////////////////////////////////////
                   /* llenado de tabla*/
//////////////////////////////////////////////////////////////
//var entry = document.getElementById("entry");
//entry.addEventListener("click",enviar);
var indice=0;
var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
/////////////////////////////////////////////////////////////////
                   /* Validacion de campos*/
//////////////////////////////////////////////////////////////
function readFormData() {
    var formData={};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["rut"] = document.getElementById("rut").value;
    formData["fecha"] = document.getElementById("fecha").value;
    formData["correo"]= document.getElementById("correo").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    formData["pais"] = document.getElementById("pais").value;

    var exnombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    //var exrut= /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var exfecha= /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    var excorreo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var extelefono= /^\d{7,14}$/; // 7 a 14 numeros.
    //var exdireccion= /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenida|Carril|Calle|Boulevard|Barrio|Colonia|Casa|Ave|Blvd|Col|Bo)\.?/;
    //var exciudad= /(?:[A-Z][a-z.-]+[ ]?)+/;
    var expais= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (!formData["nombre"] ===""  && !formData["rut"] ==="" && !formData["fecha"] ==="" && !formData["correo"]===""  && !formData["telefono"]==="" && !formData["direccion"]  ==="" && !formData["ciudad"] ==="" && !formData["pais"] ==="") {
        alert("Todos los campos son obligatorios");
        return;
    }
    else if (formData["nombre"].length == 0 || formData["nombre"].length > 40) {
        alert("El campo nombre es obligatorio y debe contener menos de 40 caracteres");
        return false;
    }

    else if (!exnombre.test(formData["nombre"])) {
        alert("El campo nombre no es valido, inserte de nuevo");
        return false;
    }
 

    else if (formData["rut"].length == 0 ||formData["rut"].length > 12) {
        alert("El campo rut es obligatorio y debe contener menos de  12 caracteres");
        return false;
    }
    /*else if (!exrut.test(formData["rut"])) {
        alert("El campo rut no es valido, inserte de nuevo");
        return false;
    }*/



    else if (formData["correo"].length == 0 || formData["correo"].length > 50) {
        alert("El campo email es obligatorio y debe contener menos de 50 caracteres");
        return false;
    }

    else if (!excorreo.test(formData["correo"])) {
        alert("El campo correo no es valido, inserte de nuevo");
        return false;
    }

    else if (formData["direccion"].length == 0 || formData["direccion"].length > 100) {
        alert("El campo direccion es obligatorio y debe contener menos de 100 caracteres");
        return false;
    }

    /*
    else if (!exdireccion.test(formData["direccion"])) {
        alert("El campo direccion no es valido, inserte de nuevo");
        return false;
    }*/


    else if (formData["ciudad"].length == 0 || formData["ciudad"].length > 20) {
        alert("El campo ciudad es obligatorio y debe contener menos de 20 caracteres");
        return false;
    }
    

    /*
    else if (!exciudad.test(formData["ciudad"])) {
        alert("El campo ciudad no es valido, inserte de nuevo");
        return false;
    }*/


    else if (formData["pais"].length == 0 || formData["pais"].length > 20) {
        alert("El campo pais es obligatorio y debe contener menos de 20 caracteres");
        return false;
    }

    else if (!expais.test(formData["pais"])) {
        alert("El campo pais no es valido, inserte de nuevo");
        return false;
    }

    return formData; 
   
}


//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("display").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = indice;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nombre;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.correo;
    indice++;
}


//Delete the data
function deleteLast(){
    var table = document.getElementById('display');
    var rowCount = table.rows.length;

    if(rowCount===1){
        alert('No hay regitros para eliminar');
    }
    else if(confirm('¿Quieres borrar el ultimo registro?') ){
    
            table.deleteRow(rowCount -1);
    
        

    }
    resetForm();
}



//Delete the data
function deleteFirst(){
    var table = document.getElementById('display');
    var rowCount = table.rows.length;
    if(rowCount===1){
        alert('No hay regitros para eliminar');
    }
    else if(confirm('¿Quieres borrar el primer registro?')){
        document.getElementById('display').deleteRow(1);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}
