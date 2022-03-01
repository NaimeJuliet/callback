function funcionPrincipal(callback){

    setTimeout(function(){
        console.log("Soy la funcion ppal")
        callback()
    },2000)
   
}

funcionPrincipal(function(){
    console.log("soy la segunda funcion")
})