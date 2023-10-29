
let contadorUsuario = 0;
let contadorPC = 0;

for (let vuelta = 1; vuelta <= 3; vuelta++) {
    
    let eleccionPC = "piedra";
    let eleccionUsuario = prompt("ingresa piedra , papel o tijera")

    eleccionUsuario = eleccionUsuario.toLowerCase()


    if (eleccionUsuario === eleccionPC) {

        console.log("empate")
        console.log("la pc tiene " + contadorPC + " puntos ")
        console.log("el usuario tiene " + contadorUsuario + " puntos")
       
    }
    else if (eleccionUsuario == "papel" && eleccionPC == "piedra") {

        console.log("gana el usuario")
        contadorUsuario++;
        console.log("la pc tiene " + contadorPC + " puntos ")
        console.log("el usuario tiene " + contadorUsuario + " puntos")
      
    }
    else if (eleccionUsuario == "tijera"  && eleccionPC == "piedra") {

        console.log("gana la pc")
        contadorPC++;
        console.log("la pc tiene " + contadorPC + " puntos ")
        console.log("el usuario tiene " + contadorUsuario + " puntos")
       
    } else {
        alert("opcion invalida , intenta de nuevo")
        prompt("ingresa piedra , papel o tijera")
    }


}
if(contadorUsuario > contadorPC){
    alert("Ganaste el Juego!")


}else if(contadorUsuario< contadorPC){
    alert("Perdiste el Juego!")

}else {

    alert("El juego termino empatado !")
}