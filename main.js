$(document).ready(function(){});

function subirForm(event) {
  event.preventDefault();
  let mistakes = [];
  const nombre = $("#itname").val();
  const apellido = $("#itapellido").val();
  const mail = $("#itemail").val(); 
  const telefono = $("#itTelefono").val(); 
  const mensaje = $("#itmessage").val();

  if (nombre == "" || nombre == " " || nombre == undefined )mistakes.push("⚠ Ingrese su Nombre");

  if (apellido == "" || apellido == " " || apellido == undefined )mistakes.push("⚠ Ingrese su Apellido");
        
  if (mail == "" || mail == " " || mail == undefined )mistakes.push("⚠ Ingrese un Email ") ;

  if (telefono == "" || telefono == " " || telefono == undefined )mistakes.push("⚠ Ingrese un Telefono") ;

  if (mensaje == "" || mensaje == " " || mensaje == undefined )mistakes.push("⚠ Ingrese un Mensaje") ;

  console.log(mistakes);

  if(mistakes.length > 0){
    alert ("No se puede enviar el formulario");
    $("#alerta-errores").show();
    mistakes.forEach((elemento)=>{
      console.log(elemento);
      $("#mistakesform").append(`<ul> ${elemento} </ul>`)
    })
  }
  else{
    alert ("El formulario fue enviado")
    $("#alerta-errores").hide();
  }

  };


  // var errorname = $("#errorname").val();
  // var errorapellido = $("#errorapellido").val();
  // var errormail = $("#errormail").val(); 
  // var errortelefono = $("#errortelefono").val(); 
  // var errormensaje = $("#errormensaje").val();