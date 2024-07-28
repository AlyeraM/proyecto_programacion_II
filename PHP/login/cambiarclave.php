<?php  

include('../../default/conexion.php');
include('header_cambioclave.php'); ?> 

<head>
  <title>Programacion</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
  <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="css/util.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link href="../../css/sweetalert2.min.css" rel="stylesheet">
<!--===============================================================================================-->
</head>
<div class="limiter">
    <div class="container-login100">
      <div class="container-fluid">
        <span class="login100-form-title p-b-43">
          REGISTRO USUARIO
        </span>
        <div class="row">
          <div class="col-lg-6">
            <div class="card shadow mb-4" style="text-align: center;height:420px">
              <div class="table-responsive">
                <div class="card-header m-0 font-weight-bold text-primary" style="text-align: center;">Datos de Usuario Nuevo
                </div>

                  <form id="myform" name="myform" action="" method="post" style="margin: 2em;">

                  <div class="form-row">
                  <div class="form-group col-md-6">
                      <label for="recipient-name" class="col-form-label">Nombre:</label>
                      <input type="text" class="form-control" id="nombreuser" maxlength="20"
                      onkeypress="return soloLetras(event)">
                      <span class="text-danger" style="display: none;" id="errornombre">Este campo no puede estar vacio.</span>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="recipient-name" class="col-form-label">Apellido:</label>
                      <input type="text" class="form-control" id="apellidouser" maxlength="20"
                      onkeypress="return soloLetras(event)">
                      <span class="text-danger" style="display: none;" id="errorapellido">Este campo no puede estar vacio.</span>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="recipient-name" class="col-form-label">Correo:</label>
                      <input type="email" class="form-control" id="correouser" maxlength="35">
                      <span class="text-danger" style="display: none;" id="errorcorreo">Ej: persona@empresa.com</span>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="secretkey">Contraseña nueva</label>

                        <input id="secretkey" class="form-control" name="secretkey" type="password" placeholder="Contraseña nueva"  minlength="3" maxlength="30" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="pass_2">Repita la Contraseña</label>
                      
                        <input class="form-control" id="pass_2" name="pass_2" type="password"  placeholder="Verificar contraseña" minlength="3" maxlength="30" disabled="disabled" required/>
                    </div>
                  </div>
                    <input class="btn btn-success" type="button" id="btnpass" name="btnguardarpassword" value="Guardar" onclick="GuardarPassword();" disabled="disabled" />
                </form> 
              </div>
            </div>
          </div>
            <div class="col-lg-6">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary text-center">Parámetros para la Contraseña</h6>
                </div>
                <div class="card-body">
                  <div class="mb-2">
                      <ul class="text-justify">
                                <li class="list-group-item" id="pmayuscula"><i class="far fa-check-circle"></i> Debe contener Al menos una letra mayúscula. </li>
                                <li class="list-group-item" id="pminuscula"><i class="far fa-check-circle"></i> Debe contener Al menos una letra minúscula.  </li>
                                <li class="list-group-item" id="pnumerico"><i class="far fa-check-circle"></i> Por lo menos Un carácter alfanumérico.  </li>
                                <li class="list-group-item" id="pespecial"><i class="far fa-check-circle"></i> Por lo menos un carácter especial. </li>
                                <li class="list-group-item" id="plongitud"><i class="far fa-check-circle"></i> La longitud deber ser igual o mayor a (7) caracteres</li>
                                
                      </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
 </div>
  



<?php 
include('footer_cambioclave.php');

 ?>

<style type="text/css">
  
.strength_meter div{
    height:auto;
    width:95%;
   
     max-width: 95%;
    text-align:center;
    color:white;
    font-weight:bold;
    line-height:23px;
}
.strength_meter div{
width:95%;
height: auto;
text-align: center;
color: #000;
line-height: 35px;
-webkit-transition: all .3s ease-in-out;
-moz-transition: all .3s ease-in-out;
-o-transition: all .3s ease-in-out;
-ms-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;
padding-right: 12px;
border-radius:5px;
}
.strength_meter div p{

top: 22px;
right: 0px;
color: #FFF;
font-size:13px;
}

.veryweak{
    background-color: #DF0101;
border-color: #F04040!important
}
.weak{
background-color: #F78181;
border-color: #FF853C!important;
}
.medium{
background-color: #FF8000;
border-color: #FC0!important;
}
.strong{
background-color: #0009df;
border-color: #8DFF1C!important;
}

.green{
color: #17A673;
}

</style>	
