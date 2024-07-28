<?php 
session_start();
if (isset($_SESSION['sesion'])) {
include('../../default/header.php');

	$tipoUSer=$_SESSION['tipo_user'];
	$IdUSer=$_SESSION['iduser'];


	$inicio = 1;
	include('grafica.php');
	//include_once('../../default/conexion.php');
	

	
	$dato = pg_num_rows($sql);

		$open = $dato;
	
	



	include('inicio.php');
	include('../../default/footer.php');
}
else{
header('Location: ../../index.php');
}
?>
 