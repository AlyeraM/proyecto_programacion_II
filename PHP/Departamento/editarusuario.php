<?php 

if (isset($_POST['correo']) && !empty($_POST['correo'])) {
 	include ('../../default/conexion.php');
 	$apellido=$_POST['apellido'];
 	$correo=$_POST['correo'];
 	$TipoUser=$_POST['TipoUser'];
 	$nombre=$_POST['nombre'];
 	$id=$_POST['id'];
 	
 	$sql="UPDATE usuarios SET nombre='$nombre', apellido='$apellido', usuario_email='$correo',tipo='$TipoUser' WHERE usuario_id='$id'";
 	$resultado= pg_query($db_soporte,$sql);
 	if ($resultado) {
 		echo json_encode(1);
 		
 	}
 		else{
 			echo json_encode(0);
 			
 		}
 	
 } ?>