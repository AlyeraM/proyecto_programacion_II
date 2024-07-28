<?php
session_start();
include ('../../default/conexion.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombreuser'] ?? '';
    $apellido = $_POST['apellidouser'] ?? '';
    $mai = $_POST['correouser'] ?? '';
    $iduser = $_SESSION['iduser'] ?? '';

    if (empty($nombre) || empty($apellido) || empty($mai) ) {
        echo "0"; // Error: faltan datos
        exit;
    }

    // Procesar la imagen
    if (isset($_FILES['profilePicture']) && $_FILES['profilePicture']['error'] == 0) {
        $uploadDir = '../inicio/uploads/'; 

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $uploadFile = $uploadDir . basename($_FILES['profilePicture']['name']);

        if (move_uploaded_file($_FILES['profilePicture']['tmp_name'], $uploadFile)) {
            $sql = "UPDATE usuarios SET nombre='$nombre', apellido='$apellido', usuario_email='$mai', profile_picture='$uploadFile' WHERE usuario_id = '$iduser'";
            $result = pg_query($db_soporte, $sql);

            if ($result) {
                echo "1";
            } else {
                echo "0";
            }
        } else {
            echo "0"; 
        }
    } else {
        echo "0"; 
    }
}
?>
