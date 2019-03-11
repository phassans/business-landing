$(document).ready(function () {

    var form = $('#form'),
        email = $('#email'),
        name = $('#name'),
        businessOwner = $('#businessOwner'),
        restaurant = $('#restaurant'),
        city = $('#city'),
        images = $('#images'),
        description = $('#description'),
        info = $('#info'),
        success = $('#success'),
        submit = $("#submit");

    /*form.on('input', '#email', '#name', '#businessOwner', '#restaurant', '#city', function () {
        alert("hi");
        $(this).css('border-color', '');
        info.html('').slideUp();
    });*/

    submit.on('click', function (e) {
        e.preventDefault();
        var form = $('#form')[0];
        var formData = new FormData(form);
        info.html('').slideUp();
        success.html('').slideUp();
        formData.append("businessOwner", businessOwner.val());
        if (validate()) { 
            $.ajax({
                type: "POST",
                url: "https://www.itshungryhour.com/api/v1/hhsubmit",
                enctype: 'multipart/form-data',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    success.html('Thank you for sharing this happy hour! Our team is excited to add this to our happy hour app. Expect to see it up and running within 24 hours!').css('color', 'green').slideDown();
                },
                error: function (e) {
                    info.html('Failed to submit Happy Hour at the moment.').css('color', 'red').slideDown();
                },
            });
        }
    });

    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ($.trim(email.val()) != "" && !regex.test(email.val())) {
            email.css('border-color', 'red');
            valid = false;
        } else {
            email.css('border-color', '');
        }
        if ($.trim(restaurant.val()) === "") {
            restaurant.css('border-color', 'red');
            valid = false;
        } else {
            restaurant.css('border-color', '');
        }
        if ($.trim(city.val()) === "") {
            city.css('border-color', 'red');
            valid = false;
        } else {
            city.css('border-color', '');
        }
        if ($.trim(images.val()) === "") {
            images.css('border-color', 'red');
            valid = false;
        } else {
            images.css('border-color', '');
        }

        if (!valid) {
            info.html('Please fix the above errors to submit happy hour.').css('color', 'red').slideDown();
        }

        return valid;
    }

});