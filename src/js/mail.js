function sendMail(formSelector) {
  var form = $(formSelector);
  if (form[0].checkValidity()) {
    var formData = form.serialize();
    $(formSelector + '> .form-el').val('');
    form.removeClass('erorr');
    showToast();
    // $.ajax({
    //   method: 'POST',
    //   dataType: 'json',
    //   data: formData,
    //   url: 'https://formspree.io/dharness.student@gmail.com',
    //   success: function(data) {
    //     console.log('Email sent: ' + data);
    //   },
    //   error: function(data) {
    //     console.log('data ----- ');
    //     alert(JSON.stringify(data));
    //   }
    // });
  } else {
    form.addClass('erorr');
    $(formSelector + '> .email-input').focus();
  }
}
