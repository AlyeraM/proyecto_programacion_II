<?php 
if (isset($_POST['id']) && !empty($_POST['id'])) {
	$id=$_POST['id'];
 	include('../../default/conexion.php');
 	$sql="SELECT * FROM consulta_info_user where usuario_id='$id'";
 	$resultado=pg_query($db_soporte, $sql);
 	if ($resultado) {
 		$consulta=pg_fetch_assoc($resultado);
 		echo json_encode($consulta);


 	}
 } ?>