<?php
	require('../../default/conexion.php');
	
	session_start();
	
	// if(isset($_SESSION["id_usuario"])){
	// 	header("Location: welcome.php");
	// }
	
	if(!empty($_POST))
	{
		//$usuario = mysqli_real_escape_string($mysqli,$_POST['usuario']);
		//ssword = mysqli_real_escape_string($mysqli,$_POST['contraseña']);
		$usuario = $_POST['usuario'];
		$password = $_POST['contraseña'];
		$error = '';
		
		$md5_pass = md5($password);
		
		$sql = "SELECT * FROM usuarios WHERE usuario_email = '$usuario'";
		$result= pg_query($db_soporte, $sql);
		$result2= pg_query($db_soporte, $sql);
		$rows = pg_num_rows($result);
		
		if($rows >= 1) {
			$sql1 = "SELECT * FROM usuarios WHERE usuario_email = '$usuario' AND usuario_clave = '$md5_pass' AND estatus='1'";
			$result1= pg_query($db_soporte, $sql1);
			$rows1 = pg_num_rows($result1);

            if($rows1==0){
				
            	echo json_encode(0); 
            }else{
				$row = pg_fetch_assoc($result1);
				$_SESSION['sesion']=1;
				$_SESSION['nombre']=$row['nombre'].' '.$row['apellido'];
				$_SESSION['iduser']=$row['usuario_id'];
				echo json_encode(1);	
            }
			// $_SESSION['id_usuario'] = $row['id'];
			// $_SESSION['tipo_usuario'] = $row['id_tipo'];
			
			// header("location: welcome.php");
			} else {
				echo json_encode(2);
			// $error = "El nombre o contraseña son incorrectos";
		}
	}
?>