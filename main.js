$(document).ready(function(){

  function SubirForm(event) {
    event.preventDefault
    console.log ("Hola Mundo")
  }

   $("#EnviarBoton").click(function(){
    var nombre = $("#itname").val();
    var apellido = $("#itapellido").val();
    var mail = $("#itemail").val(); 
    var telefono = $("#itTelefono").val(); 
    var mensaje = $("#itmessage").val();

    if (nombre == "" ){
      $("#errorname").fadeIn();
      return false;
    } else {
        $("#errorname").fadeOut();
    }
    if (apellido == "" ) {
          $("#errorapellido").fadeIn();
          return false;
        }else{
          $("#errorapellido").fadeOut();
        }
    if (mail == "" ) {
          $("#errormail").fadeIn();
          return false;
        }else{
          $("#errormail").fadeOut();
        }
    if (telefono == "" ) {
          $("#errortelefono").fadeIn();
          return false;
        }else{
          $("#errortelefono").fadeOut();
        }
    if (mensaje == "" ) {
          $("#errormensaje").fadeIn();
          return false;
        }else{
          $("#errormensaje").fadeOut();
        }

   });
  });
