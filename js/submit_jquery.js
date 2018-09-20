$(document).ready(function() {
    // Submit form with id function.
    $("#btn_id").click(function() {
        var name = $("#txtName").val();
        var email = $("#txtEmail").val();
        var subject = $("#txtsubject").val();
        var message = $("#txtmessage").val();
        if (validation()) // Calling validation function.
        {
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_WARNING,
                title: 'HungryHour',
                message: 'Thank you for contacting us! We will get in touch with you as soon as possible.',
                buttons: [{
                    label: 'Close',
                 action: function(dialog) {
                     dialog.close();
                 }
                }],
                cssClass: 'bootstrap-dialog'
            });
            $("#txtName").val("");
            $("#txtEmail").val("");
            $("#txtsubject").val("");
            $("#txtmessage").val("");
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
                 action: function(dialog) {
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
                 action: function(dialog) {
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