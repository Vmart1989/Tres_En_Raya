let casillas = document.querySelectorAll('div');


for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("click", ficha);
}



for (let index = 0; index < casillas.length; index++) {
    casillas[index].addEventListener("mouseover", changeColor);
    casillas[index].addEventListener("mouseout", changeColor);
}

let fila1 = document.querySelectorAll(".fila1")
let fila2 = document.querySelectorAll(".fila2")
let fila3 = document.querySelectorAll(".fila3")
let columna1 = document.querySelectorAll(".columna1")
let columna2 = document.querySelectorAll(".columna2")
let columna3 = document.querySelectorAll(".columna3")
let diagonal1 = document.querySelectorAll(".diagonal1")
let diagonal2 = document.querySelectorAll(".diagonal2")



let turno = "X";
let turnoX = 0;
let turnoCirculo = 0;
let visorTurno = document.getElementById("turno_contador");
let contadorTurno = document.getElementById("contador");


function ficha(e) {
    let celda = e.target;
    siEquis = celda.classList.contains('equis') /*hay ficha x dentro*/
    siCirculo = celda.classList.contains('circulo')/*hay ficha circulo dentro*/

    if (turno == "X") {
        if (turnoX < 3) {
            if (!siEquis && !siCirculo) {
                celda.classList.add('equis');
                
                let gano = hayGanador();
                if (gano) {
                    contadorTurno.innerHTML = 'GANAN LAS EQUIS'
                    contadorTurno.classList.add('parpadeo')
                    visorTurno.innerHTML = ""
                    turnoX = 4;
                } else {
                    turnoX++
                    contadorTurno.innerHTML = 'Jugada: ' + '<br>' + turnoX
                    turno = "O";
                    visorTurno.innerHTML = turno;
                }
            }
        } else {
            if (siEquis && turnoX < 4) {
                celda.classList.remove('equis');
                turnoX--
            }

        }
    }
    else {
        if (turnoCirculo < 3) {
            if (!siEquis && !siCirculo) {
                celda.classList.add('circulo');
                
                let gano = hayGanador();
                if (gano) {
                    contadorTurno.innerHTML = 'GANAN LOS CIRCULOS'
                    contadorTurno.classList.add('parpadeo')
                    visorTurno.innerHTML = ""
                    turnoCirculo = 4;

                } else {
                    turnoCirculo++
                    turno = "X";
                    visorTurno.innerHTML = turno;
                }
            }
        } else {
            if (siCirculo && turnoCirculo < 4) {
                celda.classList.remove('circulo');
                turnoCirculo--
            }
        }
    }
}

function empezarPartida() {
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].classList.remove("equis");
        casillas[i].classList.remove("circulo");
    }
    turnoX = 0;
    turnoCirculo = 0;
    turno = "X";
    visorTurno.innerHTML = turno;
    contadorTurno.innerHTML = turnoX
}

function hayGanador() {
    let f1 = document.querySelectorAll(".fila1.equis")
    let f2 = document.querySelectorAll(".fila2.equis")
    let f3 = document.querySelectorAll(".fila3.equis")
    let c1 = document.querySelectorAll(".columna1.equis")
    let c2 = document.querySelectorAll(".columna2.equis")
    let c3 = document.querySelectorAll(".columna3.equis")
    let d1 = document.querySelectorAll(".diagonal1.equis")
    let d2 = document.querySelectorAll(".diagonal2.equis")
    let fa = document.querySelectorAll(".fila1.circulo")
    let fb = document.querySelectorAll(".fila2.circulo")
    let fc = document.querySelectorAll(".fila3.circulo")
    let ca = document.querySelectorAll(".columna1.circulo")
    let cb = document.querySelectorAll(".columna2.circulo")
    let cc = document.querySelectorAll(".columna3.circulo")
    let da = document.querySelectorAll(".diagonal1.circulo")
    let db = document.querySelectorAll(".diagonal2.circulo")

    let opciones_ganadoras = [f1, f2, f3, c1, c2, c3, d1, d2, fa, fb, fc, ca, cb, cc, da, db]

    for (let index = 0; index < opciones_ganadoras.length; index++) {
        opcion = opciones_ganadoras[index];
        if (opcion.length == 3) {
            return true;
        }
    }
    return false;
}



function changeColor(evt) {
        evt.currentTarget.classList.toggle("color");
    }

let tablero = document.getElementById('tablero');
let boton_reiniciar = document.getElementById('reinicio')
let circulo_icon = document.querySelector('.circulo')
let x_icon = document.querySelector('.equis')

function changeBoard() {
    tablero.classList.toggle('tablero2');
    circulo
}


boton_reiniciar.addEventListener("click", empezarPartida);



