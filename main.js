$(document).ready(function(){});

function subirForm(event) {
  event.preventDefault();
  $("#mistakesform").empty();
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

  
  const nextBtn = document.querySelector("#next-btn");
  const backBtn = document.querySelector("#back-btn");
  const step1 = document.querySelector("#FormReclamo");
  const step2 = document.querySelector("#step-2");
  const summary = document.querySelector("#summary");
  

  nextBtn.addEventListener("click", function() {
    $("#summary").empty();
    const emailreclamo = document.querySelector("#emailreclamo").value;
    const NumeroPedido = document.querySelector("#NumeroPedido").value;
    const messagereclamo = document.querySelector("#messagereclamo").value;
      
    let erroresreclamo = [];

  if (emailreclamo == "" || emailreclamo == " " || emailreclamo == undefined )erroresreclamo.push("⚠ Ingrese un Email "); 

  if (NumeroPedido == "" || NumeroPedido == " " || NumeroPedido == undefined )erroresreclamo.push("⚠ Ingrese un Numero de Pedido ") ;

  if (messagereclamo == "" || messagereclamo == " " || messagereclamo == undefined )erroresreclamo.push("⚠ Ingrese un Mensaje ");

  console.log(erroresreclamo);
  
  if(erroresreclamo.length > 0){
    alert("No se puede enviar el formulario")
     erroresreclamo.forEach((elemento)=>{
      $("#summary").append(`<li> ${elemento} </li>`)
     })
  }else{
    summary.innerHTML = `Email: ${emailreclamo}<br>Numero de Pedido: ${NumeroPedido}<br>Mensaje: ${messagereclamo}`;
  }

});



  