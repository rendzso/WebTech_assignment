$(document).ready(function () {
    $("#content").load("home.html");

    $.each($('.menuButton'), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();

            if ($(this).find('a').attr("href") !== "index.html") {
                $("#content").load($(this).find('a').attr("href"));
                if ($(this).find('a').attr("href") == "home.html"){
                }
            }
            else {
                open("index.html", "_self");
            }
        })
    })
});

function openCar() {
    $.getJSON('cars', function (data) {
        var table = $('<table></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Year</th><th>Available</th><th>Horsepower</th></tr>");

        $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td >' + value.name + ' </td>');
                var consumptionCell = $('<td>' + value.consumption + '</td>');
                var colorCell = $('<td>' + value.color + '</td>');
                var manufacturerCell = $('<td>' + value.manufacturer + '</td>');
                var yearCell = $('<td>' + value.year + '</td>');
                var availableCell = $('<td>' + value.available + '</td>');
                var horsepowerCell = $('<td>' + value.horsepower + '</td>');

                row.append(nameCell);
                row.append(consumptionCell);
                row.append(colorCell);
                row.append(manufacturerCell);
                row.append(yearCell);
                row.append(availableCell);
                row.append(horsepowerCell);
                table.append(row);

            }
        );

        $("#DatabaseContentManufacturers").empty();
        $("#DatabaseContentCars").html(table);

    })

}

function openManufacturer() {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th></tr>");

        $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
                var countryCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.country + '</td>');
                var foundedCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.founded + '</td>');
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row);

            }
        );

        $("#DatabaseContentCars").empty();
        $("#DatabaseContentManufacturers").html(table);

    })

}


function menufunction() {
    document.getElementById("menuBar").classList.toggle("show");
    document.getElementById("banner").classList.toggle("place");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.menuButton a') ) {

        var dropdowns = document.getElementsByClassName("dropclass");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        var dropdowns2 = document.getElementsByClassName("banner");
        var j;
        for (j = 0; j < dropdowns2.length; j++) {
            var openDropdown2 = dropdowns2[j];
            if (openDropdown2.classList.contains('place')) {
                openDropdown2.classList.remove('place');
            }
        }
    }
}

function CarLoad() {

    if ($("#DatabaseContentCars").is(':empty')) {
        openCar();
    }
    else {
        $("#DatabaseContentCars").empty();
    }

}

function ManufacturerLoad() {

    if ($("#DatabaseContentManufacturers").is(':empty')) {
        openManufacturer();
    }
    else {
        $("#DatabaseContentManufacturers").empty();
    }

}
