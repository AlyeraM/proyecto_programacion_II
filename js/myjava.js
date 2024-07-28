var dominio8080='http://'+window.location.host
$(document).ready(pagina);
$(function(){
$("#check").on('change', function() {
if( $(this).is(':checked') ) {
// Hacer algo si el checkbox ha sido seleccionado
	$("#asig").css("display", "inline");
	$("#CrearTick").css("display", "inline");
	$("#CerrarTick").css("display", "none");
} else {
// Hacer algo si el checkbox ha sido deseleccionado
	$("#asig").css("display", "none");
	$("#CerrarTick").css("display", "inline");
	$("#CrearTick").css("display", "none");
}
});
$("#asignarDep").on('change', function() {

    $('#CrearTick').removeAttr("disabled");
});
$("#buscar").on('click', function() {
var rif = $("#brif").val();
var depusuarios = $("#depusuarios").val();
if (rif == '' || rif == null) {
$("#brif").addClass(" is-invalid");
}
else {
	$.ajax({
		type:'POST',
		url:'clientes.php',
		data:{rif, depusuarios},
		success: function(e){
			if (e==0) {
				$("#brif").addClass(" is-invalid");
				$('#infor').hide();
				$("#rif").val('');
				$("#rs").val('');
				$("#PersonaContac").val('');
				$("#NumeroTelf1").val('');
				$("#NumeroTelf2").val('');
				$("#Correo").val('');
				Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No existe en Intelipunto.',
						showConfirmButton: false,
						timer: 3000
					})
			} else {
			$('#infor').show();
			$('#infor').html(e);
			}
		}
	});
}});
// $("#clienteposibles").on('click', function() {
// 	alert();
// })
$('#GuardarDep').click(function(){
	var codigo = $('#Codigo').val();
	var departamento = $('#Departamento').val();
	$.ajax({
		type:'POST',
		url:'AgregarNuevoDep.php',
		data:{Codigo:codigo, Departamento:departamento},
			success: function(data){
				if (data==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Agregado con éxito.',
						showConfirmButton: false,
						timer: 1500
					});
					pagina();
					 $("#ModalDep").modal('hide');
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo guardar.',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
	});
});
$('#CrearTick').click(function(){
	
	var serial=$('#optseriales').val();
	var RIF= $('#rif').val();
	var razonsocial= $('#rs').val();
	var observacion= $('#Motivo').val();
	//var accion= $('#Accion').val();
	var dep= $('#asignarDep').val();
	var numeroticket= $('#totaltickets').val();
	var PersonaContac= $('#PersonaContac').val();
	var NumeroTelf1= $('#NumeroTelf1').val();
	var NumeroTelf2= $('#NumeroTelf2').val();
	var Correo= $('#Correo').val();
	var depusuarios= $('#depusuarios').val();
	var selectmotivo= $('#selectmotivo').val();
	var depusuarios= $('#depusuarios').val();
	var id_consecutivo= $('#id_consecutivo').val(); 
    var parametros = $("select#jsListobservaciones").find('option:selected').text(); // Capturamos el texto del option seleccionado
	var usuario_id= $('#usuario_id').val();
	var abono= $('#abono').val();
	//var otroscomponentes= $('#otroscomponentes').val();
	if (document.getElementById('caja').checked ){
		
		var caja= '1';
		//alert(caja);
	}else{
		var caja='0';
	}

	if (document.getElementById('pila').checked ){
		var pila= '1';
	}else{
		var pila= '0';
	}

	if (document.getElementById('cargador').checked ){
		var cargador= '1';
	}else{
		var cargador= '0';
	}

	if (document.getElementById('simcard').checked ){
		var simcard= '1';
	}else{
		var simcard= '0';
	}
	
	if (document.getElementById('otrocompcheck').checked ){
		
		var otroscomponentes= $('#otroscomponentes').val();
		
		alert (otroscomponentes);
	}else{
		var otroscomponentes= '0';
	}

	
	var serialpago= $('#serialpago').val();
	//alert(cargador);
	//if (document.getElementById('checkbox1').checked)
	if (document.getElementById('checkequipoentre').checked && serialpago==''){
			Swal.fire({
				position: 'center-top', 
				icon: 'error',
				title: 'Campos obligatorios vacios.',
				showConfirmButton: false,
				timer: 2500
			});
	}else if(document.getElementById('otrocompcheck').checked && (otroscomponentes=='' || otroscomponentes=='0')) {
			Swal.fire({
				position: 'center-top', 
				icon: 'error',
				title: 'Campos obligatorios vacios.',
				showConfirmButton: false,
				timer: 2500
			});
	}else if (Correo!="" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Correo))){
      Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'La dirección de email es incorrecta.',
						showConfirmButton: false,
						timer: 2500
    	})
  	} 
	else if (selectmotivo=='0' || PersonaContac=='' || NumeroTelf1=='' || Correo=='' || dep=='' || serial=='0' || id_consecutivo=='' || parametros=='') {
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Campos obligatorios vacios.',
						showConfirmButton: false,
						timer: 2500
		});
		if(selectmotivo=='' || selectmotivo=='0'){
			$("#selectmotivo").addClass(" is-invalid");
		} else {
			$("#selectmotivo").removeClass(" is-invalid");
		}
		if(serial=='' || serial=='0'){
			$("#optseriales").addClass(" is-invalid");
		}else {
			$("#optseriales").removeClass(" is-invalid");
		}
		 if (PersonaContac=='') {
			$("#PersonaContac").addClass(" is-invalid");
		} else {
			$("#PersonaContac").removeClass(" is-invalid");
		}
		if (NumeroTelf1=='') {
			$("#NumeroTelf1").addClass(" is-invalid");
		}else {
			$("#NumeroTelf1").removeClass(" is-invalid");
		}
		if (Correo=='') {
			$("#Correo").addClass(" is-invalid");
		}else {
			$("#Correo").removeClass(" is-invalid");
		}
	}else if(NumeroTelf1.length<12){
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'El número telefónico no esta completo.',
						showConfirmButton: false,
						timer: 2500
		});
		$("#NumeroTelf1").addClass(" is-invalid");
	}
	 else { 
		$("#selectmotivo").removeClass(" is-invalid");
		$("#PersonaContac").removeClass(" is-invalid");
		$("#NumeroTelf1").removeClass(" is-invalid");
		$("#Correo").removeClass(" is-invalid");
		$("#optseriales").removeClass(" is-invalid");
		if ($("#checkequipoentre").checked) {
			if($('#serialpago').val('')){
				
			}
			var serialpago= $('#serialpago').val();
		}
		if ($("#checkequipoentre").checked) {
			var serialpago= $('#serialpago').val();
		}
	$.ajax({
		type:'POST',
		url:'Creacion.php',
		data:{	RIF:RIF,
				RS: razonsocial,
				MT: observacion,
				//ACC: accion,
				Dep: dep,
				NT: numeroticket,
				PC: PersonaContac,
				NTF1: NumeroTelf1,
				NTF2: NumeroTelf2,
				ML: Correo,
				SM: selectmotivo,
				serial:serial,
				depusuarios:depusuarios,
				observaciones:parametros,
			    id_consecutivo:id_consecutivo,
				abono:abono,
				serialpago:serialpago,
				caja:caja,
				cargador:cargador,
				pila:pila,
				simcard:simcard,
				otroscomponentes:otroscomponentes},
		success: function(data){
			var arr=JSON.parse(data)
			//console.log(arr.count);
			if (data!=0 &&  data!=3) {
			
					Swal.fire(
					  'Ticket creado con éxito',
					  'Número de ticket es: '+arr.nticket,
					  'success'
					);
					var jsListobservaciones = $("#jsListobservaciones").bootstrapDualListbox({ 
						allowClear: true,
						setRemoveAllLabel : true,
						});
						jsListobservaciones.empty();
						pObservaciones();
				$('input[type="text"]').val('');
				$('input[type="tel"]').val('');
				$('input[type="email"]').val('');
				$('textarea').val('');
				$('#optseriales').val(0);
				$('input[type="number"]').val('');
				$("#cargador").prop("checked", false);
				$("#pila").prop("checked", false);
				$('#caja').prop("checked", false);
				$("#simcard").prop("checked", false);
				$("#otrocompcheck").prop("checked", false);
				$('#checkequipoentre').prop("checked", false);
				$("#serialpago").css("display", "none");
				$("#otroscomponentes").css("display", "none");
				// $("#CerrarTick").css("display", "inline");
        		$("#tickClie").css("display", "none");
        		$("#CrearTick").prop('disabled', true);
        		$("#asignarDep").val(0);
       			$('#infor').hide();
			    var datos=usuario_id+'/'+depusuarios;
				
				fetch('http://192.168.1.6:3000/enviarnotificacion',{
					method: 'POST',
					headers: {
						'Access-Control-Allow-Origin': '*'
					},
					body:JSON.stringify(datos)
				})   
				}else if (data==3){
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Ese cliente tiene un ticket abierto con ese serial.',
						showConfirmButton: false,
						timer: 2500
				});
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Error, no fue posible cerrar este ticket.',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
		});
	}
});
$('#CerrarTick').click(function(){
	var serial=$('#optseriales').val();
	var RIF= $('#rif').val();
	var razonsocial= $('#rs').val();
	var observacion= $('#Motivo').val();
	var accion= $('#Accion').val();
	var dep= $('#asignarDep').val();
	var numeroticket= $('#totaltickets').val();
	var PersonaContac= $('#PersonaContac').val();
	var NumeroTelf1= $('#NumeroTelf1').val();
	var NumeroTelf2= $('#NumeroTelf2').val();
	var Correo= $('#Correo').val();
	var selectmotivo= $('#selectmotivo').val();
	var depusuarios= $('#depusuarios').val();
	var id_consecutivo= $('#id_consecutivo').val();

	if (Correo!="" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Correo))){
      Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'La dirección de email es incorrecta.',
						showConfirmButton: false,
						timer: 2500
    })
  } 
	else if (selectmotivo=='0' || PersonaContac=='' || NumeroTelf1=='' || Correo=='' || dep=='' || serial=='0') {
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Campos obligatorios vacios.',
						showConfirmButton: false,
						timer: 2500
	});
		if(selectmotivo=='' || selectmotivo=='0'){
			$("#selectmotivo").addClass(" is-invalid");
		} else {
			$("#selectmotivo").removeClass(" is-invalid");
		}
		if(serial=='' || serial=='0'){
			$("#optseriales").addClass(" is-invalid");
		}else {
			$("#optseriales").removeClass(" is-invalid");
		}
		 if (PersonaContac=='') {
			$("#PersonaContac").addClass(" is-invalid");
		} else {
			$("#PersonaContac").removeClass(" is-invalid");
		}
		if (NumeroTelf1=='') {
			$("#NumeroTelf1").addClass(" is-invalid");
		}else {
			$("#NumeroTelf1").removeClass(" is-invalid");
		}
		if (Correo=='') {
			$("#Correo").addClass(" is-invalid");
		}else {
			$("#Correo").removeClass(" is-invalid");
		}
	}else if(NumeroTelf1.length<12){
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'El numero telefónico no esta completo.',
						showConfirmButton: false,
						timer: 2500
	});
		$("#NumeroTelf1").addClass(" is-invalid");
	}
	 else { 
		$("#selectmotivo").removeClass(" is-invalid");
		$("#PersonaContac").removeClass(" is-invalid");
		$("#NumeroTelf1").removeClass(" is-invalid");
		$("#Correo").removeClass(" is-invalid");
		$("#optseriales").removeClass(" is-invalid");	
	$.ajax({
		type:'POST',
		url:'Cerrarticket.php',
		data:{	RIF:RIF,
				RS: razonsocial,
				MT: observacion,
				ACC: accion,
				Dep: dep,
				NT: numeroticket,
				PC: PersonaContac,
				NTF1: NumeroTelf1,
				NTF2: NumeroTelf2,
				ML: Correo,
				SM: selectmotivo,
				serial:serial,
				depusuarios:depusuarios,
				id_consecutivo:id_consecutivo},
		success: function(data){
			if (data!=0) {
					Swal.fire(
					  'Ticket Cerrado',
					  'Número de ticket es: '+data,
					  'success'
					)
				$('input[type="text"]').val('');
				$('input[type="tel"]').val('');
				$('input[type="email"]').val('');
				$('textarea').val('');
				$('#optseriales').val(0);
				// $("#check").prop('checked', false);
				// $("#asig").css("display", "none");
				// $("#CerrarTick").css("display", "inline");
       			$("#tickClie").css("display", "none");
       			$("#CerrarTick").prop('disabled', true);
       			$('#infor').hide();
       			// enviarmensaje(PersonaContac,razonsocial,numeroticket,motivo,accion,'2',Correo);
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Error, no fue posible cerrar este ticket.',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
		});
	}
});
$('#GuardarUser').click(function(){
	var documento= $('#documentouser').val();
	var nombre= $('#nombreuser').val();
	var apellido= $('#apellidouser').val();
	var usuario= $('#usuarionew').val();
	var tipouser= $('#TipoUser').val();
	var correouser= $('#correouser').val();
	var Departamento= $('#DepUser').val();  
	var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	if (documento.length == 0 || documento.length < 4) {
		$('#documentouser').addClass("border border-danger");
		$('#documentouser').focus();
		$('#errordocumento').show();
	} else if (nombre.length == 0){
		$('#documentouser').removeClass("border border-danger"); 
		$('#errordocumento').hide();
		$('#nombreuser').addClass("border border-danger");
		$('#nombreuser').focus();
		$('#errornombre').show();
	} else if (apellido.length == 0){
		$('#nombreuser').removeClass("border border-danger"); 
		$('#errornombre').hide();
		$('#apellidouser').addClass("border border-danger");
		$('#apellidouser').focus();
		$('#errorapellido').show();
	}else if (usuario.length == 0){
		$('#apellidouser').removeClass("border border-danger"); 
		$('#errorapellido').hide();
		$('#usuarionew').addClass("border border-danger");
		$('#usuarionew').focus();
		$('#errorusuario').show();
	}else if (correouser.length== 0 || caract.test(correouser) == false){
		$('#usuarionew').removeClass("border border-danger");
		$('#errorusuario').hide();
		$('#correouser').addClass("border border-danger");
		$('#correouser').focus()
		$('#errorcorreo').show();
	}else if (tipouser == 0){ 
		$('#correouser').removeClass("border border-danger");  
		$('#errorcorreo').hide();
		$('#TipoUser').addClass("border border-danger");
		$('#TipoUser').focus();	
		$('#errortipou').show();
	}else if (Departamento == 0){
		$('#TipoUser').removeClass("border border-danger");  
		$('#errortipou').hide();
		$('#DepUser').addClass("border border-danger");
		$('#DepUser').focus();
		$('#errordep').show();
	} else { 
		$('#DepUser').removeClass("border border-danger");  
		$('#errornombre').hide();
	$.ajax({
		type:'POST',
		url:'crearuser.php',
		data:{	documento:documento,
				nombre: nombre,
				apellido: apellido,
				usuario: usuario,
				tipouser: tipouser,
				correouser: correouser,
				Departamento: Departamento},
		success: function(data){
			if (data==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Usuario Creado Exitosamente.',
						showConfirmButton: false,
						timer: 2000
					});
                      pagina();
					 $("#ModalUser").modal('hide');
				}else if (data==2){
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Intentas crear un usuario que ya existe.',
						showConfirmButton: false,
						timer: 2200
					});
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Error, no fue posible crear a este usuario.',
						showConfirmButton: false,
						timer: 1500
					});
				}
		}
	});
	}
});
$('#aggUser').click(function(){
	$("#EditarUser").css("display", "none");
    $("#GuardarUser").css("display", "inline");
    $('#ModalLabeluser').html('Nuevo Usuario');
    $("#formularioUser")[0].reset();
	$.ajax({
		url:'../crear/SeleccionDep.php',
		success: function(data){
			$('#DepUser').html(data);
		}
	});
	$.ajax({
		url:'seleccion_tipo_usuario.php',
		success: function(data){
			$('#TipoUser').html(data);
		}
	});
});
 $('#EditarUser').click(function(){
 	$.ajax({
 		type:'POST',
 		data:{
 			documento: $('#documentouser').val(),
 			nombre: $('#nombreuser').val(),
 			apellido: $('#apellidouser').val(),
 			usuario: $('#usuarionew').val(),
 			correo: $('#correouser').val(),
 			TipoUser: $('#TipoUser').val(),
 			TipoDep: $('#DepUser').val(),
 			id: $('#iduser').val()
 		},
 		url: 'editarusuario.php',
 		success:function(e){
 			Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Usuario editado Exitosamente.',
						showConfirmButton: false,
						timer: 2000
					});
 			 		pagina();
					 $("#ModalUser").modal('hide');
 		}
 	})
 });
	$('#TickAbiertos').click(function(){
	
		ticketsAbiertos();
		$("#divEstatus").hide();
		$("#divAsignar").hide();
		$("#divAsignar1").hide();
		$("#divagregarvar").hide();
		$("#mensajeshisto").empty();
	});

	$('#TickAproceso').click(function(){
		var ModuloTickDep = $("#ValueModuloTickDep").val(); //Si esta variable tiene valor se ejecuta codigo para modulo Tickets por departamento
		var buscador = $( "#BuscadorTick" ).val();
		$( "#TickAbiertos" ).removeClass( "active" );
		$( "#TickCerrado" ).removeClass( "active" );
		$( "#TickAproceso" ).addClass( "active" );
		$("#divEstatus").hide();
		$("#divAsignar").hide();
		$("#divAsignar1").hide();
		$("#divagregarvar").hide();
		$('#msjEnviar').hide();
		$("#mensajeshisto").empty();
		if (buscador && !ModuloTickDep) {
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'ticketsProceso.php',
			data:{variable: variable,
					NT: buscador},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}else if (ModuloTickDep && buscador){
			var estatus=2;
			$('#estatusmoduldep').val(2);
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep,
					buscador: buscador},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}else if (ModuloTickDep && !buscador){
			var estatus=2;
			$('#estatusmoduldep').val(2);
			var variable=2;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		} else {	
			var variable=2;
		$.ajax({
			type: 'POST',
			url: 'ticketsProceso.php',
			data:{variable: variable},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}
	});


	$('#optseriales').change(function(){
		var valor=$( "#optseriales" ).val();

		if (valor != '') {
			$("#BotonesCreadores").show();
			
		}else{
			$("#BotonesCreadores").hide();
		}

	})
	
	$('#TickCerrado').click(function(){
		var ModuloTickDep = $("#ValueModuloTickDep").val(); //Si esta variable tiene valor se ejecuta codigo para modulo Tickets por departamento
		var buscador = $( "#BuscadorTick" ).val();
		$( "#TickAbiertos" ).removeClass( "active" );
		$( "#TickAproceso" ).removeClass( "active" );
		$( "#TickCerrado" ).addClass( "active" );
		$("#divEstatus").hide();
		$("#divAsignar").hide();
		$("#divAsignar1").hide();
		$("#divagregarvar").hide();
		$("#mensajeshisto").empty();
		//$("#msjEnviar").css("display", "none");
		$('#msjEnviar').hide();
		if (buscador && !ModuloTickDep) {
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'ticketsCerrado.php',
			data:{variable: variable,
					NT: buscador},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		} else if (ModuloTickDep && !buscador){
			var estatus=12;
			$('#estatusmoduldep').val(12);
			var variable=2;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep
					},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}else if (ModuloTickDep && buscador){
			var estatus=12;
			$('#estatusmoduldep').val(12);
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep,
					buscador: buscador
					},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}else {	
			var variable=2;
		$.ajax({
			type: 'POST',
			url: 'ticketsCerrado.php',
			data:{variable: variable},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'ticketsCerrado.php',
		// 	success: function(e){
		// 		$('#tickets').html(e);
		// 	}
		// });
	});

	$('#selectmotivo').keyup(function(){
			var dato = $('#selectmotivo').val();
			$.ajax({
			type: 'POST',
			url: 'selectmotivo.php',
			data:{dato: dato},
			success: function(e){
				$('#PosiblesResultados').html(e);
			}
		});
	}); 

	$('#guardarmensj').click(function(){
		var parametros = $("select#jsListobservacionesComentario").find('option:selected').text(); // Capturamos el texto del option seleccionado

		var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'nuevoMensaje.php' : '../mis_tickets/nuevoMensaje.php';
		$.ajax({
			type: 'POST',
			url: urlphp,
			data: {	//mensaje: $('#mensjnew').val(),
					id:$('#idtick').val(),
					asignado:$('#asignadoTick').val(),
					estatus:$('#estatusTick').val(),
					parametros},
			success: function(data){
				if (data==1) {					
                      pagina();
                     // $('#mensjnew').val('');
                      $("#mensajeshisto").animate({ scrollTop: $('#mensajeshisto').prop("scrollHeight")}, 1000);
					}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No fue posible cargar su respuesta.',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
		});
	});
	$('#ExportarMisTickets').click(function(){
		var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'nuevoMensaje.php' : '../mis_tickets/nuevoMensaje.php';
		$.ajax({
			type: 'POST',
			url: 'exportar.php',
			// data: {	mensaje: $('#mensjnew').val(),
			// 		id:$('#idtick').val(),
			// 		asignado:$('#asignadoTick').val(),
			// 		estatus:$('#estatusTick').val()},
			success: function(data){
				alert('exito');
				// if (data==1) {					
    //                   pagina();
    //                   $('#mensjnew').val('');
    //                   $("#mensajeshisto").animate({ scrollTop: $('#mensajeshisto').prop("scrollHeight")}, 1000);
				// 	}else{
				// 	Swal.fire({
			 //    		position: 'center-top', 
				// 		icon: 'error',
				// 		title: 'No fue posible cargar su respuesta.',
				// 		showConfirmButton: false,
				// 		timer: 1500
				// 	});
				// }
			}
		});
	});

 	 $("#comentarioFinal").on('keyup', function(){
 	 	var campo = $('#comentarioFinal').val();
 	 	if (campo=='') {
 	 		$("#Enviarcomen").hide();
 	 	} else {
		$("#Enviarcomen").show();
 	 	}
	});

 $('#divAbierto').click(function(){	
 	window.location="http://192.168.1.74/intelipunto?var=";
  });
 $('#divCerrado').click(function(){	
 	window.location=dominio8080+"/soporte_postVenta/PHP/mis_tickets/index.php";
  });
   $('#divProceso').click(function(){	
 	window.location=dominio8080+"/soporte_postVenta/PHP/mis_tickets/index.php";
 	ticketsAbiertos();
  });
});
function infodetalles(){
	var url = isNaN($("#ValueModuloTickDep").val()) ? 'infocliente.php' : '../mis_tickets/infocliente.php';
	var rif= $('#rif').val();
	$.ajax({
		type:'POST',
		url:url,
		data:'rif='+rif,
			success:function(e){
				if (e==0) {
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Este cliente no se encuentra en la base de datos.',
					 // footer: '<a href>Why do I have this issue?</a>'
					})
				}
			 else 
				{
				//$('#infor').show();
				$('#infocliente').html(e);
			}
		}
	});
};


