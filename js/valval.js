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


$(document).ready(function() {
    $('#myform').on('submit', function(e) {
        e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
        
        var formData = new FormData(this);
       
        $.ajax({
            type: 'POST',
            url: 'password.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response == '1') {
                    Swal.fire({
                        position: 'center-top', 
                        icon: 'success',
                        title: 'Los datos fueron actualizados exitosamente.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        position: 'center-top', 
                        icon: 'error',
                        title: 'Los datos no pudieron ser actualizados',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    });
});
