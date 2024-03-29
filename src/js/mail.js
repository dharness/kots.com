function sendMail(formSelector) {
  var form = $(formSelector);
  if (form[0].checkValidity()) {
    var formData = form.serialize();
    $(formSelector + "> .form-el").val("");
    form.removeClass("erorr");
    $.ajax({
      method: "POST",
      dataType: "json",
      data: formData,
      url: "https://formspree.io/f/dharness.student@gmail.com",
      success: function (data) {
        console.log("Email sent: " + data);
      },
      error: function (data) {
        console.log(JSON.stringify(data));
      },
    });
  } else {
    form.addClass("erorr");
    $(formSelector + "> .email-input").focus();
  }
}
