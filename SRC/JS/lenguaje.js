
const cuadro = document.getElementsByClassName("cuadro");
const mensaje = document.getElementById("mensaje");
const reiniciar = document.getElementById("reiniciar");

let jugadorActual = 'X';
let juegoTerminado = false;
let tablero = [];
let cuadros = [0,1,2,3,4,5,6,7,8];


for (let i = 0; i < cuadros.length; i++) {
  cuadros[i].innerHTML=i;
  cuadro[i].addEventListener("click",function () {
    cuadro[i].textContent = "O";
     });

}



reiniciar.addEventListener('click',function () {
    
});








