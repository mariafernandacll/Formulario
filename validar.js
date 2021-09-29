function validar_formulario (){
    //1.Accedemos a los elementos del formulario
    var usuario = document.getElementById('username');
    var correo = document.getElementById('email');
    var contraseña = document.getElementById('password');
    var mensaje = "";

    //2.Aplicar validaciones
    if (!usuario.checkValidity()) {
        mensaje += "Usuario requerido y longitud minima 8 caracteres";
    }
           
    if (!correo.checkValidity()) {
        mensaje += "Correo requerido con formato xxx@xxx.xx";
    }
        
    if (!contraseña.checkValidity()) {
        mensaje += "Contraseña requerida con formato xxx@xxx.xx";
    }
    
    if (mensaje == "") {
        mensaje = "Todos los campos de formulario son validos";
    }
    alert(mensaje);

}