function pagina(){
var pagina = $('#pagina').val();
if (pagina==1) {
 	$.ajax({
		type:'POST',
		url:'paginar.php',
			success: function(data){
			
				
					$('#dep').html(data);
					$('#dataTable1').DataTable();
			
			}
	});

} else if (pagina==2){
	$.ajax({
		type:'POST',
		url:'paginaruser.php',
			success: function(data){
			
				
					$('#tablauser').html(data);
			        $('#dataTable').DataTable();
			}
	});
} else if (pagina==3){
	$.ajax({
		type:'POST',
		url:'paginar.php',
			success: function(data){
					$('#ideas').html(data);
			    
			}
	});
}else if (pagina==4){
	ticketsAbiertos();
}
else if (pagina==5){
	var id=$('#idtick').val();
	 MostrarHistorialMjs(id);
}else if (pagina==6){
	var banco=$('#banco').val();
	var departamento=$('#departamento').val();
	$('#dataTable2').DataTable({
		"ajax":{
			"type":'POST',
			"data":{banco : banco, departamento : departamento},
			"url":'reportegeneralbusqueda.php', 
		},
		
		"columns": [
		    {"data": "numeroticket", className: "text-center"},
		    {"data": "rifcliente"},
		    {"data": "nombre", className: "text-center" },
		    {"data": "serialpos", className: "text-center"},
		    {"data": "descestatus"},
		    {"data": "id_ticket"},
		    {"defaultContent":"<a class='detalle' type='href' title='Ver'>Detalle</a>", className: "text-center"},
		    {"data": "restafecha", className: "text-center",
		      	"render" : function (data, type, full, meta, row) {
			        if (data == "00:00:00" || data === "00:00:00") {
			          return "Cerrado el mismo día";
			        }else if (data==null){
			          return "Creado Hoy";
			        }else{
			          return data;
			        }
		      	}
		    },
		    {"data": "motivo", className: "text-center" },
		    {"data": "departamento", className: "text-center" },
		    {"data": "usuariocrea", className: "text-center"},
		    {"data": "usuarioasignado", className: "text-center"},
		    {"data": "usuariocierre"},
		    {"data": "fechacrea", className: "text-center" },
		    {"data": "fechaproceso", className: "text-center" },
		    {"data": "fechacierre", className: "text-center" },
		    {"data": "banco"},
		    {"data": "entregado_alcliente", className: "text-center" },
		    {"data": "fecha_entrega", className: "text-center" },
		    {"data": "direccion"},
		    {"data": "departamentocrea", className: "text-center" },
		    {"data": "id_adm", className: "text-center" }
    	],
    	"dom": 'Bfrtip',
      	buttons: [
        {
            extend: 'excelHtml5', 
            text: 'Excel',        
         
        exportOptions : {
        columns: [ 0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }
    }],
    	"scrollX": "true",
	    "scroll": "true"
	    
	});
	
}else if (pagina==7){
	$('#dataTable2').on( 'click', function () {
	    table.destroy();
	} );
	var banco=$('#banco').val();
	var departamento=$('#departamento').val();
	$('#dataTable3').DataTable({
		"ajax":{
			"type":'POST',
			"data":{banco : banco, departamento : departamento},
			"url":'reportebancosbusqueda.php', 
		},
		
		"columns": [
			{"data": "id_consecutivo", className: "text-center"},
			{"data": "banco"},
			{"data": "razonsocial", className: "text-center" },
		    {"data": "numeroticket", className: "text-center"},
		    {"data": "coddocumento"},
		    {"data": "nroafiliacion", className: "text-center" },
		    {"data": "serialpos", className: "text-center" },
		    {"data": "fechaconfpago", className: "text-center" },
		    {"data": "solicitud", className: "text-center"},
		    {"data": "cantidad", className: "text-center"},
		    {"data": "descripcionmotivos"},
		    {"data": "fechacreacion", className: "text-center" },
		    {"data": "mescreacion", className: "text-center" },
		    {"data": "aniocreacion", className: "text-center" },
		    {"data": "fechaproceso"},
		    {"data": "intervalo", className: "text-center",
		      	"render" : function (data, type, full, meta, row) {
			        if (data == "00:00:00" || data === "00:00:00") {
			          return "Cerrado el mismo día";
			        }else if (data==null){
			          return "Creado Hoy";
			        }else{
			          return data;
			        }
		      	}
		    },
		    {"data": "tiposervicio", className: "text-center" },
		    {"data": "descestatus", className: "text-center" },
		    {"data": "desc_detalle", className: "text-center"},
		    {"data": "tipopos", className: "text-center"},
		    {"data": "municipio", className: "text-center" },
		    {"data": "estado", className: "text-center" },
		    {"data": "direccion"},
		    {"data": "serialsustituido", className: "text-center" }
    	],
    	"dom": 'Bfrtip',
        "buttons": [
            'pageLength',
            {extend: 'excelHtml5', footer: true,
            text: 'Excel', 
            datatype: "text",
              }
        ],
        "columnDefs": [
           {
                 "targets": [ 0],
                 "visible": false,
             }
         ],
    	"scrollX": "true",
	    "scroll": "true"
	    
	});
	
}else if (pagina==8){
	$('#dataTable2').on( 'click', function () {
	    table.destroy();
	} );
	$('#dataTable3').on( 'click', function () {
	    table.destroy();
	} );
	var idticket=$('#idticket').val();
	//alert(idticket);
	$('#dataTable4').DataTable({
		"ajax":{
			"type":'POST',
			"data":{idticket : idticket},
			"url":'buscarreportedetallado.php', 
		},
		
		"columns": [
		    {"data": "id_ticket", className: "text-center"},
		    {"data": "nombreusuarioasignado"},
		    {"data": "mensaje", className: "text-center" },
		    {"data": "departamento", className: "text-center"},
		    {"data": "fecha_enproceso"}
    	],
    	"dom": 'Bfrtip',
        "buttons": [{
        	"extend": 'excelHtml5',
            "text": 'Excel',
            "exportOptions" : {
        	"columns": '[ 0, 1, 2, 3, 4]'
      		}}
            
            
        ],
    	"scrollX": "true",
	    "scroll": "true"
	    
	});
	
}else if (pagina==9){
	$('#dataTable2').on( 'click', function () {
	    table.destroy();
	} );
	$('#dataTable3').on( 'click', function () {
	    table.destroy();
	} );
	$('#dataTable4').on( 'click', function () {
	    table.destroy();
	} );
	//alert(idticket);
	var depusuario=$('#depusuario').val();
	//alert(idticket);
	$('#dataTable5').DataTable({
		"ajax":{
			"type":'POST',
			"data":{depusuario : depusuario},
			"url":'buscarnotificaciones.php', 
		},
		"columns": [
		    {"data": "id_ticket", className: "text-center"},
			//{"defaultContent":"<a class='detalle' type='href' title='Ver'>Detalle</a>", className: "text-center"},
			{"defaultContent":"<a class='gestionar' type='href' title='Ver'>Gestionar</a>", className: "text-center"},
		    {"data": "mensaje"},
		    {"data": "fecha_crea", className: "text-center" },
		    {"data": "rif_cliente", className: "text-center"},
		    {"data": "nombre_cliente", className: "text-center"},
			{"data": "serialpos", className: "text-center"}
    	],
    	"dom": 'Bfrtip',
        "buttons": [{
        	"extend": 'excelHtml5',
            "text": 'Excel'}
        ],
    	"scrollX": "true",
	    "scroll": "true"
	    
	});
	
}

return false;
}

$('table#dataTable2 tbody').on( 'click', 'a.detalle', function () {
  //alert('algo');
    var table=$('table#dataTable2').DataTable();
    var D =  table.row($(this).parents("tr")).data();
    var id=D.id_ticket;
    var url = "../reportes/reportedetalle.php?&var="+id; 
    $(location).attr('href',url);

});

$('table#dataTable5 tbody').on( 'click', 'a.gestionar', function () {
	//alert('algo');
	  var table=$('table#dataTable5').DataTable();
	  var D =  table.row($(this).parents("tr")).data();
	  var numeroticket=D.id_ticket;
	  var url = "../tickets_dep/index.php?&var="+numeroticket; 
	  $(location).attr('href',url);
  
});

function eliminard(id){

Swal.fire({
  title: 'Estas Seguro',
  text: "Que desea eliminar?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Eliminar!'
}).then((result) => {
  if (result.value) {
	 	$.ajax({
		type:'POST',
		data:{id:id},
		url:'eliminar.php',
			success: function(data){
			if (data==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Eliminado con éxito.',
						showConfirmButton: false,
						timer: 1500
					});
					pagina();
					
					
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo Borrar.',
						showConfirmButton: false,
						timer: 1500
					});
				}
							
			}
	});
  }
})


}

