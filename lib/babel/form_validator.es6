var $ = require('jquery')
class FormValidator{
  constructor(form) {
    this.form = document.getElementById(form)
    this.submit = $(this.form).find("button.btn")
    this.submit.click(this.submitHandler.bind(this))
  }
  setChange() {
    for (var i = 0; i < this.form.elements.length; i++){
      $(this.form.elements[i]).change((e) => {
        this.validate($(event.target))
      })
    }
  }
  validate(input) {
    var isValid
    removeMessages(input)
    if(input.attr('type') == "email"){
      if(this.validateEmail(input.val())){
        this.messageHandler(input, "Perfecto", "valid")
        isValid = true
      }else{
        this.messageHandler(input, "Debes ingresar un email válido", "invalid")
        isValid = false
      }
    }
    if(input.attr('type') == "radio"){
      if(input.length>0){
        this.messageHandler(input, "Buena elección", "valid")
        isValid = true
      }else{
        this.messageHandler(input, "Debes seleccionar al menos una opción", "invalid")
        isValid = false
      }
    }    
    if(input.is("select")) {
      if(input.length == 1){
        this.messageHandler(input, "La mejor opción!", "valid")
        isValid = true
      }else{
        this.messageHandler(input, "Debes seleccionar al menos una opción", "invalid")
        isValid = false
      }
    }
    return isValid
  }
  validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  messageHandler(input, msg, klass){
    $( input.closest(".input-control") ).append( "<div class='"+klass+"'>"+msg+"</strong>" );    
  }
  removeMessages(input){
    input.closest(".input-control").find(".valid").remove()
    input.closest(".input-control").find(".invalid").remove()
  }
  submitHandler(event){
    var formValid = true
    event.preventDefault()
    for (var i = 0; i < (this.form.elements.length) - 1; i++){
      formValid = formValid && this.validate($(this.form.elements[i]))
    }
    if(formValid){
      // Hacer llamada ajax
    }
  }
}

export default FormValidator;