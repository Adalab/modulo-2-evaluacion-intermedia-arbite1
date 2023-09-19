'use strict'


 /* Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
  si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es
  piedra
  si el número aleatorio generado es mayor o igual que 7 el movimiento es papel
  y sino, el movimiento generado es tijera

  . Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
  computadora y pintar las pistas correspondientes en la pantalla.
  Según vayas trabajando en el ejercicio, haz nuevas versiones del mismo y sube los cambios a GitHub. De
  esta forma podremos ver cómo vas avanzando. También publica el resultado usando GitHub Pages
  (recuerda configurarlo en las preferencias del proyecto) y pon el enlace a GitHub Pages en la descripción
  del repositorio.*/
  

  const select= document.querySelector('.js-select');
  const btn= document.querySelector('.js-btn');
  const p= document.querySelector('.js-p');

  function getRandomNumber(max) { 
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
  } 
  const options = {
     Piedra: 0,
     Papel: 1, 
     Tijera: 2,
    }

function change(){
    const randomNumber = getRandomNumber (10);
    if(randomNumber<= 3){
        return 'piedra';
    } else if (randomNumber >= 7) {
        return 'papel';
    }
    else{
    
        return 'tijera';
    }
}

function result (user, computer){
    
}




function handleClick(){
    change();
}



  btn.addEventListener("click", handleClick);