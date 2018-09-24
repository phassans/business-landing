$(document).ready(function () {
    // Submit form with id function.
    $("#btn_id").click(function () {
        var name = $("#txtName").val();
        var email = $("#txtEmail").val();
        var subject = $("#txtsubject").val();
        var message = $("#txtmessage").val();
        if (validation()) // Calling validation function.
        {
            var contactUS = {
                name: name,
                email: email,
                subject: subject,
                comments: message
            }

            $('#target').html('sending..');

            $.ajax({
                url: 'https://www.itshungryhour.com/api/v1/contactus',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_WARNING,
                        title: 'HungryHour',
                        message: 'Thank you for contacting us! We will get in touch with you as soon as possible.',
                        buttons: [{
                            label: 'Close',
                            action: function (dialog) {
                                dialog.close();
                            }
                        }],
                        cssClass: 'bootstrap-dialog'
                    });
                    $("#txtName").val("");
                    $("#txtEmail").val("");
                    $("#txtsubject").val("");
                    $("#txtmessage").val("");
                },
                error: function (request, status, error) {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_WARNING,
                        title: 'Error',
                        message: 'Sorry for the inconvience, you cannot reach hungry hour at this moment. Please try again later.',
                        buttons: [{
                            label: 'Close',
                            action: function (dialog) {
                                dialog.close();
                            }
                        }],
                    });
                },
                data: JSON.stringify(contactUS)
            });
        }
    });

    // Name and Email validation Function.
    function validation() {
        var name = $("#txtName").val();
        var email = $("#txtEmail").val();
        var message = $("#txtmessage").val();
        var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (name === '' || message === '') {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_WARNING,
                title: 'Error',
                message: 'Please fill name and message!',
                buttons: [{
                    label: 'Close',
                    action: function (dialog) {
                        dialog.close();
                    }
                }],
            });
            return false;
        } else if (email != '' && !(email).match(emailReg)) {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_WARNING,
                title: 'Error',
                message: 'Invalid Email!',
                buttons: [{
                    label: 'Close',
                    action: function (dialog) {
                        dialog.close();
                    }
                }],
            });
            return false;
        } else {
            return true;
        }
    }
});