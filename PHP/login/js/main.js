$(document).ready();
$(function(){

    $('#IniciarSesion').click(function(){
       $('#loading').show();
        $.ajax({
            type: 'POST',
            url: 'iniciosesion.php',
            data: { usuario: $('#usuario').val(),
                    contraseña:$('#contraseña').val()},
            success: function(data){
                if (data==1) {             
                window.location.href = "../inicio/";
                $('#loading').hide();
                    }else if(data==2){
                    window.location.href = "cambiarclave.php";
                $('#loading').hide();
                }else{
                     $('#loading').hide();
                    Swal.fire({

                        position: 'center-top', 
                        icon: 'error',
                        title: 'Usuario o contraseña no coinciden',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    });
});