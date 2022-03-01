function almacenar(num1,num2,num3,num4,num5,callback){
    let numeros=Array(num1,num2,num3,num4,num5)
    callback(numeros)    
}
almacenar(1,1,1,1,1,function(numeros){
    let contador=0
    numeros.forEach(function(numero){
        contador=contador+numero
    })
    console.log(`sumatoria es : ${contador}`)

})
  