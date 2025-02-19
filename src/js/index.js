const cuadro = document.getElementsByClassName("cuadro");
const reiniciar = document. getElementById("reiniciar");

let disponibles = [];
let celdasTotal= [];
let resta= [];
let juego = true;

let puntuaciones = JSON.parse(localStorage.getItem("puntaciones"))||[];
  
let victoriasJugador = 0;
let victoriasComputadora = 0;
let empates = 0;

for (let index = 0; index < cuadro.length; index++) {
  const element = cuadro[index];
  disponibles.push(index);
  console.log(disponibles);
  
  

    element.addEventListener("click",function () {
      if (juego ==true) {
        if (element.textContent === ""){
            element.textContent = "X"
            celdasTotal.push(index); 
            console.log(celdasTotal);
            
            resta = disponibles.filter(el => !celdasTotal.includes(el));
            console.log(resta);
            
          bot()
        }

      }
      
    })
    
  }

  function bot() {
    let cuadroRandom =resta[Math.floor(Math.random()*resta.length)];
    console.log(cuadroRandom);
    
    if (cuadroRandom  == undefined) {
      combinacionesGanadoras ();
    }
    else{
      cuadro[cuadroRandom].textContent = "0";
      celdasTotal.push(cuadroRandom); 
      console.log (disponibles)
      resta = disponibles.filter(el => !celdasTotal.includes(el));
      combinacionesGanadoras ()
    }
    
  }

  function combinacionesGanadoras() {
    let ganadoras= [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
    ];

  for (let combinaciones of ganadoras) {
    if (cuadro[combinaciones[0]].textContent== "X" && cuadro[combinaciones[1]].textContent== "X" && cuadro[combinaciones[2]].textContent== "X"){
      alert("partida ganada por X!")
      juego = false;
      victoriasJugador ++;
      actualizarContador();

    }

    if (cuadro[combinaciones[0]].textContent== "0" && cuadro[combinaciones[1]].textContent== "0" && cuadro[combinaciones[2]].textContent== "0"){
      alert("partida ganada por 0!")
      juego = false;
      victoriasComputadora ++;
      actualizarContador();

    }
   }
 if (resta.length == 0 && juego == true) {
  alert ("empate");
  juego = false;
  empates++;
  actualizarContador();
}

  function guardarPuntuacion() {
  localStorage.setItem("puntuaciones",JSON.stringify(puntuaciones));

}

  function actualizarContador() {
   document.getElementById("victoriasJugador").textContent = victoriasJugador;
   document.getElementById("victoriasComputadora").textContent = victoriasComputadora;
   document.getElementById("empates").textContent = empates;

 }
 reiniciar.addEventListener("click",function () {
  localStorage.clear();
  location.reload();
 });

};