
$(getNames());

$(function () {
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax(
            {
                type: 'post',
                url: 'addCar',
                data: $('form').serialize(),
                success: function () {
                    getCar();
                    alert("Put in");
                },
                error: function () {
                    alert("Something WROOONG here");
                }
            })
    })
})

function getNames() {
    $.getJSON('manufacturerNames', function (data) {
        var output = [];

        $.each(data, function (key, value) {
            output.push('<option value="' + value + '">' + value + '</option>');

        });

        $("#TheNames").html(output);
    });
}


