<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" >
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!--  <link rel="shortcut icon" href="../../recursos/ico.png" /> -->
    <link rel="stylesheet" href="../../css/bootstrap.css">
    <link rel="stylesheet" href="../../css/bootstrap.min.css">
    <link href="../../css/navbar.css" rel="stylesheet">
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="../../css/mycss.css" rel="stylesheet">
    <link href="../../css/sticky-footer.css" rel="stylesheet">
    <link href="../../css/sweetalert2.min.css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="../../js/select2/css/select2.css">
    <link rel="stylesheet" href="../../js/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
    <link href="../../css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="../../css/sb-admin-2.css" rel="stylesheet">
    <link href="../../css/ihover.min.css" rel="stylesheet">

    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

   <!--  <script type="text/javascript" src="../../js/bootstrap.bundle.min.js"></script> -->
<script type="text/javascript" src="../../js/jquery-3.4.1.min.js"></script>
<script>window.jQuery || document.write('<script src="../js/jquery-slim.min.js"><\/script>')</script>
<script src="../../js/popper.min.js"></script>
<script src="../../js/bootstrap.min.js"></script> 
<script type="text/javascript" src="../../js/sweetalert2.min.js"></script> 
<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"></script> -->

  
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->



  <title>SOPORTE_POST</title>
</head>
<body>
<?php 
  $count=0;
  
include_once ('../../default/conexion.php'); 
$id=$_SESSION['iduser'];

$sql=pg_query($db_soporte,"SELECT * FROM usuarios WHERE usuario_id = '$id'");
$row = pg_fetch_assoc($sql);
    
      $_SESSION['tipo_user']=$row['tipo'];
      $_SESSION['correo']=$row['usuario_email'];
      $_SESSION['usuario_id']=$row['usuario_id'];
      $_SESSION['profile_picture'] = $row['profile_picture'];
      
      //echo $depnotf;
 ?>
<input type="hidden" class="form-control money" name="numeronotif" id="contadornotf" value="<?php echo $count;?>" > 

<nav class="navbar navbar-dark bg-dark rounded" id="navbar">   
  <a class="navbar-brand" href="../inicio" > <img src="../../recursos/Logo-Unexca-Nuevo.jpg" height="80px">Proyecto Programación II</a>



  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
  

  <span class="mr-2 d-none d-lg-inline text-white small"><?php echo strtoupper($_SESSION['nombre']); ?></span>
  <img class="img-profile rounded-circle" src="<?php echo $_SESSION['profile_picture'] ? $_SESSION['profile_picture'] : '../../../PHP/Usuarios/'.$_SESSION['profile_picture'] ?>" height="40px">
  </a>
  <!-- Dropdown - User Information -->
  <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
    <!-- 
      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
      Cambiar Clave
    </a> -->
   <!--  <a class="dropdown-item" href="#">
      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
      Settings
    </a>
    <a class="dropdown-item" href="#">
      <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
      Activity Log
    </a> -->
   <!--  <div class="dropdown-divider"></div> -->
    <a class="dropdown-item" href="../login/logout.php">
      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
      Cerrar Sesion
    </a>
  </div>
</nav>

<div class="container">
  <div id="chat-window">
    <div id="output">
    </div>          
  </div>
</div>
<script src="../../node_modules/socket.io/client-dist/socket.io.js"></script>

<script src="../inicio/chat.js"></script>

