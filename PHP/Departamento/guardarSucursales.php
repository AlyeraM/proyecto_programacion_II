<?php 
	include('../../default/conexion.php');

	if(isset($_REQUEST['region']) && !empty($_REQUEST['region'])){

		$region=$_REQUEST['region'] ;
		$login=$_REQUEST['login'] ;
		$usuario_acceso=$_REQUEST['usuario_acceso'] ;

		$resultadoss="DELETE from tblrela_regiones where cod_region='$region' and usuario='$login'";
		$result= pg_query($db_soporte,$resultadoss);
		//echo $resultadoss;
		$RESP=0;

		if (!empty($_REQUEST["sucursal"])) {
	    	foreach ($_REQUEST["sucursal"] as $clave=>$valor){
				$resultados="INSERT INTO tblrela_regiones values('$region', $valor, '$login', now(),$usuario_acceso)";
				$result= pg_query($db_soporte,$resultados);
				//echo $resultados;
			}	
			$RESP=1;
	    }

		 echo $RESP;
	}
?>