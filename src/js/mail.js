function sendMail(formSelector) {
  var form = $(formSelector);
  console.log(form[0].checkValidity());
  if (form[0].checkValidity()) {
    var formData = form.serialize();
    alert(formData);
    $('.form-el').val('');
    form.removeClass('erorr');
  } else {
    form.addClass('erorr');
    $('.email-input').focus();
  }
  // $.ajax({
  //   method: 'POST',
  //   dataType: 'json',
  //   data: formData,
  //   url: 'https://formspree.io/dharness.student@gmail.com',
  //   success: function(data) {
  //     console.log(data);
  //   },
  //   success: function(data) {
  //     alert(JSON.stringify(data));
  //   },
  //   error: function(data) {
  //     alert(JSON.stringify(data));
  //   }
  // });
}
