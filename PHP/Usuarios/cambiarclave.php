<?php
$sql1 = "SELECT * FROM usuarios WHERE usuario_id = '" . $_SESSION['iduser'] . "'";
$result1= pg_query($db_soporte, $sql1);
$row = pg_fetch_assoc($result1);
?>
<div class="limiter">
    <div class="container-login100">
      <div class="container-fluid">
        <span class="login100-form-title p-b-43">
          REGISTRO USUARIO
        </span>
        <div class="row">
          <div class="col-lg-8">
            <div class="card shadow mb-4" style="text-align: center;height:420px">
              <div class="table-responsive">
                <div class="card-header m-0 font-weight-bold text-primary" style="text-align: center;">Tus Datos
                </div>

                <form id="myform" name="myform" action="password.php" method="post" enctype="multipart/form-data" style="margin: 2em;">
                  <div class="form-group col-md-6">
                    <label for="nombreuser" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" value="<?php echo $row['nombre']?>" name="nombreuser" id="nombreuser" maxlength="20" onkeypress="return soloLetras(event)">
                    <span class="text-danger" style="display: none;" id="errornombre">Este campo no puede estar vacío.</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="apellidouser" class="col-form-label">Apellido:</label>
                    <input type="text" class="form-control" name="apellidouser" value="<?php echo $row['apellido']?>" id="apellidouser" maxlength="20" onkeypress="return soloLetras(event)">
                    <span class="text-danger" style="display: none;" id="errorapellido">Este campo no puede estar vacío.</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="correouser" class="col-form-label">Correo:</label>
                    <input type="email" class="form-control" name="correouser" value="<?php echo $row['usuario_email']?>" id="correouser" maxlength="35">
                    <span class="text-danger" style="display: none;" id="errorcorreo">Ej: persona@empresa.com</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="fileInput" class="col-form-label">Elige tu foto:</label>
                    <input type="file" id="fileInput" name="profilePicture" accept="image/*" required>
                  </div>
                  <input class="btn btn-success" type="submit" id="btnpass" name="btnguardarpassword" value="Editar" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  


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
