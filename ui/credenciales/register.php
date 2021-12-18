
<!-- RUTAS -->
<?php require_once('../modulos/routes.php');?>
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<body>
<?php include_once(RUTA_MODULOS."header.php");?>

    <div class="contentPerfil">

        <form action="#" method="post" class="formRegisterBm">
        
        <h2 class="formTituloBm"><img src="<?php echo RUTA_IMAGENES;?>logo.png" class="imgLogoRegisterBm" alt="">
        </h2>
        <h3 class="titlePrincipal">CREA UNA CUENTA</h3>
        <div class="contenedorInputsBm">
            
            <input type="text" id="nombrer" name="nombre" placeholder="Nombre" class="input-48Bm" required>
            <input type="text" id="apellidor" name="apellido" placeholder="Apellidos" class="input-48Bm" required>
            <input type="email" id="emailr" name="email" placeholder="Correo" class="input-100Bm" required>
            <input type="text" id="direccionr" name="direccion" placeholder="Dirección" class="input-48Bm" required>
            <input type="text" id="telefonor" name="telefono" placeholder="Numero Telefónico" class="input-48Bm"required >
            <input type="password" id="passr" name="pass" placeholder="Contraseña" class="input-100Bm"required >
            <!-- SELECTORES -->
            <select class="form-select input-100Bm" id="selectDepartamentos" aria-label="Default select example">
            </select>
            <select class="form-select input-100Bm" id="selectMunicipios" aria-label="Default select example">
            </select>
            <div class="custom-control custom-checkbox mb-3 mt-5">
                <input type="checkbox" class="custom-control-input tratamiento" id="customControlValidation1"  required>
                <label class="custom-control-label" for="customControlValidation1" >*Sí. Autorizo el tratamiento de mis datos personales, Consulta nuestra política:</label><p class="overflow-auto " style="height: 60px;font-size: 0.8em;">Al finalizar una orden sin iniciar sesión mediante perfil o aceptar el uso de datos, los datos suministrados serán utilizados únicamente para este pedido, y cualquier solicitud formulada por el titular relacionada con el mismo y serán almacenados en nuestras bases de datos, únicamente con el fin de cumplir con el pedido realizado. Si decide iniciar sesión, o acepta el uso de datos, al dar click, autoriza de manera libre, previa, expresa e informada el tratamiento de sus datos personales a Buyme.</p>
              </div>
            <input type="submit" value="Registrar" id="registerBtn" class="btn btn-primary mx-auto" disabled>
             <!-- SPINNER -->
        <div class="" id="spinner"></div>
            <p class="formLinkBm">¿Ya tienes una cuenta?  <a href="<?php echo RUTA_CREDENCIALES;?>login.php">Ingresa aquí</a></p>
        </div>
        </form>
  
     </div>

   <?php include_once RUTA_MODULOS.'/footer.php'; ?>

   <script>
     
      eventRegistro();
    </script>

</body>
</html>
