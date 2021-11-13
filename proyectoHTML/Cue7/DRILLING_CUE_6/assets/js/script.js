var curso1 = [{
    nombre: "Andrés Ávila",
    calificaciones: [4.5, 6.5, 5.2, 6.8]
},
{

    nombre: "Fernanda Bustos",
    calificaciones: [7.0, 5.8, 6.3, 6.7]
},
{

    nombre: "Mauricio Cortés",
    calificaciones: [5.2, 5.3, 5.0, 5.7]
},
{

    nombre: "Karla Donoso",
    calificaciones: [4.3, 3.7, 4.8, 4.2]
},
{

    nombre: "Tomás Ercilla",
    calificaciones: [5.9, 6.2, 6.3, 6.5]
},
{

    nombre: "Daniela Fernández",
    calificaciones: [4.5, 4.7, 4.9, 5.1]
},
{

    nombre: "Sergio Garrido",
    calificaciones: [2.1, 3.4, 2.8, 1.5]
},
{

    nombre: "Pamela Herrera",
    calificaciones: [5.6, 5.9, 6.1, 5.7]
},
{

    nombre: "Fernando Inostroza",
    calificaciones: [6.8, 6.9, 7.0, 6.9]
},
{

    nombre: "Laura Jorquera",
    calificaciones: [5.6, 5.3, 6.2, 5.8]
},
{

    nombre: "Bryan Kelly",
    calificaciones: [5.6, 4.6, 3.9, 6.1]
},
{

    nombre: "Pía Muñoz",
    calificaciones: [4.6, 4.8, 5.0, 4.3]
},
{

    nombre: "Leonardo Navea",
    calificaciones: [7.0, 6.8, 5.9, 6.5]
},
{

    nombre: "Sandra Ortiz",
    calificaciones: [5.4, 5.7, 5.3, 5.2]
},
{

    nombre: "Andrés Poblete",
    calificaciones: [6.5, 5.9, 6.3, 6.7]
},
{

    nombre: "Francisca Quiroga",
    calificaciones: [6.9, 6.8, 7.0, 6.9]
},
{

    nombre: "Osvaldo Rojas",
    calificaciones: [2.5, 3.5, 4.5, 5.5]
},
{

    nombre: "Eduardo Soto",
    calificaciones: [5.9, 6.3, 4.9, 5.4]
},
{

    nombre: "Rayén Toro",
    calificaciones: [4.3, 5.2, 4.9, 5.6]
},
{

    nombre: "Germán Uturriaga",
    calificaciones: [3.6, 4.2, 4.5, 3.9]
},
{

    nombre: "Javiera Véliz",
    calificaciones: [2.5, 1.9, 4.2, 3.5]
},
{

    nombre: "Paola Yáñez",
    calificaciones: [4.5, 3.2, 5.6, 4.2]
},
{

    nombre: "Ricardo Zapata",
    calificaciones: [4.5, 6.7, 5.4, 6.2]
}];

$(document).ready(function () {
    var table = $('#table')
    var table = $('#myTable')

    for (var i in curso1) {



        let row = `<tr>
                                <td>${parseInt(i) + 1}</td>
                                <td>${curso1[i].nombre}</td>
                                <td>${curso1[i].calificaciones[0]}</td>
                                <td>${curso1[i].calificaciones[1]}</td>
                                <td>${curso1[i].calificaciones[2]}</td>
                                <td>${curso1[i].calificaciones[3]}</td>
                                <td>${((curso1[i].calificaciones[0] + curso1[i].calificaciones[1] + curso1[i].calificaciones[2] + curso1[i].calificaciones[3]) / 4).toFixed(2)}</td>       
                          </tr>`
        table.append(row);

    }


    $('#table').DataTable({
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            if (aData[2] < 4) //Si las notas o el promedio es menor a 4.0
            {

                $('td:eq(2)', nRow).css('color', '#F44336');
            }
            if (aData[3] < 4.0) //Si las notas o el promedio es menor a 4.0
            {
                $('td:eq(3)', nRow).css('color', '#F44336');
            }
            if (aData[4] < 4.0) //Si las notas o el promedio es menor a 4.0
            {
                $('td:eq(4)', nRow).css('color', '#F44336');
            }
            if (aData[5] < 4.0) //Si las notas o el promedio es menor a 4.0
            {
                $('td:eq(5)', nRow).css('color', '#F44336');
            }
            if (aData[6] < 4.0) //Si las notas o el promedio es menor a 4.0
            {
                $('td:eq(6)', nRow).css('color', '#F44336');
            }

        }
    });





})


/*function cargar() {
    var celdas = document.getElementById("myTable").getElementsByTagName("td");
    for (var i = 0; i < celdas.length; i++) {
        if (celdas.item(i).textContent < 4.0) {
            celdas.item(i).style.color = "#F00";
        }
    }
}
*/
//window.onload = cargar;