function eliminarUsuaio(id){

Swal.fire({
  title: '¿Estas Seguro',
  text: "Que desea eliminar a este usuario?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Eliminar!'
}).then((result) => {
  if (result.value) {
	 	$.ajax({
		type:'POST',
		data:{id:id},
		url:'EliminarUsuario.php',
			success: function(data){
			if (data==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Eliminado con éxito.',
						showConfirmButton: false,
						timer: 1500
					});
					pagina();
					
					
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo Borrar.',
						showConfirmButton: false,
						timer: 1500
					});
				}
							
			}
	});
  }
})
}
function EditarUsuario(id){
	$('input[type="text"]').val('');
	$("#ModalUser").modal('show');
 	$("#GuardarUser").css("display", "none");
    $("#EditarUser").css("display", "inline");
    $('#iduser').val(id);

		$.ajax({
			url:'seleccion_tipo_usuario.php',
			success: function(data){
			
			$('#TipoUser').html(data);
		}
	});
	 $.ajax({
    	type: 'POST',
    	data:{id:id},
    	url:'consultaUsuario.php',
    	success:function(e){
    		var array = jQuery.parseJSON(e);
    		$('#TipoUser option:contains('+ array.tipo_usuario +')').attr('selected',true);
    		//$('#DepUser option[value='+ array.iddep +']').attr('selected',true);
    		$('#nombreuser').val(array.nombre);
    		$('#apellidouser').val(array.apellido);
    		$('#correouser').val(array.usuario_email);
    		
    		//$('#TipoUser option[value='+ array.tipo +']').attr('selected',true);
    		//$('#TipoUser').append('<option value="opcion_nueva_1" selected="selected">Opción nueva 1</option>');
    		   	
    	}
    });
		
};
function ResetPass(id){
	Swal.fire({
  title: '¿Estas Seguro',
  text: "Que desea reiniciar la clave de este usuario?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Reestablecer'
}).then((result) => {
  if (result.value) {
	 	$.ajax({
		type:'POST',
		data:{id:id},
		url:'resetpass.php',
			success: function(data){
			if (data==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Realizado con éxito.',
						showConfirmButton: false,
						timer: 1500
					});
					pagina();
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo reiniciar su clave.',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
	});
  }
});
};

