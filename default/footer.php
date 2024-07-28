    <!-- <script>
    $(document).ready(function($) {
      
    $('#secretkey').strength({
                strengthClass: 'strength',
                strengthMeterClass: 'strength_meter',
                strengthButtonClass: 'button_strength',
                strengthButtonText: 'Mostrar Contraseña',
                strengthButtonTextToggle: 'Ocultar Contraseña'
            });

    });
    </script> -->
<!--<script type="text/javascript" src="../../js/jqueryclave.min.js"></script>
<script src="../login/strength.js" type="text/javascript"></script>
<script src="../login/js.js" type="text/javascript"></script>-->
 </body>

<footer class="footer">
      <div class="container">
        <span class="text-muted"></span>
      </div>
</footer>
<?php
$host= 'http://'.$_SERVER['HTTP_HOST'].':4000';
?>
<script src="../../js/buscador.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="../../vendor/datatables/datatables.min.css"/>
<script type="text/javascript" src="../../vendor/datatables/pdfmake.min.js"></script>
<script type="text/javascript" src="../../vendor/datatables/vfs_fonts.js"></script>
<script type="text/javascript" src="../../vendor/datatables/datatables.min.js"></script>

<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
<!-- Bootstrap4 Duallistbox JuniorsQ-->
<script src="../../js/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.js"></script>
<script src="../../js/select2/js/select2.js" type="text/javascript"></script>
<link  type="text/css" rel="stylesheet" href="../../js/select2/css/select2.css">



<script src="../../js/myjava.js" type="text/javascript"></script>


<!-- JuniorsQ -->
<script type="text/javascript">  $(".duallistbox").bootstrapDualListbox();</script>
<?php 
if (isset($inicio)) {
	?>
<script src="../../vendor/chart.js/Chart.min.js" type="text/javascript"></script>
<script src="../../js/chart-area-demo.js" type="text/javascript"></script>
<script src="../../js/chart-pie-demo.js" type="text/javascript"></script>

	<?php
}

 ?>
</html>
