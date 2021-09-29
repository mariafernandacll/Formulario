
document.write("hola")
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
    alert(mensaje);

}