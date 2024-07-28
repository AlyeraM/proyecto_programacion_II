// $( function() {
//     var availableTags = [ 11,22,33
//      // $.ajax({
//      //  type: 'POST',
//      //  url: 'busquedatickets.php',
//      //  data:{
//      //    dato: dato},
//      //    success: function(data){
//      //      return data;
//      //    }
//      // })
//     ];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   } );


$(document).ready(function() {
  var BusqTick= $('#busqdato').val();
  if (BusqTick) {
    busquedautomatica(BusqTick);
    ticketsAbiertos();
  } 
    
    var a=0;
    $('#BuscadorTick').on('keypress', function(e) {
      var infobusq=$("#BuscadorTick").val();
      var modulodepselecc=$("#ValueModuloTickDep").val();
       if(e.keyCode == 13)
     {
        var clase1 = document.getElementById("TickAbiertos").className;
        var clase2 = document.getElementById("TickAproceso").className;
        var clase3 = document.getElementById("TickCerrado").className;
        if (clase1 == 'nav-link active') {
             $( "#TickAbiertos" ).addClass( "active" );
            $( "#TickAproceso" ).removeClass( "active" );
            $( "#TickCerrado" ).removeClass( "active" );

          a=1;
        } else if (clase2 == 'nav-link active'){
             $( "#TickAproceso" ).addClass( "active" );
            $( "#TickAbiertos" ).removeClass( "active" );
            $( "#TickCerrado" ).removeClass( "active" );

          a=2;
        }else if (clase3 == 'nav-link active'){
           $( "#TickCerrado" ).addClass( "active" );
            $( "#TickAbiertos" ).removeClass( "active" );
            $( "#TickAproceso" ).removeClass( "active" );
          a=3;
        }
         if (infobusq && !modulodepselecc) {

            $.ajax({
             type: "POST",
             url: "filtrotickets.php",
             data:{TK: $("#BuscadorTick").val(),
                    estatus: a},
             success: function(data){
              
              $("#mensajeshisto").empty();
              $("#tickets").empty();
              $("#tickets").html(data);
              }
           }); 
         }else if (infobusq && modulodepselecc) {
            var variable=1; //Para que entre en la fase de busqueda a traves del buscador en el query
            $.ajax({
             type: "POST",
             url: "buzondep.php",
             data:{ variable: variable, 
                    estatus : a,
                    ModuloTickDep : modulodepselecc,
                    buscador : infobusq},
             success: function(data){
              
              $("#mensajeshisto").empty();
              $("#tickets").empty();
              $("#tickets").html(data);
              }
           }); 
         }
          else {
          ticketsAbiertos();
         }
     } else {
        var key = $(this).val();    
        var dataString = 'key='+key;
        var url = isNaN($("#ValueModuloTickDep").val()) ? 'busquedatickets.php' : '../mis_tickets/busquedatickets.php';
    $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            success: function(data) {
                $('#PosiblesResultados').html(data);
               
            }
        });
      };
    });

}); 