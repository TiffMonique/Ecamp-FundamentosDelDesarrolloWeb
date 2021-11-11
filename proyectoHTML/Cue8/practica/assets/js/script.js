//filtro de posicion
$(document).ready(function () {
    console.log($('ul.lista > li > a:first').html());//Esto nos devuelve el elemento 1
    console.log($('ul.lista > li > a:last').html());//Esto nos devuelve el elemento 5

});


//filtros hijos
$(document).ready(function () {
    console.log($('ul li:last-child').html());//elemento 5

});

//elementos form
$(document).ready(function () {
    $("#boton").click(function () {
        console.log($("input[type='radio']:checked").val());
    })

    //Cuando se ponga el cursor sobre el elemento a este se va a esconder
    $("a").hover(function () {
        $(this).hide();
    }, function () {
        $(this).show();
    })

var elementosP = $("p").toArray();
console.log(elementosP);

var colores =["blue","green","red","orange"];

$("p").each(function(i,elemento){
    $(elemento).css("color", colores[i]).click(function(){
        $(this).css("color","black");
    })

})


});

$(document).ready(function () {
    console.log("Hola mundo");
});

$(document).ready(function () {
    console.log($('ol:eq(1) > li:eq(2) > a').html());//Esto nos devuelve el elemento 1
 

});
