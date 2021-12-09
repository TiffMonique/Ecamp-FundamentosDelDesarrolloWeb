/*$("#LoadWebApi").click(function () {

    $.ajax({
        type: "GET",
        url: "https://digimon-api.herokuapp.com/api/digimon",
        dataType: "json",

        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.name + "</td>" +
                    "<td>" + item.level + "</td>" +
                    "</tr>";

                $("#tabla>tbody").append(row);

            });
        },

    });


});*/

$(document).click(function () {

    $.ajax({
        type: "GET",
        url: "https://digimon-api.herokuapp.com/api/digimon",
        dataType: "json",

        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.name + "</td>" +
                    "<td>" + item.level + "</td>" +
                    "</tr>";

                $("#tabla>tbody").append(row);

            });
        },

    });


});
