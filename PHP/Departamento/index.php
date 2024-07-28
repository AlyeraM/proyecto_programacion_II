<?php 
session_start();
if (isset($_SESSION['sesion'])) {

include ('../../default/header.php'); 
?>
<script src="../../js/validacionesUsuarios.js" type="text/javascript" ></script>
<?php
include ('iniciousuario.php');
include ('../../default/footer.php'); 

}
else{
header('Location: ../../index.php');
}
?>