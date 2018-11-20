$(document).ready(function () {
    $("#content").load("home.html");
    openCar();
    openManufacturer();

    $.each($('.menuButton'), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();

            if ($(this).find('a').attr("href") !== "index.html") {
                $("#content").load($(this).find('a').attr("href"));
            }
            else {
                open("index.html", "_self");
            }
        })
    })
});

function openCar() {
    $.getJSON('cars', function (data) {
        var table = $('<table class="CarTable"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Year</th><th>Available</th><th>Horsepower</th></tr>");

        $.each(data, function (key, value) {
                var row = $('<tr class="notFirstRow"></tr>');
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

        $("#DatabaseContentCars").html(table);

    })

}

function openManufacturer() {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table class="ManufacturerTable"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th></tr>");

        $.each(data, function (key, value) {
                var row = $('<tr class="notFirstRow"></tr>');
                var nameCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
                var countryCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.country + '</td>');
                var foundedCell = $('<td onclick="ManufacturerCookie(' + "'" + value.name + "'" + ')">' + value.founded + '</td>');
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row);

            }
        );

        $("#DatabaseContentManufacturers").html(table);

    })

}