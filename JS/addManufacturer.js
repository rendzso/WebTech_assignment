$(function () {
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax(
            {
                type: 'post',
                url: 'addManufacturers',
                data: $('form').serialize(),
                success: function () {
                    openManufacturer();
                    alert("Put in");

                },
                error: function () {
                    alert("Something wrooong here");
                }
            })
    })
})
