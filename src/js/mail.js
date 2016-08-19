function sendMail(formSelector) {
  var form = $(formSelector);
  if (form[0].checkValidity()) {
    var formData = form.serialize();
    alert(formData);
    $('.form-el').val('');
    form.removeClass('erorr');
    $.ajax({
      method: 'POST',
      dataType: 'json',
      data: formData,
      url: 'https://formspree.io/dharness.student@gmail.com',
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        alert(JSON.stringify(data));
      }
    });
  } else {
    form.addClass('erorr');
    $(formSelector + '> .email-input').focus();
  }
}
