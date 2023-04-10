$(document).ready(function(){});

function subirForm(event) {
  event.preventDefault();
  var errorname = $("#errorname").val();
  var errorapellido = $("#errorapellido").val();
  var errormail = $("#errormail").val(); 
  var errortelefono = $("#errortelefono").val(); 
  var errormensaje = $("#errormensaje").val();

  $("input").each(function(){
    if ($(this).val === "" || $(this).val === " " || $(this).val === undefined) {
      $(".errores").show
    }

    })
  };
