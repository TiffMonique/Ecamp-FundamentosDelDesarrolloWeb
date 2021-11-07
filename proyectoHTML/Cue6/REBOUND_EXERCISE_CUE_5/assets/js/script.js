//1. Crea un arreglo que contenga los siguientes datos: “verde”, “amarillo”, “rojo”, “azul”, “morado”, “naranjo”

var colores = ["verde","amarillo", "rojo","azul","morado", "naranjo"];
console.log(colores);

//2. Elimina el primer elemento del arreglo. 
colores.shift();
console.log(colores);

//3. Agrega el elemento “celeste” al final del arreglo.
colores.push('celeste');
console.log(colores);

//4. Intercambia de posición “amarillo” y “morado”.
let intercambiar = (arr, x, y) => {
    var temp = arr[x];
    arr[x] = arr[y];
      arr[y] = temp;
}

intercambiar(colores , 0,3);
console.log(colores);

//5. Imprime el largo del arreglo.
var largoArreglo = colores.length;
console.log('El largo del arreglo es: '+largoArreglo);

//6. Imprime el índice del elemento “rojo”. 
var element ='rojo';
var idx = colores.indexOf(element);
console.log('El elemento se encuentra en la posicion '+ idx+ ' del arreglo');


//7. Crea un objeto que contenga los colores primarios y secundarios, agrupados según su categoría. 
var colores_pri_sec =[];
colores_pri_sec.push({
    primarios:["Rojo","Azul","Amarillo"],
    secundarios:["Naranjo","Verde","Morado"],
});

colores_pri_sec.forEach(colors=>{
    document.write("COLORES PRIMARIOS: ");
    colors.primarios.forEach(d=>{document.write("<li>"+d+"</li>");
    });
 
    document.write("<br/>");
    document.write("COLORES SECUNDARIOS: ");
    colors.secundarios.forEach(d=>{document.write("<li>"+d+"</li>");
    });
        
});
       
