var paises = ["Chile","Argentina","Brasil","España","Grecia","Kenia","Marruecos"];

//Ciclo For
for(let i=0; i<paises.length ;i++){
    document.write("<p>"+paises[i]+"</p>");
}

//Ciclo While
var i=0;
while(i<paises.length){
    document.write("<p>"+paises[i]+"</p>");
    i++;
}


//Ciclo Do While
var i=0;
do{
    document.write("<p>"+paises[i]+"</p>");
    i++;
}while(i<paises.length);