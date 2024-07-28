<?php 

$db_soporte = pg_connect(
    	"	host=127.0.0.1 
			dbname=proyectoprogramacion
			user=postgres 
			password=Alyera09
			port=5433") 
    		or die('NO HAY CONEXION: ' . pg_last_error());

  function fechaNormal($fecha){
        $nfecha = date('d/m/Y',strtotime($fecha));
        return $nfecha;
}
 ?>