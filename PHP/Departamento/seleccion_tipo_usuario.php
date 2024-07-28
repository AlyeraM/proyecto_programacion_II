<?php 
include ('../../default/conexion.php');
$sql='SELECT * FROM tipousuario';
$resultado=pg_query($db_soporte,$sql);

echo '<option value="0">Tipo de usuario</option>';
while ($info=pg_fetch_array($resultado)) {
 	echo '<option id='.$info['id_tipousuario'].' value='.$info['id_tipousuario'].'>'.$info['tipo_usuario'].'</option>';
 } 
 ?>