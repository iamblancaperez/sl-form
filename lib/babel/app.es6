var $ = require('jquery')
import FormValidator from "./form_validator.es6"
$(document).ready(() => {
  var theCutestFormEver = new FormValidator('myForm')
  theCutestFormEver.setChange()
})