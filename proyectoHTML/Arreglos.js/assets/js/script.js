var peliculas =[];
peliculas.push({
    titulo:"Monsters, Inc.",
    director:["Pete Docter"],
    duracion:92,
    protagonistas:["John Goodman","Billy Crystal","Sissy Spacek","Mary Gibbs","Steve Buscemi","James Coburn","Jennifer Tilly","Bob Peterson","John Ratzenberger","Frank Oz","Bonnie Hunt","Fe Valero"],
    estreno:2001
});

peliculas.push({
    titulo:"Up",
    director:["Pete Docter","Bob Peterson"],
    duracion:96,
    protagonistas:["Edward Asner","Christopher Plummer","Jordan Nagai","Pete Docter","Bob Peterson"],
    estreno:2009
});

peliculas.push({
    titulo:"Inside Out",
    director:["Pete Docter","Ronnie del Carmen"],
    duracion:94,
    protagonistas:["Amy Poehler","Phyllis Smith","Richard Kind","Bill Hader","Lewis Black","Mindy Kaling","Kaitlyn Dias","Diane Lane","Kyle MacLachlan"],
    estreno:2015
});

peliculas.push({
    titulo:"Toy Story",
    director:["John Lasseter"],
    duracion:81,
    protagonistas:["Tom Hanks","Tim Allen","Don Rickles","Jim Varney","Wallace Shawn","John Ratzenberger","Annie Potts","John Morris","Erik Von Detten","Laurie Metcalf","R.Lee Erney","Sarah Freeman"],
    estreno:1995
});


peliculas.forEach(pelicula => document.write("<P>" +pelicula.titulo + "</P>"));

peliculas.forEach(function(pelicula){
    return document.write("<p>"+pelicula.titulo+"</p>")
});


peliculas.forEach(pelicula=>{
    document.write("<p>"+pelicula.titulo+"</p>");
    document.write("<ul>");
    document.write("<li>Director(es): <ul>");
    pelicula.director.forEach(d=>{document.write("<li>"+d+"</li>");
    });
        document.write("</ul></li>");
        document.write("<li>Duración: "+pelicula.duracion+" minutos</li>");
        document.write("<li>Protagonistas: <ul>");
        pelicula.protagonistas.forEach(p=>{
            document.write("<li>"+p+"</li>");
        });
        document.write("</ul></li>");
        document.write("<li>Año de estreno: "+pelicula.estreno+"</li>");
        document.write("</ul>");
    });