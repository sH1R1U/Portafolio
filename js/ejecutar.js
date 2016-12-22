function redireccionar(){
  location.href="index.html";
} 

function playSound(){
	var audio = document.getElementById('alerta')
	$('#alerta').attr('src','media/metal_gear_solid_exclamacion.mp3');
	audio.play();
	setTimeout (redireccionar, 1000);
}