function mostrarInfo(id){
	$("#ideas").fadeToggle('slow', 'swing');
	$("#info-idea").fadeIn('slow', 'swing');
	 $.ajax({
		type:'POST',
		url:'detalle.php',
		data:{id:id},
			success: function(data){
				$('#info-idea').html(data);
			}
	});
};
function MostrarHistorialMjs(id){
	
	//Clean bootstrapDualListbox before charged new items JuniorsQ
	var jsListobservaciones = $("#jsListobservacionesComentario").bootstrapDualListbox({ 
		allowClear: true,
		setRemoveAllLabel : true,
		});
		jsListobservaciones.empty();

	 var ventanaCerradaSelect = document.getElementById("TickCerrado").className;
	if (ventanaCerradaSelect == 'nav-link active') {
		$('#divEstatus').hide();
		$('#divAsignar').hide();
		$('#divAsignar1').hide();
		$('#divagregarvar').hide();
		$('#msjEnviar').hide();
	} else {
		$('#botonestatusnotifi').show();
		$('#idticketnot').val(id);
		$('#divEstatus').hide();
		$('#divAsignar').hide();
		$('#divAsignar1').hide();
		$('#divagregarvar').hide();
		$('#msjEnviar').hide();
		var urlphp2 = isNaN($("#ValueModuloTickDep").val()) ? 'consultarnumeroguia.php' : '../mis_tickets/consultarnumeroguia.php';

		$.ajax({
			type:'POST',
			url:urlphp2,
			data:{id:id},
				success: function(data){
					$('#numeroguia').val(data);
			
				}
				
		});

		var urlphp2 = isNaN($("#ValueModuloTickDep").val()) ? 'consultardireccionenvi.php' : '../mis_tickets/consultardireccionenvi.php';

		$.ajax({
			type:'POST',
			url:urlphp2,
			data:{id:id},
				success: function(data){
					$('#entregazoom').val(data);
			
				}
				
		});

		var urlphp2 = isNaN($("#ValueModuloTickDep").val()) ? 'consultarserialprest.php' : '../mis_tickets/consultarserialprest.php';

		$.ajax({
			type:'POST',
			url:urlphp2,
			data:{id:id},
				success: function(data){
					$('#serialprest').val(data);
			
				}
				
		});
	}
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'mostrarMensajes.php' : '../mis_tickets/mostrarMensajes.php';

	 $.ajax({
		type:'POST',
		url:urlphp,
		data:{id:id},
			success: function(data){
			$('#mensajeshisto').html(data);
			pObservacionesComentario();
		
			}
			
	});

};
function atrasb(){
$("#ideas").fadeToggle('slow', 'swing');
$("#info-idea").fadeOut('slow', 'swing');
}
function ticketsAbiertos(){
	var ModuloTickDep = $("#ValueModuloTickDep").val(); //Si esta variable tiene valor se ejecuta codigo para modulo Tickets por departamento
	var buscador =  $("#BuscadorTick").val();
		$( "#TickAbiertos" ).addClass( "active" );
		$( "#TickAproceso" ).removeClass( "active" );
		$( "#TickCerrado" ).removeClass( "active" );
		$('#msjEnviar').hide();
		$("#mensajeshisto").empty();
	if (buscador && !ModuloTickDep) {
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'ticketsAbiertos.php',
			data:{variable: variable,
					NT: buscador},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		} 
		else if (ModuloTickDep && !buscador){
			var estatus=1;
			$('#estatusmoduldep').val(1);
			var variable=2;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}else if (ModuloTickDep && buscador){
			var estatus=1;
			$('#estatusmoduldep').val(1);
			var variable=1;
			$.ajax({
			type: 'POST',
			url: 'buzondep.php',
			data:{	variable: variable, 
					estatus : estatus,
					ModuloTickDep : ModuloTickDep,
					buscador: buscador},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}
		else {	
			var variable=2;
		$.ajax({
			type: 'POST',
			url: 'ticketsAbiertos.php',
			data:{variable: variable},
			success: function(e){
				$('#tickets').html(e);
			}
		});
		}	// $.ajax({
		// 	type: 'POST',
		// 	url: 'ticketsAbiertos.php',
		// 	success: function(e){
		// 		$('#tickets').html(e);
		// 	}
		// });
	}
function modifb(){
   	$("#guardarb").fadeToggle("fast", "swing");
	$("#modifb").prop('disabled', false);
}
function guardarbc(id){
   var solu = $("#modifb").val();
   if (solu != '') {
		$.ajax({
			type: 'POST',
			url: 'updatebc.php',
			data:{id:id,solu:solu},
			success: function(e){
				if (e==1) {
					Swal.fire({
			    		position: 'center-top', 
						icon: 'success',
						title: 'Realizado con éxito.',
						showConfirmButton: false,
						timer: 1500
					});


				}else{

					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo actualizar con exito',
						showConfirmButton: false,
						timer: 1500
					});
				}
			}
		});
	}else{

   		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No puede Guardar una solucion vacia',
						showConfirmButton: false,
						timer: 1500
					});
   }
}

