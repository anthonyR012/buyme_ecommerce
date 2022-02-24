<!-- RUTAS -->
<?php require_once('../modulos/routes.php');?>
<!DOCTYPE html>
<html lang="en">
 
<!-- ETIQUETA HEAD -->
<?php include('../modulos/headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<body class="user-profile">
<?php include_once("../modulos/header.php");?>

  <div class="wrapper ">

  
  <?php include_once(RUTA_MODULOS."/panelLeft.php");?>
      
      <div class="panel-header panel-header-sm">
      </div>

      <!-- CONTENIDO PERFIL -->
    

<div class="content contentPerfil">
  
<div class="container" id="lista-productos"><
<br>
<br>
              
<P class="titulo">MIS PRODUCTOS</P>
<!--  <hr align="left" noshade="noshade" size="1" width="95%" /> -->
   


<div class="decor"></div>
<br>
<br>
<div class="row row-cols-1 row-cols-md-3 g-4" id="miContenedor">
<br>
<br>
</div>
</div>
  

<!-- Modal EDITAR OFERTAS-->
<div class="modal fade" id="editCredentials" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" style="padding-top:70px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Editar Ofertas</h5>
        <img data-bs-dismiss="modal" aria-label="Close" class="btn-close imgPerfilbm" src="<?php echo RUTA_IMAGENES ?>cerrar.png" alt="">
      </div>
      <div class="modal-body" style="background:var(--main-primary-color)">
        <form action="#" method="POST" id="formEditCredential">
        <div class="container">
            <input type="email"  id="emailupd" name="email" placeholder="Correo" class="input-100Bm" required>
            <input type="password" id="passanti" name="pass" placeholder="Antigua Contraseña" class="input-100Bm"required >
            <input type="password" id="passnew" name="pass" placeholder="Nueva Contraseña" class="input-100Bm"required >
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" id="btnOfertar" data-bs-dismiss="modal"  disabled>Aceptar</button>
      </div>
    </div>
  </div>
</div>
<!-- MODAL EDITAR INFORMACIÓN-->
<div class="modal fade" id="editInformation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" style="padding-top:70px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Editar Información</h5>
        <img data-bs-dismiss="modal" aria-label="Close" class="btn-close imgPerfilbm" src="<?php echo RUTA_IMAGENES ?>cerrar.png" alt="">
      </div>
      <div class="modal-body" style="background:var(--main-primary-color)">
      <form action="#" method="POST" id="formEditInformacion">
        <div class="container">
            <input type="text" id="nombresUpt" name="email" placeholder="Nuevos Nombres" class="input-100Bm" required>
            <input type="text" id="apellidosUpt" name="pass" placeholder="Nuevos Apellidos" class="input-100Bm"required >
            <input type="text" id="direccionUpt" name="pass" placeholder="Nueva Direccion" class="input-100Bm"required >
            <input type="text" id="telefonoUtp" name="pass" placeholder="Nuevo Telefono" class="input-100Bm"required >
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" id="editInformations" class="btn btn-primary" data-bs-dismiss="modal" disabled>Aceptar</button>
      </div>
    </div>
  </div>
</div>

        <!-- NOTIFICACIONES PARA USUARIO -->
        
        <!-- EDITAR OFERTAS -->
      

        <!-- INFORMACION -->
        <div class="modal fade" id="editOferta" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" style="padding-top:70px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Ofertar Producto</h5>
        <img data-bs-dismiss="modal" aria-label="Close" class="btn-close imgPerfilbm" src="<?php echo RUTA_IMAGENES ?>cerrar.png" alt="">
      </div>
      <div class="modal-body" style="background:var(--main-primary-color)">
        <form action="#" method="POST" id="#formOfertar">
        <div class="container">
        <input type="text" id="TipoUpt" name="email" placeholder="Tipo de Oferta" class="input-100Bm" required>
            <input type="text" id="CaracteristicasUpt" name="pass" placeholder="Caracteristicas Oferta" class="input-100Bm"required >
            <input type="text" id="FechaUpt" name="pass" placeholder="Fecha Inicio" class="input-100Bm"required >
            <input type="text" id="FechaFinUtp" name="pass" placeholder="Fecha Fin" class="input-100Bm"required >
            <input type="text" id="PorcOfertaUtp" name="pass" placeholder="Porcentaje Oferta" class="input-100Bm"required >
            <input type="text" id="PrecioOfertaUtp" name="pass" placeholder="Precio Oferta" class="input-100Bm"required >
            <input type="text" id="CantidadOfertaUtp" name="pass" placeholder="Cantidad Oferta" class="input-100Bm"required >
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary " id="btnOfertar" data-bs-dismiss="modal" onclick="editarMisOfertas()">Aceptar</button>
      </div>
    </div>
  </div>
</div>

 

      </div>
      
      <!-- FIN CONTENIDO -->
      <!-- footer -->
      <?php include '../modulos/footer.php'; ?>
    </div>
  </div>
  <script src="<?php echo RUTA_JS?>plugins/perfect-scrollbar.jquery.min.js"></script>

<!-- Chart JS -->
<script src="<?php echo RUTA_JS?>plugins/chartjs.min.js"></script>
<!--  Notifications Plugin    -->
<script src="<?php echo RUTA_JS?>plugins/bootstrap-notify.js"></script>
<!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
<script src="<?php echo RUTA_JS?>now-ui-dashboard.min.js?v=1.5.0" type="text/javascript"></script><!-- Now Ui Dashboard DEMO methods, don't include it in your project! -->

<script>
misProductos();


</script>

</body>

</html>
