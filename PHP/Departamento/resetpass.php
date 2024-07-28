<?php 
if (isset($_POST['id']) && !empty($_POST['id'])) {
	include('../../default/conexion.php');
	$CLAVE=md5('1234567');
	$id=$_POST['id'];
	$sql="UPDATE usuarios set usuario_clave='$CLAVE', histoclave='0' WHERE usuario_id='$id'";
	$resultado=pg_query($db_soporte,$sql);
	if ($resultado) {
		echo json_encode(1);
	}else{
	echo json_encode(0);

	}

}
 ?>