
const cuadro = document.getElementsByClassName("cuadro");
const mensaje = document.getElementById("mensaje");
const reiniciarbtn = document.getElementById("reiniciar");
let jugadorActual = true;
let juegoTerminado = false;
let btnDisponibles = []

// const jugadas =[
//     [0,1,2],[3,4,5],[6,7,8],
//     [0,3,6],[1,2,5],[3,4,8],
//     [0,4,8],[2,4,6]
// ];

for (let index = 0; index < cuadro.length; index++) {

    btnDisponibles.push(cuadro[index])

    
    cuadro[index].addEventListener("click", function () {



        if (cuadro[index].textContent.trim() === "") {
            cuadro[index].textContent = "X";

            btnDisponibles = btnDisponibles.filter(btn => btn != cuadro[index])
            console.log(btnDisponibles);

            bot ()
        }

        // if (juegoTerminado == false && cuadro.textContent === "") {
        //     casilla.textContent = jugadorActual;
        //     cambiarTurno();
        //     verificarGanador();
        // }
    });
};

function bot () {

    let random = btnDisponibles[Math.floor(Math.random() * btnDisponibles.length)]
    console.log(random);

    random.textContent = "O"

    btnDisponibles = btnDisponibles.filter(btn => btn != random)

}   




function cambiarTurno() {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    mensaje.textContent = "Turno del jugador" + jugadorActual;
}

function verificarGanador() {
    
}