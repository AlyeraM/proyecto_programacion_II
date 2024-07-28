function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6]; //Es la validaci�n del KeyCodes, que teclas recibe el campo de texto.

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

    $(function(){

    $('#secretkey').keyup(function(){
            var pass_2 = $('#pass_2').val();
            var _this = $('#secretkey');
            var pass_1 = $('#secretkey').val();
            _this.attr('style', 'background:transparent');
            if(pass_1.charAt(0) == ' '){
                _this.attr('style', 'background:#FF4A4A');
    
            }

            if (pass_2 != pass_1) {

              $('#btnpass').attr('disabled','disabled');

            }
            else if(pass_1 == pass_2){

               $('#btnpass').removeAttr('disabled');
                

            }
    
            if(_this.val() == ''){
                _this.attr('style', 'background:#FF4A4A');
                 
            }
          
        });
    
        $('#pass_2').keyup(function(){
            var pass_1 = $('#secretkey').val();
            var pass_2 = $('#pass_2').val();
            var _this = $('#pass_2');
            _this.attr('style', 'background:transparent');
            if(pass_1 != pass_2 && pass_2 != ''){
                _this.attr('style', 'background:#FF4A4A'); 
                $('#btnpass').attr('disabled','disabled');
               
            }

            else if(pass_1==pass_2){

               $('#btnpass').removeAttr('disabled');
                

            }
        });
});



function GuardarPassword(){
var nombre = document.getElementById("nombreuser").value;
var apellido = document.getElementById("apellidouser").value;
var mai = document.getElementById("correouser").value;
var pass_1 = document.getElementById("secretkey").value;
var pass_2 = document.getElementById("pass_2").value;
var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

if (nombre.length == 0){
    $('#documentouser').removeClass("border border-danger"); 
    $('#errordocumento').hide();
    $('#nombreuser').addClass("border border-danger");
    $('#nombreuser').focus();
    $('#errornombre').show();
} 
if (apellido.length == 0){
    $('#nombreuser').removeClass("border border-danger"); 
    $('#errornombre').hide();
    $('#apellidouser').addClass("border border-danger");
    $('#apellidouser').focus();
    $('#errorapellido').show();
} 
if (mai.length== 0 || caract.test(mai) == false){
    $('#usuarionew').removeClass("border border-danger");
    $('#errorusuario').hide();
    $('#correouser').addClass("border border-danger");
    $('#correouser').focus()
    $('#errorcorreo').show();
}

//alert(pass_1);
if ((pass_1 != "" ) || (pass_2 !="")) {
if (nombre.length == 0 || apellido.length == 0 || mai.length== 0 || caract.test(mai) == false) {
    Swal.fire({
            position: 'center-top', 
            icon: 'false',
            title: 'Intentelo de Nuevo',
            showConfirmButton: false,
            timer: 1500
    });
    
}else
{
    cadena="nombre=" + nombre +
            "&apellido=" + apellido +
            "&mai=" + mai +
            "&password=" + pass_1;
   $.ajax({
                    type:'POST',
                    url: 'password.php',
                    data:cadena,
                    success: function(data){
                        if (data==1) {
                            setTimeout(function(){ window.location='../inicio';}, 1000);
                            Swal.fire({
                              position: 'center-top', 
                              icon: 'success',
                              title: 'La contraseña fue reiniciada exitosamente.',
                              showConfirmButton: false,
                              timer: 2000

                           });
                        }else{
                            Swal.fire({
                              position: 'center-top', 
                              icon: 'false',
                              title: 'La contraseña no pudo ser reiniciada',
                              showConfirmButton: false,
                              timer: 1500
                           });
                        }
                    }
                })
}

}else{

        Swal.fire({
            position: 'center-top', 
            icon: 'false',
            title: 'No puede contener espacios vacios',
            showConfirmButton: false,
            timer: 1500
        });

    }
 return false;
}

function mostrarPassword(){
     var atributo = $('#secretkey').attr('type');
     if (atributo=='text') 
        $('#secretkey').attr('type', 'password');
     else
       $('#secretkey').attr('type', 'text');   
}