function cerrarticket(estatus){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'cambiarestatus.php' : '../mis_tickets/cambiarestatus.php';
	var comentarioFinal= $('#comentarioFinal').val();
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{estatus: estatus,
			  id : $('#idtick').val(),
			  comentarioFinal:comentarioFinal},
		success: function(data){
			if (data==1) {
				Swal.fire(
				    'Estatus cambiado con exito.',
				    '',
				    'success'
				)
				pagina();
              	ticketsAbiertos();
              	$('#TickCerrado').click();
			}
		}
	});
}

function cambiarestatus(estatus){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'cambiarestatus.php' : '../mis_tickets/cambiarestatus.php';
	var idtick= $('#idtick').val();
	Swal.fire({
		title: '¿Seguro desea cambiar el estatus de este ticket?',
		showDenyButton: true,
  		showCancelButton: true,
		icon: 'warning',
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si'
	}).then((result) => {
		//console.log(estatus);
		if (result.value) {
			if(estatus==12){
				$('#modalcerrar').modal('show');
			}else if(estatus==14){

				$('#modalcambiardep').modal('show');
                //$('#estatusasig').append('<input type="text" name="" value="estatus" id="estatusasig">');
                $('#estatusasig').val(estatus);
                $('#idticket').val(idtick);
                $.ajax({
					type:"POST",
					url:'../mis_tickets/seleccionDepartamentoEstatus.php',
					data:{idtick : idtick},
					success: function(data){
						$('#departamento').html(data);
					}
				});
			}else
				$.ajax({
					type:"POST",
					url:urlphp,
					data:{estatus: estatus,
						  id : $('#idtick').val()},
					success: function(data){
						if (data==1) {
							Swal.fire(
							    'Estatus cambiado con exito.',
							    '',
							    'success'
							)
							pagina();
			              	ticketsAbiertos();
			              	$('#TickAproceso').click();
						}
					}
				});
		} else if (result.dismiss) {
		    Swal.fire('Los cambios no han sido guardados', '', 'info')
		}
	});
}



	/*$.ajax({
		type:"POST",
		url:urlphp,
		data:{estatus: estatus,
				id : $('#idtick').val()},
		success: function(data){
			if (data==1) {
				Swal.fire({
				  title: 'Seguro desea cambiar el estatus de este ticket?',
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Si'
				}).then((result) => {
				  if (result.value) {
				    Swal.fire(
				      'Estatus cambiado con exito.',
				      '',
				      'success'
				    )
				pagina();
              	ticketsAbiertos();
              	if (estatus==12){
              		$('#TickCerrado').click();
              	}else
              		$('#TickAproceso').click();
				  }
				})	
			}		
		}
	});*/



