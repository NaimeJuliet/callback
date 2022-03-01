function recibirUsuario(nombre,edad,pass,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            edad:edad,
            password:pass,
        }
        callback(usuario)

    },3000)
}
recibirUsuario("Naime",15,"0001ñlk",function(usuario){
    if (usuario.edad>=18){
        console.log(`Bienvenido ${usuario.nombre}`)
    }
    else{
        console.log(`Lo siento eres menor de edad ${usuario.nombre} y no puedes acceder`)

    }
})