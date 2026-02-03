<?php

    $usuario = $_GET['usuario'];
    $contraseña = $_GET['contraseña'];

    if ($usuario == "pepe" && $contraseña == "hola") {
        echo "usuario correcto";
    } else {
        echo "usuario incorrecto";
    }
?>