function UserPorAsignar(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'seleccionUsuarios.php' : '../mis_tickets/seleccionUsuarios.php';
	var dep = $("#idtick").val();
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{dep : dep},
		success: function(data){
			$('#Usuariosporasignar').html(data);
		}
	});
}
function DepartamentoAsig(){
var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 
'seleccionDepartamento.php' : 
'../mis_tickets/seleccionDepartamento.php';
var dep = $("#idtick").val();
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{dep:dep},
		success: function(data){
			$('#DepartamentoAsig').html(data);
		}
	});
}
function asignaciondeTickets(id){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'asignandoUsuario.php' : '../mis_tickets/asignandoUsuario.php';
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{iduser : id,
				idticket : $('#idtick').val()},
		success: function(data){
			if (data==1) {
				Swal.fire({
				  title: 'Seguro desea hacer esta asignación?',
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Si'
				}).then((result) => {
				  if (result.value) {
				    Swal.fire(
				      'Asignación exitosa',
				      '',
				      'success'
				    )
		 		pagina();
                $("#mensajeshisto").animate({ scrollTop: $('#mensajeshisto').prop("scrollHeight")}, 1000);
					
					
				  }
				})
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Error',
						showConfirmButton: false,
						timer: 1500
					});
				}
		}
	});
}
function asignaciondeTicketsD(id){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'asignandoDepartamento.php' : '../mis_tickets/asignandoDepartamento.php';
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{iddep : id,
				idticket : $('#idtick').val()},
		success: function(data){
			if (data==1) {
				Swal.fire({
				  title: 'Seguro desea hacer esta asignación?',
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Si'
				}).then((result) => {
				  if (result.value) {
				    Swal.fire(
				      'Asignación exitosa',
				      '',
				      'success'
				    )
		 		pagina();
                $("#mensajeshisto").animate({ scrollTop: $('#mensajeshisto').prop("scrollHeight")}, 1000);
					
					
				  }
				})
				}else{
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Error',
						showConfirmButton: false,
						timer: 1500
					});
				}
		}
	});
}

function busquedainfocliente(dato){
var url = "busqueda.php"
//alert(dato);
	$.ajax({
		type:'POST',
		url:url,
		data:'rif='+dato,
			success:function(e){
				//alert(e);
				if (e==0) {
					$('#infor').hide();
					$("#brif").addClass(" is-invalid");
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Este cliente no se encuentra en la base de datos.',
					 // footer: '<a href>Why do I have this issue?</a>'
					})
				}else if (e==1) {
					$('#infor').hide();
					$("#brif").addClass(" is-invalid");
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Este cliente se encuentra declinado.',
					 // footer: '<a href>Why do I have this issue?</a>'
					})
				}else if (e==2) {
					$('#infor').hide();
					$("#brif").addClass(" is-invalid");
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Este cliente se encuentra desafiliado.',
					 // footer: '<a href>Why do I have this issue?</a>'
					})
				}else if (e==3) {
					$('#infor').hide();
					$("#brif").addClass(" is-invalid");
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Este cliente presenta un percance.',
					 // footer: '<a href>Why do I have this issue?</a>'
					})
				}
			 else 

				{
				;
				$('#CerrarTick').removeAttr("disabled");
				$("#brif").removeClass(" is-invalid");
				$("#brif").addClass(" is-valid");
				$('#infor').show();
				$('#infor').html(e);
				$("#rif").val($("#RIFCONSULTA").val());
				var razonsocial = $("#razonsocial").val();
				var factura = $("#factura").val();
				$("#rs").val(razonsocial);
				$("#PersonaContac").val($("#rlegal").val());
				$("#Correo").val($("#correorl").val());
				$("#NumeroTelf1").val($("#telf1").val());
				$("#NumeroTelf2").val($("#telf2").val());
				var dato2 = $('#RIFCONSULTA').val();
				var depusuarios = $('#depusuarios').val();
				var idconsecutivo = $('#id_consecutivo').val();
				var variable=dato2+'/'+idconsecutivo;
					$.ajax({
					type: 'POST',
					url: 'selectserial.php',
					data:{variable: variable},
					success: function(e){
						$('#optseriales').html(e);
					}
				});
					console.log(factura);

				if (factura!='' || factura== null ) {
					$("#BotonesCreadores").show();
					
				}else{
					$("#BotonesCreadores").hide();
				}
				//alert(dato2);
				$.ajax({
					type:'POST',
					url: 'consutaltickets.php',
					data:{busqueda: dato2,
					razonsocial: $("#razonsocial").val()},
					success: function(data){
						if (data>0) {
							$("#tickClie").show();
					
						}else{
							$("#tickClie").hide();
						}
					}
				})
					$.ajax({
						type:'POST',
						url:'SeleccionDep.php',
						data:{depusuarios: depusuarios},
						success: function(data){
							$('#asignarDep').html(data);
						}
					});

				$.ajax({
					url:'selectmotivollamada.php',
					success: function(data){
						$('#selectmotivo').html(data);
					}
				});
			}
		}
	});
};

function enviarmensaje(nombre, empresa, ticket, motivo, accion,tipoticket, correo) {
	$.ajax({
		type: 'POST',
		url: '../phpmailer/enviar.php',
		data:{	NB: nombre,
				EM: empresa,
				TK: ticket,
				MT: motivo,
				AC: accion,
				TPTK: tipoticket,
				Correo: correo}

	});
};
function datospassword(usuarioc,passwordc){
cadena="usuario=" + usuarioc +
          "&password=" + passwordc;
          $.ajax({
					type:'POST',
					url: 'password.php',
					data:cadena,
					success: function(data){
						if (data>0) {
							$("#tickClie").show();
					
						}else{
							$("#tickClie").hide();
						}
					}
				})
}


function Asignarregionref(id){ 
	//alert(id);
	window.location="asignaregiones.php?var="+id;

}

function dataBD(id){
	$.ajax({
		type:'POST',
		url:'asignaregionesBD.php',
		success: function(data){
				$('#tablaregiones').html(data);
		        $('#dataTableasigreg').DataTable();
		}
	});
}
function guardaredit(){
$('#guardaredit').click(function(){
	var correoedit=$('#correodm').val();
	var telefono1edit= $('#telefono1dm').val();
	var telefono2edit= $('#telefono2dm').val();
	var correo= $('#correodm0').val();
	var RIF= $('#RIFCONSULTA').val();
	if (correoedit!="" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correoedit))){
      Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'La dirección de email es incorrecta.',
						showConfirmButton: false,
						timer: 2500
    })
  } else if ( telefono1edit=='' || correoedit=='') {
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Campos obligatorios vacios.',
						showConfirmButton: false,
						timer: 2500
	});
		if (telefono1edit=='') {
			$("#telefono1dm").addClass(" is-invalid");
		}else {
			$("#telefono1dm").removeClass(" is-invalid");
		}
		if (correoedit=='') {
			$("#correodm").addClass(" is-invalid");
		}else {
			$("#correodm").removeClass(" is-invalid");
		}
	}else if(telefono1edit.length<12){
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'El número telefónico no esta completo.',
						showConfirmButton: false,
						timer: 2500
	});
		$("#telefono1dm").addClass(" is-invalid");
	}
	 else { 
		$("#telefono1dm").removeClass(" is-invalid");
		$("#correodm").removeClass(" is-invalid");
	$.ajax({
		type:'POST',
		url:'editarinfo.php',
		data:{	RIF:RIF,
				NTF1: telefono1edit,
				NTF2: telefono2edit,
				ML: correoedit},
		success: function(data){
			if (data!=0) {
					Swal.fire(
					  'Datos modificados con éxito',
					)
					//alert(correo)
					$( "#correodm" ).hide();
  					$( "#telefono1dm" ).hide();
  					$( "#telefono2dm" ).hide();
  					$('#detalles').modal('hide');
        			$( "#editarinfo" ).show();
        			$( "#guardaredit" ).hide();
       			//$('#infor').hide();
       			// enviarmensaje(PersonaContac,razonsocial,numeroticket,motivo,accion,'1',Correo);
				}else if (data==3){
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo realizar la modificación.',
						showConfirmButton: false,
						timer: 2500
					});
				}
			}
		
		});
	}
});
}

