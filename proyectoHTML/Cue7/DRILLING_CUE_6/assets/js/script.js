var curso1 = [{
    numero: 1,
    nombre: "Andrés Ávila",
    calificaciones: [4.5, 6.5, 5.2, 6.8]
},
{
    numero: 2,
    nombre: "Fernanda Bustos",
    calificaciones: [7.0, 5.8, 6.3, 6.7]
},
{
    numero: 3,
    nombre: "Mauricio Cortés",
    calificaciones: [5.2, 5.3, 5.0, 5.7]
},
{
    numero: 4,
    nombre: "Karla Donoso",
    calificaciones: [4.3, 3.7, 4.8, 4.2]
},
{
    numero: 5,
    nombre: "Tomás Ercilla",
    calificaciones: [5.9, 6.2, 6.3, 6.5]
},
{
    numero: 6,
    nombre: "Daniela Fernández",
    calificaciones: [4.5, 4.7, 4.9, 5.1]
},
{
    numero: 7,
    nombre: "Sergio Garrido",
    calificaciones: [2.1, 3.4, 2.8, 1.5]
},
{
    numero: 8,
    nombre: "Pamela Herrera",
    calificaciones: [5.6 ,5.9, 6.1, 5.7]
},
{
    numero: 9,
    nombre: "Fernando Inostroza",
    calificaciones: [6.8, 6.9, 7.0, 6.9]
},
{
    numero: 10,
    nombre: "Laura Jorquera",
    calificaciones: [5.6, 5.3, 6.2, 5.8]
},
{
    numero: 11,
    nombre: "Bryan Kelly",
    calificaciones: [5.6, 4.6, 3.9, 6.1]
},
{
    numero: 12,
    nombre: "Pía Muñoz",
    calificaciones: [4.6, 4.8, 5.0, 4.3]
},
{
    numero: 13,
    nombre: "Leonardo Navea",
    calificaciones: [7.0, 6.8, 5.9, 6.5]
},
{
    numero: 14,
    nombre: "Sandra Ortiz",
    calificaciones: [5.4, 5.7, 5.3, 5.2]
},
{
    numero: 15,
    nombre: "Andrés Poblete",
    calificaciones: [6.5, 5.9, 6.3, 6.7]
},
{
    numero: 16,
    nombre: "Francisca Quiroga",
    calificaciones: [6.9, 6.8, 7.0, 6.9]
},
{
    numero: 17,
    nombre: "Osvaldo Rojas",
    calificaciones: [2.5, 3.5, 4.5, 5.5]
},
{
    numero: 18,
    nombre: "Eduardo Soto",
    calificaciones: [5.9, 6.3, 4.9, 5.4]
},
{
    numero: 19,
    nombre: "Rayén Toro",
    calificaciones: [4.3, 5.2, 4.9, 5.6]
},
{
    numero: 20,
    nombre: "Germán Uturriaga",
    calificaciones: [3.6, 4.2, 4.5, 3.9]
},
{
    numero: 21,
    nombre: "Javiera Véliz",
    calificaciones: [2.5, 1.9, 4.2, 3.5]
},
{
    numero: 22,
    nombre: "Paola Yáñez",
    calificaciones: [4.5 , 3.2, 5.6, 4.2]
},
{
    numero: 23,
    nombre: "Ricardo Zapata",
    calificaciones: [4.5, 6.7, 5.4, 6.2]
}];

		for (var i in curso1){
           
			var row = `<tr>
							<td>${curso1[i].numero}</td>
							<td>${curso1[i].nombre}</td>
							<td>${curso1[i].calificaciones[i][0]}</td>
                            <td>${curso1[i].calificaciones[i][1]}</td>
                            <td>${curso1[i].calificaciones[i][2]}</td>
                            <td>${curso1[i].calificaciones[i][3]}</td>
                            <td>${(curso1[i].calificaciones[i][0]+curso1[i].calificaciones[i][1]+curso1[i].calificaciones[i][2]+curso1[i].calificaciones[i][3])/4}</td>
                            
					  </tr>`
            var table = $['#myTable']
            table.append(row);
          


		}
	

    
    

