<?php 
include('../../default/conexion.php');
$id = $_POST['id'];
$query="DELETE FROM usuarios where usuario_id = '$id' ";

$consulta = pg_query($db_soporte,$query);
if ($consulta){

    echo json_encode(1);
	
}else{
    echo json_encode(0);

}

 ?>