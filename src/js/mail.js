function signupMail() {
  var formData = $('#message-form').serialize();
  alert(formData);
  $.ajax({
    method: 'POST',
    url: 'https://formspree.io/dharness.student@gmail.com',
    data: formData,
    success: function(data) {
      $('#message-form').reset();
    },
    dataType: 'json',
    success: function(data) {
      alert(JSON.stringify(data));
    },
    error: function(data) {
      alert(JSON.stringify(data));
    }
  })
}
