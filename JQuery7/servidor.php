<?php
    if(isset($_GET['nombre'])){
        $usuario = $_GET['nombre'];
        echo strtoupper($usuario);
    }
?>