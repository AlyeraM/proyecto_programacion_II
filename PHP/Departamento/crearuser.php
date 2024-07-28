<?php 
include ('../../default/conexion.php');
if (isset($_POST['documento']) && !empty($_POST['documento'])) {
	$documento=$_POST['documento'];
	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$usuario=$_POST['usuario'];
	$tipouser=$_POST['tipouser'];
	$correouser=$_POST['correouser'];
	$Departamento=$_POST['Departamento'];
	$clave=md5('1234567');
	$histoclave=0;
$sql=pg_query($db_soporte, "SELECT * FROM usuarios WHERE usuario_nombre='$usuario' or nif='$documento'");
if (pg_num_rows($sql)>0) {
	echo json_encode(2);
} 	else { 
		$sql="INSERT INTO usuarios(nombre, apellido, usuario_nombre, usuario_clave, 
	            usuario_email, nif, tipo, dep, histoclave)
	    VALUES ('$nombre','$apellido','$usuario','$clave','$correouser','$documento','$tipouser','$Departamento','$histoclave')";
		$resultado=pg_query($db_soporte, $sql);

		if ($resultado) {
			echo json_encode(1);
		}else{
			echo json_encode(0);
		}
	}

}
 ?>