function cambiarestaus(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'selectestatus.php' : '../mis_tickets/selectestatus.php';
	var estatus= $('#estatusTick').val();
	var dato = $('#estatusTick').val()+'/'+$('#depart').val();
	if (estatus=12){ 
		$.ajax({
			type:"POST",
			url:urlphp,
			data:{dato : dato},
			success: function(data){
				$("#OpcEstatus").html(' <a  class="dropdown-item" data-toggle="modal" style="cursor: pointer" data-target="#modalcerrar">Cerrado</a>');
				$('#OpcEstatus').html(data);
			}
		});
	}else 
		$.ajax({
			type:"POST",
			url:urlphp,
			data:{dato : dato},
			success: function(data){
				$("#OpcEstatus").html('<a class="dropdown-item" style="cursor: pointer" onclick="cambiarestatus(2);"></a>'+
			' <a  class="dropdown-item" data-toggle="modal" style="cursor: pointer" data-target="#modalcerrar">Cerrado</a>'); 
				$('#OpcEstatus').html(data);
			}
		});
}

function guardaredit(){
$('#guardaredit').click(function(){
	var correoedit=$('#correodm').val();
	var telefono1edit= $('#telefono1dm').val();
	var telefono2edit= $('#telefono2dm').val();
	var correo= $('#correodm0').val();
	var RIF= $('#RIFCONSULTA').val();
	if (correoedit!="" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correoedit))){
      Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'La dirección de email es incorrecta.',
						showConfirmButton: false,
						timer: 2500
    })
  } else if ( telefono1edit=='' || correoedit=='') {
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'Campos obligatorios vacios.',
						showConfirmButton: false,
						timer: 2500
	});
		if (telefono1edit=='') {
			$("#telefono1dm").addClass(" is-invalid");
		}else {
			$("#telefono1dm").removeClass(" is-invalid");
		}
		if (correoedit=='') {
			$("#correodm").addClass(" is-invalid");
		}else {
			$("#correodm").removeClass(" is-invalid");
		}
	}else if(telefono1edit.length<12){
		Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'El número telefónico no esta completo.',
						showConfirmButton: false,
						timer: 2500
	});
		$("#telefono1dm").addClass(" is-invalid");
	}
	 else { 
		$("#telefono1dm").removeClass(" is-invalid");
		$("#correodm").removeClass(" is-invalid");
	$.ajax({
		type:'POST',
		url:'editarinfo.php',
		data:{	RIF:RIF,
				NTF1: telefono1edit,
				NTF2: telefono2edit,
				ML: correoedit},
		success: function(data){
			if (data!=0) {
					Swal.fire(
					  'Datos modificados con éxito',
					)
					//alert(correo)
					$( "#correodm" ).hide();
  					$( "#telefono1dm" ).hide();
  					$( "#telefono2dm" ).hide();
  					$('#detalles').modal('hide');
        			$( "#editarinfo" ).show();
        			$( "#guardaredit" ).hide();
       			//$('#infor').hide();
       			// enviarmensaje(PersonaContac,razonsocial,numeroticket,motivo,accion,'1',Correo);
				}else if (data==3){
					Swal.fire({
			    		position: 'center-top', 
						icon: 'error',
						title: 'No se pudo realizar la modificación.',
						showConfirmButton: false,
						timer: 2500
					});
				}
			}
		
		});
	}
});
}

function cambiarestaus(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'selectestatus.php' : '../mis_tickets/selectestatus.php';
	var estatus= $('#estatusTick').val();
	var dato = $('#estatusTick').val()+'/'+$('#depart').val();
	if (estatus=12){ 
		$.ajax({
			type:"POST",
			url:urlphp,
			data:{dato : dato},
			success: function(data){
				$("#OpcEstatus").html(' <a  class="dropdown-item" data-toggle="modal" style="cursor: pointer" data-target="#modalcerrar">Cerrado</a>');
				$('#OpcEstatus').html(data);
				//$('#modalcerrar').show();
			}
		});
	}else 
		$.ajax({
			type:"POST",
			url:urlphp,
			data:{dato : dato},
			success: function(data){
				$("#OpcEstatus").html('<a class="dropdown-item" style="cursor: pointer" onclick="cambiarestatus(2);"></a>'+
			' <a  class="dropdown-item" data-toggle="modal" style="cursor: pointer" data-target="#modalcerrar">Cerrado</a>'); 
				$('#OpcEstatus').html(data);
			}
		});
}


var dato = $('#tiporeport').val();
$.ajax({
	type: 'POST',
	url: '../reportes/selecttiporeporte.php',
	data:{dato: dato},
	success: function(e){
		$('#tiporeport').html(e);
	}
});

var dato = $('#banco').val();
$.ajax({
	type: 'POST',
	url: '../reportes/selectbanco.php',
	data:{dato: dato},
	success: function(e){
		$('#banco').html(e);
	}
});
 

$("#buscarreportes").on('click', function() {
	var tiporeport = $("#tiporeport").val();
	var banco = $("#banco").val();
	var departamento = $("#departamentoreporte").val();
	
	//alert(tiporeport);
	if (tiporeport == '' || tiporeport == null || tiporeport == '0' || banco == '' || banco == null || banco == '0' || departamento == '' || departamento == null ) {
		if (tiporeport == '' || tiporeport == null || tiporeport == '0'){
			$("#tiporeport").addClass(" is-invalid")
		}else {
			$("#tiporeport").removeClass(" is-invalid");
		}if (banco == '' || banco == null || banco == '0'){
			$("#banco").addClass(" is-invalid")
		}else {
			$("#banco").removeClass(" is-invalid");
		}if (departamento == '' || departamento == null ){
			$("#departamentoreporte").addClass(" is-invalid")
		}else {
			$("#departamentoreporte").removeClass(" is-invalid");
		}
	}
	else {
		if (tiporeport=='1'){
			window.location="inicioreportegeneral.php?var="+banco+'/'+departamento;
		}else if(tiporeport=='2' && banco!='1'){
			window.location="inicioreportebancos.php?var="+banco+'/'+departamento;
		}else if(tiporeport=='2' && banco=='1'){
			$("#banco").removeClass(" is-invalid");
			Swal.fire({
	    		position: 'center-top', 
				icon: 'error',
				title: 'No puede seleccionar todos los bancos para este tipo de reporte',
				showConfirmButton: true
			});
		}
	}
});

function posentregado(){
	checklist=document.getElementById('entregadoalcliente');

	if (checklist.checked){
		$('#modalentregaclientefecha').modal('show');
		checklist.checked = false;
			
	}
}

function registrofechaentrega(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'fechaentrega.php' : '../mis_tickets/fechaentrega.php';
	var fechaentrega= $('#fechaentrega').val();
	var fecha_cierre=$('#fecha_cierre').val();
	var idtick=$('#idtick').val()
	var fecha_cierrem=new Date(fecha_cierre).getTime();
	var fechaentregam=new Date(fechaentrega).getTime();
	const hoy = Date.now();
	//console.log(hoy);
	if (fechaentrega!=""){
		if(fechaentregam <= hoy){
			if(fecha_cierrem <= fechaentregam){ 
				$.ajax({
				type:"POST",
				url:urlphp,
				data:{id : idtick,
					  fechaentrega: fechaentrega},
					success: function(data){
						if (data==1) {
							Swal.fire(
							    'Fecha guardada con exito.',
							    '',
							    'success'
							).then((result) => {
								if (result.value) {
									pagina();
						            ticketsAbiertos();
						            $('#TickCerrado').click();
						            $('#modalentregaclientefecha').modal('toggle');
								}
							});
							
						}
					}
				});
			}else
				Swal.fire({
					position: 'center-top',
					icon: 'error',
					title: 'La fecha de entrega es menor a la fecha de cierre. Verifique',
					showConfirmButton: true
				}).then((result) => {
					if (result.value) {
						$('#modalentregaclientefecha').modal('show');
					}
				});
		}else
		Swal.fire({
				position: 'center-top',
				icon: 'error',
				title: 'La fecha no puede ser mayor al día de hoy',
				showConfirmButton: true
		}).then((result) => {
			if (result.value) {
				$('#modalentregaclientefecha').modal('show');
			}else
				$('#entregadoalcliente').checked = false;
		});
		
	}else
	Swal.fire({
		position: 'center-top', 
		icon: 'error',
		title: 'Debe seleccionar una fecha',
		showConfirmButton: true
	}).then((result) => {
		if (result.value) {
			$('#modalentregaclientefecha').modal('show');
		}else
			$('#entregadoalcliente').checked = false;
	});
}


