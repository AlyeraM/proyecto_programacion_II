<?php

include ('../../default/conexion.php');
  $nombre= $_REQUEST['nombre'];
  $apellido= $_REQUEST['apellido'];
  $mai= $_REQUEST['mai'];
  $password= $_REQUEST['password'];
  $passencript= md5($password);

  $query = "INSERT INTO usuarios(nombre, apellido, usuario_clave, usuario_email, tipo, estatus)
            VALUES ('$nombre','$apellido','$passencript','$mai',1,1)";

 $resultado =pg_query($db_soporte, $query);
if($resultado){
  echo 1;
}else{
  echo 2;
}
?>