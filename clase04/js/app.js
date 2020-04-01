console.log("10 Numeros Aleatorios");

var origen = [];
for(i = 0; i<10; i++)
	{
		origen[i] = Math.floor(Math.random()*100);
	}
	console.log(origen)
//
var destino = [];
destino = origen
console.log("Lista Ordenada")
console.log(destino.sort(function (antes, despues){
		return antes-despues;
	}));
	
