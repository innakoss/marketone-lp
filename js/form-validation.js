  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Value must not equal arg.");
$(document).ready(function () {
  $("form[name='contact-us']").validate({
    errorClass: 'form-error',
    validClass: 'success',
    errorElement: 'span',
    highlight: function(element, errorClass, validClass) {
      $(element).parents("div.form-group").addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".form-error").removeClass(errorClass).addClass(validClass);
    },
    rules: {
      firstname: "required",
      lastname: "required",
      title: "required",
      phone: "required",
      select: { 
        valueNotEquals: "default" 
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      title: "Please enter your title",
      phone: "Please enter your phone",
      email: "Please enter a valid email address",
      select: "Please select an item!"
    },
    // Make sure the form is submitted to the destination defined
    submitHandler: function(form) {
      form.submit();
    }
  });
});