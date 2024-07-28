<?php 
include('../../default/conexion.php');
session_start();
$idusuario= $_SESSION['iduser'];
$query="SELECT row_number() over (order by codregion), codregion,desc_region FROM tbl_region_central ORDER BY codregion";

$consulta = pg_query($db_soporte,$query);
if (pg_num_rows($consulta) > 0) {
	while ($info = pg_fetch_array($consulta)) {
	echo '     
 <tr>   
                    <th>'.$info['row_number'].'</th>
                    <th>'.$info['desc_region'].'</th> <th width="30%">';

  echo'
                     <a data-toggle="modal" data-target="#modalCRUD" onclick="AsignarSucursal('.$info['codregion'].')"><i class="fas fa-edit"style="color:blue;"></i></a>
                      &nbsp;
                     </th>

                
            </tr> 
	';
	}

}else{

echo '<tr>  
                    <th width="30%">No existen usuarios</th>
            
                
                
            </tr>';

}

 ?>
