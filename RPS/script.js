let opciones = ["Piedra", "Papel", "Tijera"];




// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================


// La función recibe la opción del jugador

function jugar(jugador){

    // =====================================================
    // RANDOM
    // =====================================================

    // Math.random genera un número aleatorio

    // Multiplicamos por 3 porque tenemos:
    // 0
    // 1
    // 2

    // Math.floor elimina decimales

    let numeroRandom = Math.floor(Math.random() * 3);



    // =====================================================
    // COMPUTADORA
    // =====================================================

    // La computadora elige usando el array

    let computadora = opciones[numeroRandom];



    // =====================================================
    // VARIABLE RESULTADO
    // =====================================================

    let mensaje = "";
}
