/*function funcionPrincipal(callback){

    setTimeout(function(){
        console.log("Soy la funcion ppal")
        callback()
    },2000)
   
}

funcionPrincipal(function(){
    console.log("soy la segunda funcion")
})*/

//declaracion de la funcion ppal
function sumar(num1,num2,callback){

    setTimeout(function(){
        let suma=num1+num2
        //llamar al callback
        callback(num1,num2,suma)
    },5000)
}
//llamado de la funcion principal
sumar(5,5, function (num1,num2,suma){//cuerpo del callback

    //muestro la suma
    console.log(`La suma es: ${suma}`)
    let resta=num1-num2

    //calcula la resta
    console.log(`La resta es: ${resta}`)
})