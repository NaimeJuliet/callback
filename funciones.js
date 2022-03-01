function iniciar(){
    console.log("Estoy iniciando el programa")

}

function procesar(){

    setTimeout (function(){
        console.log("Estamos procesando el programa")
    },3000)
   
}

function finalizar(){
    console.log("Estamos finalizando el programa")
}

//llamando a mis funciones
iniciar()
procesar()
finalizar()