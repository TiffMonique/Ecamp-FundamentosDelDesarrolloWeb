
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://digimon-api.vercel.app/api/digimon",
        dataType: "json",
        async: true,
        success: function (data) {
            console.log(data);

            var contenido = document.querySelector("#contenido");

            contenido.innerHTML = " ";
            for (let i = 0; i < data.length; i++) {
                //console.log(data[i].name);
                contenido.innerHTML += `
          <tr>
            <td> <a href=${data[i].img} target=_blank> ${data[i].name} </a>  </td>
            <td>${data[i].level}</td>
          </tr>
          `;
            }
            $('#myTable').DataTable();

        },
    });

});
