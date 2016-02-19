# sl-form
**META:** Implementar un servidor web a partir de Express o Koa con los siguientes features:

1. Ruta GET "/": debe mostrar un formulario con las siguientes características:
  * Contendrá 3 inputs: Email (texto), Color: verde y azul (radio), Numero: una lista del 1 al 3 (select)
  * Se deben validar los inputs de manera dinámica (sin recargar la pagina):
    * Email debe validar que es un email valido
    * Color debe validar que hay UNA opción seleccionada y la misma corresponde a una de las opciones ofrecidas 
    * Numero debe validar que hay UNA opción seleccionada y la misma corresponde a uno de los números ofrecidos
* El botón para enviar el formulario tiene las siguientes características:
    * No hace el envío si los campos no son validos y esto se le informa al usuario de manera adecuada
    * El envio de los datos se hará con AJAX a la ruta PUT "/user"
    * Una vez se reciba la respuesta del request AJAX, se debe informar el resultado al usuario de manera adecuada

2. Ruta PUT "/user" es un endpoint con las siguientes características:
recibe el objeto json enviado por el formulario con AJAX, vuelve a validar los datos y responde con JSON:
  *{ status: "Valido!" } si los datos recibidos son validos
  *{ status: "Error" } si los datos son inválidos