function asignardepestatus(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'AsignarDepartamentoEstatus.php' : '../mis_tickets/AsignarDepartamentoEstatus.php';
	var departamento = $("#departamento").val();
	var idticket = $("#idticket").val();
	//var OpcEstatus = $("#idticket").val();
	//console.log(departamento);
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{departamento : departamento, idticket : idticket},
		success: function(data){
			if (data==1) {
				Swal.fire(
				    'Estatus cambiado con exito.',
				    '',
				    'success'
				)
				pagina();
              	ticketsAbiertos();
              	$('#TickAproceso').click();
			}else
				Swal.fire({
					position: 'center-top',
					icon: 'error',
					title: 'El estatus no ha podido ser modificado',
					showConfirmButton: true
				}).then((result) => {
					if (result.value) {
						pagina();
		              	ticketsAbiertos();
		              	$('#TickAproceso').click();
					}
				});
		}
	});
}

var iddep = $("#iddep").val();
//alert(iddep);
$.ajax({
	type: 'POST',
	data:{iddep : iddep},
	url: '../reportes/selecciondepartamento.php',
	success: function(e){
		$('#departamentoreporte').html(e);
	}
});

//Muestra posibles Observaciones Select2 bootstrapDualListbox  JuniorsQ
function pObservaciones(){
	var jsListobservaciones = $("#jsListobservaciones").bootstrapDualListbox({ 
	moveOnSelect: true,
	allowClear: true,
	setRemoveAllLabel:true, 
	});
	$("#jsListobservaciones").bootstrapDualListbox('refresh', true);

	$.getJSON("../crear/listObservaciones.php",function(datos){
	    if(datos != 0){
	
	        $.each(datos,function(K,V){
                $("#jsListobservaciones").append("<option value="+V['id']+">"+V['descr']+"</option>");
	        });

		    $("#jsListobservaciones").bootstrapDualListbox('refresh', true);

	    }else{

	    }
	});
}

function pObservacionesComentario(){

	var jsListobservaciones = $("#jsListobservacionesComentario").bootstrapDualListbox({ 
	moveOnSelect: true,
	allowClear: true,
	setRemoveAllLabel:true, 
	});
	
	var dpto=$("#departamentoActual").val();
	$("#jsListobservacionesComentario").bootstrapDualListbox('refresh', true);

	$.getJSON("../mis_tickets/listobComentarios.php",{dpto:dpto} ,function(datos){
	    if(datos != 0){
		
	        $.each(datos,function(K,V){
                $("#jsListobservacionesComentario").append("<option value="+V['id']+">"+V['descr']+"</option>");
	        });

		    $("#jsListobservacionesComentario").bootstrapDualListbox('refresh', true);

	    }else{
			
	    }
	});
}
/*function mostrarnotificacion(depusuarios,usuario_id){
	var dep_usuarios=depusuarios;
	var id_usuario=usuario_id;

	if(){

	}
}*/

function abrirnotificacion(numeroticket){
	//alert (dato);
	window.location="../tickets_dep/index.php?var="+numeroticket;
	
}

function cambiarestatnotif(){
	var id = $("#idticketnot").val();
	//if ($('#divnotificaciones').css('display') == 'none') {
		 $.ajax({
			type: 'POST',
			url: '../tickets_dep/cambiarestatusnotificacion.php',
			data:{id : id},
			success: function(data){
				 $('#divnotificaciones').show();
			     $('#divEstatus').show();
				 $('#divAsignar').show();
				 $('#divAsignar1').show();
				 $('#divagregarvar').show();
				 $('#msjEnviar').show();
				 $('#divcomentarios').show();
				 $('#botonestatusnotifi').hide();
				 btndevolucion();
				 //$("#notification-count").html(data);
			}
		});
		fetch('http://192.168.1.6:3000/enviarnotificacion',{
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			//body:JSON.stringify(datos)
		})
    
}

function abrirnotificaciontodo(){
	//alert (dato);
	window.location="../notificaciones/notificaciones.php";
}

$("#checkequipoentre").on('change', function() {
	if( $(this).is(':checked') ) {
	// Hacer algo si el checkbox ha sido seleccionado
		$("#serialpago").css("display", "inline");
	} else {
	// Hacer algo si el checkbox ha sido deseleccionado
		$("#serialpago").css("display", "none");
	}
});

$("#otrocompcheck").on('change', function() {
	if( $(this).is(':checked') ) {
	// Hacer algo si el checkbox ha sido seleccionado
		$("#otroscomponentes").css("display", "inline");
	} else {
	// Hacer algo si el checkbox ha sido deseleccionado
		$("#otroscomponentes").css("display", "none");
	}
});

function enviarvariables(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'enviarvariables.php' : '../mis_tickets/enviarvariables.php';
	var serialprest= $('#serialprest').val();
	var numeroguia= $('#numeroguia').val();
	var entregazoom= $('#entregazoom').val();
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{serialprest: serialprest, numeroguia:numeroguia, entregazoom:entregazoom,
			  id : $('#idticketnot').val()},
		success: function(data){
			if (data==1) {
				Swal.fire(
				    'Variables guardadas con exito',
				    '',
				    'success'
				)
				pagina();
              	ticketsAbiertos();
				$('input[type="text"]').val('');
				$('#divnotificaciones').show();
			     $('#divEstatus').show();
				 $('#divAsignar').show();
				 $('#divAsignar1').show();
				 $('#divagregarvar').show();
				 $('#msjEnviar').show();
				 $('#divcomentarios').show();
				 $('#botonestatusnotifi').hide();
				 btndevolucion();
			}else{
				Swal.fire(
				    'No se han podido guardar las variables',
				    '',
				    'error'
				)	
			}
		}
	});
}

function devequipo(){
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'liberarserial.php' : '../mis_tickets/liberarserial.php';
	var serialprest= $('#serialprest').val();
	$.ajax({
		type:"POST",
		url:urlphp,
		data:{serialprest: serialprest, 
			  id : $('#idtick').val()},
		success: function(data){
			if (data==1) {
				Swal.fire(
				    'Equipo prestado devuelto con exito',
				    '',
				    'success'
				)
				pagina();
				$('#modalagregarvar').modal('hide');
				$("#btndev").css("display", "none");

			}
		}
	});
}

function autocompletar() {
	var urlphp = isNaN($("#ValueModuloTickDep").val()) ? 'serialdisponibles.php' : '../mis_tickets/serialdisponibles.php';	
	var texto = document.getElementById('validarserial').value;
	var busqueda = document.getElementById('serialprest').value;
	var idticketnot = document.getElementById('idticketnot').value;
	var busqmarca= busqueda.substring(5,7);
	  
	var variable=busqueda+'/'+idticketnot;

	if (busqueda.length>=7) {
		$.post(urlphp,{postvariable:variable},function(data){
			const array = JSON.parse(data);
			var marcapos= array.codmarcapos;
	 		var marca_registro= array.codmarcapos.substring(1,3);
			//console.log(data);
			//alert(array.r.status);
			if (array.r.status!=0 || data==0 || array.r==false) { 

				document.getElementById('validarserial').innerHTML = "Error, Serial no existe";
				document.getElementById('serialprest').style = 'border-color:red;'; 

			}else  {
				
				$('#lista_id').html(data);
				document.getElementById('validarserial').innerHTML = "";
     			 // document.getElementById('serial'+count).style = 'border-color:control;';   12208CT31034448  "021827333301051915586102"
     			//$('#guardarfacturacion').removeAttr('disabled');
			}

			
		}) 

	}  if (busqueda.length<6) {
		//$('#lista_id'+count).show();
		   document.getElementById('serialprest').style = 'border-color:red;'; 
			document.getElementById('caracterespos').innerHTML = "El serial está incompleto";

	} if (busqueda.length>=25) {
		//$('#lista_id'+count).show();
			document.getElementById('serialprest').style = 'border-color:red;'; 

	} else {
		document.getElementById('serialprest').style = 'border-color:control;';
		document.getElementById('caracterespos').innerHTML = "";

	}
}

function btndevolucion(){
	var serialprest = $('#serialprest').val();
	if(serialprest!=''){
		$("#btndev").css("display", "inline");
	}
}
