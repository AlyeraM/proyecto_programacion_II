<?php 
include('../../default/conexion.php');
session_start();
$tipousuario= $_SESSION['tipo_user'];
$query="SELECT * FROM usuarios LEFT JOIN tipousuario on tipo=id_tipousuario";

$consulta = pg_query($db_soporte,$query);
if (pg_num_rows($consulta) > 0) {
	while ($info = pg_fetch_array($consulta)) {
	echo '     
 <tr>   
                    <th>'.$info['usuario_id'].'</th>
                    <th>'.$info['nombre'].'</th>
                    <th>'.$info['apellido'].'</th>
                    <th>'.$info['usuario_email'].'</th>
                    <th>'.$info['tipo_usuario'].'</th> <th width="10%">';


  
  echo'         <a onclick="eliminarUsuaio('.$info['usuario_id'].')"><i class="fas fa-trash-alt" style="color:red;"></i></a>
                    &nbsp;
  
                     <a data-toggle="modal" data-target="#ModalEditDep" onclick="EditarUsuario('.$info['usuario_id'].')"><i class="fas fa-edit"style="color:blue;"></i></a>
                      &nbsp;
                     <a data-toggle="modal" data-target="#ModalpassDep" onclick="ResetPass('.$info['usuario_id'].')">
                     <i class="fas fa-unlock"style="color:green;"></i></a>
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