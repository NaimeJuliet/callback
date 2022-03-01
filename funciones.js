/*funcion basica(jomar)
function sumar(num1,num2,num3){
    return num1+num2+num3
}
console.log (sumar(5,4,7))
*/



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