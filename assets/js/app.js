//declarar arry, que represente asientos, con false estan desocupados y true ocupados

var aerolineSeats = [
       false,
       false,
       false,
       false,
       false,
       false,
       false,
       false,
       false,
       false
];

//contador de asientos ocupados

var busySeats = 0;

var pintarAsiento = function(array){
  var contenedorAsientos = document.getElementById('seats');
 
  for (var i = 0; i < array.length; i++) {
  	var seat = document.createElement('div');
  	seat.className = 'seats';

//del primer al cuarto(posicion 3) es primera clase, del 4 al decimo e economico
    if (i < 4) {
    	seat.style.background ='red';
    }else{
    	seat.style.background = 'yellow';
    }
    contenedorAsientos.appendChild(seat);
  }
};

var reserve = function(){
	var btn = document.getElementById('btn');
	btn.addEventListener('click', chooseZone);
};

var chooseZone = function(){
	var choice = prompt('Que zona prefieres \n 1.Primera clase \n 2.Economica \n \n Porfavor ingresa el numero de tu preferencia');
  
   if (choice == 1) {
   	 checkFirstClass();
   }else if (choice == 2) {
   	checkEconomicClass();
   }else{
   	alert('Porfvor ingrese una opcion valida');
   }
};

var checkFirstClass = function(){
	var zone = 'primera clase';

	for (var index = 0; index < 4; index++) {
		if (aerolineSeats[index] ==false) {
			aerolineSeats[index] = true;
			reserveSeat(index);
			pintarAsiento(index,zone);
			busySeats++;
			//rompemos el ciclo con break
			break;
		}else if (index == 3 && aerolineSeats[index] == true) {
              reasingEconomicZone(zone);
		}
	}
};

var checkEconomicClass = function(){
	var zone = 'Ecominica';

	for (var index = 4; index < 10; index++) {
		if (aerolineSeats[index] ==false) {
			aerolineSeats[index] = true;
			reserveSeat(index);
			pintarAsiento(index,zone);
			busySeats++;
			//rompemos el ciclo con break
			break;
		}else if (index == 9 && aerolineSeats[index] == true) {
              reasingPrimeraZone(zone);
		}
	}

};

var reserveSeat = function (indexToPrint) {
	var seat = document.getElementsByClassName('seats');
	seat[indexToPrint].textContent = 'ocupado';
};

var reasingEconomicZone = function(zone){
	if (busySeats == 10) {
		noSeat();
		nextFlight();
	}else{
         var reasign = confirm('No quedan asientos :( \n quieres reservar en Clase economica?');
         if (reasign == true) {
  	      checkEconomicClass();
         }else{
  	      nextFlight();
  	 }
  }
};

var reasingPrimeraZone =function(zone){
	if (busySeats == 10) {
		noSeat();
		nextFlight();
	}else{
	   var reasign = confirm('No quedan asientos :( \n quieres reservar en Primera clase?');
       if (reasign == true) {
  	    checkFirstClass();
         }else{
  	      nextFlight();
  	}
  }
};

var nextFlight = function(){
 alert('Nuestro proximo vuelo es dentro de 3 horas');
};
/*
var pintarAsiento = function(index, zone){
  var conteinerTicket = document.getElementById('ticket');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement ('p');
  var reservedSeat = document.createElement ('p');
  var zonaClass = document.createElement ('p');
  title.textContent = 'PASE DE ABORDAR';
  reservedSeat.textContent = 'n° de asiento:' + (index + 1);
  zonaClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeat);
  ticket.appendChild(zonaClass);
  conteinerTicket.appendChild(ticket);
};*/

var noSeat = function(){
    alert('Lo sentimos, ya no hay asientos disponibles en este avion');
};

pintarAsiento(aerolineSeats);
reserve();