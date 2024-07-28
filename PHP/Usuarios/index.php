<?php 
session_start();
if (isset($_SESSION['sesion'])) {

include ('../../default/header.php'); 
?>
<script src="../../js/valval.js" type="text/javascript" ></script>
<?php
include ('cambiarclave.php');
include ('../../default/footer.php'); 

}
else{
header('Location: ../../index.php');
}
?>