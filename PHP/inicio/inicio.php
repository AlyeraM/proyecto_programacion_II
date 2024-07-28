<?php
/*Tipo User 0 es SuperAdmin, 1 es Administrador, 2 tecnico, 3 usuario, 4 gerente, 5 coordinador1, 6 coordinador2.*/
require_once('../../default/conexion.php');
//echo $dep_usuario;


function validarFecha($date, $format = 'H:i:s')
{
  $d = DateTime::createFromFormat($format, $date);
  return $d && $d->format($format) == $date;
}


?>
<section class="caviar-dish-menu" id="menu">
  <div class="container-fluid">
    <div class="row">
      <div class="col ">
        <div class="section-heading text-center">
          <!-- <h2 >MENU</h2> -->
          <br>
        </div>
        <!-- btn -->
      </div>
    </div>

    <div class="row">
      
      <?php if ($tipoUSer == 1 ) { ?>
        <div class="col">
          <div class="caviar-single-dish wow fadeInUp" data-wow-delay="1s" align="center">
            <a href="../Departamento/"><img src="../../recursos/enterprise.svg" height="100px" alt=""></a>


            <div class="dish-info">
              <h6 class="dish-name">Usuarios</h6>

            </div>
          </div>
        </div>
        <!--    <div class="col">
                    <div class="caviar-single-dish wow fadeInUp" align="center" data-wow-delay="1.5s">
                         <a href="../historial/"><img src="../../recursos/office-material.svg" height="100px"  alt=""></a>
                        
                        <div class="dish-info">
                            <h6 class="dish-name">Historial</h6>
                           
                        </div>
                    </div>
                </div> -->
      <?php } ?>
        <div class="col">
          <div class="caviar-single-dish wow fadeInUp" data-wow-delay="1.5s" align="center">
            <a href="../Usuarios/index.php"><img src="../../recursos/team.svg" height="100px" alt=""></a>

            <div class="dish-info">
              <h6 class="dish-name">Tu perfil</h6>

            </div>
          </div>
        </div>
      
    </div>
    <br>
    <!-- DASHBOARD -->
    <div class="row">
      <?php
      $open = (isset($open)) ? $open : "0";
      $process = (isset($process)) ? $process : 0;
      $close = (isset($close)) ? $close : "0" ?>
      <!-- Earnings (Monthly) Card Example -->
      <!--div class="col  mb-4">
        <div class="card border-left-primary shadow h-100 py-2" id="divAbierto">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Abiertos</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <input type="hidden" id="GA" name="" value="<?php echo $open; ?>">
                  <?php echo $open; ?>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col  mb-4">
        <div class="card border-left-success shadow h-100 py-2" id="divProceso">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">En Proceso</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <input type="hidden" id="GP" name="" value="<?php echo $process; ?>">
                  <?php echo $process; ?>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-hourglass-half fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div> <i class=""></i>
      <div class="col  mb-4">
        <div class="card border-left-info shadow h-100 py-2" id="divCerrado">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Cerrados</div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      <input type="hidden" id="GC" name="" value="<?php echo $close; ?>">
                      <?php echo $close; ?>
                    </div>
                  </div-->
                  <!--                         <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Valores de para la grafica del mes -->
      <?php
      $tipouser = $_SESSION["tipo_user"];
      $iduser = $_SESSION["iduser"];

      

      ?>
      <input type="hidden" name="AbiertoMes" id="AbiertoMes" value="<?php echo $info2['abierto']; ?>">
      <input type="hidden" name="ProcesoMes" id="ProcesoMes" value="<?php echo $info2['proceso']; ?>">
      <input type="hidden" name="CerradoMes" id="CerradoMes" value="<?php echo $info2['cerrado']; ?>">
    </div>
    <!-- GRAFICA DE LINEA -->
    <div class="row" id="graficas">

      <div class="col col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Grafica Anual</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <!-- TORTA -->

      <div class="col  col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Grafica del Mes</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="chart-pie pt-4 pb-2">
              <canvas id="myPieChart"></canvas>
            </div>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Abiertos
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> En proceso
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Cerrados
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


  </div>
</section>