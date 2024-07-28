
const socket= io("http://localhost:3000");
let output=document.getElementById('output');

socket.on('chat:message', function (data){
    
    console.log(data);
    Swal.fire({
        position: 'bottom-end', 
        icon: 'warning',
        title: 'Ha sido creado un ticket en su departamento',
        showConfirmButton: false,
        timer: 1000
    });

});