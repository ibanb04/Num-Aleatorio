var max = 14;
var min = 1;
 

aleatorio_intervalo(max, min);
 
 // Función que calcula un número aleatorio con un intervalo
 function aleatorio_intervalo(maximo, minimo)
 {
  var numAleatorio = Math.random();  // devolver un número entre 0 y 1
  numAleatorio = parseInt(numAleatorio*(maximo-minimo+1)+minimo);
  
  document.getElementById('resultado').innerHTML="&nbsp"+numAleatorio;
 }

 function generar() {

 	var maxi=document.getElementById('max').value;
 	var mini=document.getElementById('min').value;
 	if (maxi==''&&mini=='') {
 	aleatorio_intervalo(max, min);
 	}else if (maxi<=mini) {
	document.getElementById('resultado').innerHTML="&nbsp&nbspError";
 }else
 	aleatorio_intervalo(maxi,mini);
 	
 }
