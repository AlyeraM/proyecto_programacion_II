<?php 
include('../../default/conexion.php');
$login=($_REQUEST['var']);
session_start();
if (isset($_SESSION['sesion'])) {
include ('../../default/header.php'); 
$idusuario= $_SESSION['iduser'];


 ?>
<div class="table-responsive">
  <input type="hidden" id="dataBD(<?php echo  $login?>)" name="" value="2">
  <table class="table table-striped" id="dataTableasigreg" style="text-align: center;">
    <thead class="table-info">
      <tr>
        <th>Nº</th>                      
        <th>Regiones</th>                                      
        <th>Accion</th>       
      </tr>
    </thead>
    <tbody>
      <?php 
        $query="SELECT row_number() over (order by codregiones), codregiones,desc_region FROM tbl_region_central ORDER BY codregiones";
        $consulta = pg_query($db_soporte,$query);
        if (pg_num_rows($consulta) > 0) {
          while ($info = pg_fetch_array($consulta)) {
          echo '     
          <tr>   
          <th>'.$info['row_number'].'</th>
          <th>'.$info['desc_region'].'</th> <th width="30%">';

          echo'<a data-toggle="modal" data-target="#modalCRUD" onclick="AsignarSucursal('.$info['codregiones'].')"><i class="fas fa-edit"style="color:blue;"></i></a>
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
    </tbody>
    <tfoot class="table-info">
      <tr>
        <th>Nº</th>                      
        <th>Regiones</th>                                      
        <th>Accion</th>    
    </tfoot>
  </table>
</div>

<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h4 class="modal-title" id="exampleModalLabel" ></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
        </button>
      </div> 
      <form id="formRegiones" method="post" >
        <div class="col-lg-12">  
          <br>
          <input type="hidden" name="usuario_acceso" value="<?php echo $idusuario; ?>">
          <input type="hidden" name="login" id="login" value="<?php echo $login; ?>">
          <input type="hidden" name="region" id="region">
            <label>Sucursal</label>
               <select class="form control" name="sucursal[]" id="sucursal"  multiple="multiple" style="width:180px;padding-left:15px;color:#000000" >
               </select>               
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
          <button type="submit" id="btnGuardarSuc" class="btn btn-primary">Guardar</button>
        </div>    
      </form>
    </div>
  </div>
</div>

 <script type="text/javascript">
  function AsignarSucursal(cregion) {
   // alert (cregion);
    $(".modal-header").css("color", "black" );
    $(".modal-title").text("Asignación de Sucursal");
    document.getElementById('region').value=cregion;
    $('#modalCRUD').modal('show');  
    $("select#sucursal").empty();
    setTimeout(function(){ 
      selectsucursales();
    });  
  }
  function selectsucursales() {

    var region=$('input#region').val();
    var login=$('input#login').val();
    var existe =[];
    $.getJSON("selectsucursalasig.php",{region:region, login:login},function(datos){
        if(datos != 0){
            $.each(datos, function (K, V) {         
                existe.push(parseInt(V['cod_sucursal']));
            });   
        }
    });

    var region=$('input#region').val();
      $.getJSON("selectsucursales.php",{region:region},function(datos){
          if(datos != 0){
            var $SELECT = $("select#sucursal").select2({
                    placeholder: 'Seleccione',
                    allowClear: true,
              });
             
              $.each(datos, function (K, V) {
                var id =parseInt(V['cod_sucursales']);
                if (existe.includes(id)) {
                  $SELECT.append($('<option>', { 
                    value: V['cod_sucursales'],
                    text: V['desc_sucursal'],
                    selected:true
                  }));
                }else{
                  $SELECT.append($('<option>', { 
                    value: V['cod_sucursales'],
                    text: V['desc_sucursal']
                  }));
                }
              });
          }  
      });
  } 


  $('#formRegiones').submit(function(e){ 
    e.preventDefault();
      parametros = $("form#formRegiones").serialize();
      $.ajax({
          url : "guardarSucursales.php",
          type : "POST",
          data : parametros,
          success: function(data){

          if(data == 0){
            Swal.fire(
              'Las sucursales han sido eliminadas!',
              '',
              'success'
            )
            setTimeout(function(){ window.location.reload(0); }, 3000); 
          }else if (data == 1){
            Swal.fire(
              'Las sucursales han sido asignadas correctamente',
              '',
              'success'
            )
            setTimeout(function(){ window.location.reload(0); }, 3000);  
          } else {
            Swal.fire(
              'Error!. La sucursal no fue asignada',
              '',
              'error'
            )
          }
          }
      })
  });
 </script>

 <?php 
include ('../../default/footer.php'); 

} ?>