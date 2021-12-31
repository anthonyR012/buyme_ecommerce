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
    


<!-- Modal EDITAR CREDENCIALES-->
<div class="modal fade" id="editCredentials" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Editar Credenciales</h5>
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
        <button type="button" class="btn btn-primary" id="editCredential" data-bs-dismiss="modal"  disabled>Aceptar</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal EDITAR INFORMACIÓN-->
<div class="modal fade" id="editInformation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
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


<div class="content contentPerfil">
  
      <img src="<?php echo RUTA_IMAGENES?>perfil.png" class="imgPerfBm" alt="">
        <!-- NOTIFICACIONES PARA USUARIO -->
        <div id="notification">
              </div>
        <!-- CREDENCIALES -->
        <div class="credentialBm">       
            <div class="headerCredentialBm">
                <p class="colorTextBm1">MIS CREDENCIALES</p>

                <div class="containerEditBm">
                <img src="<?php echo RUTA_IMAGENES?>editar.png"
                class="imgPerfilbm" alt="" data-bs-toggle="modal" data-bs-target="#editCredentials">
                </div>
              </div>
          <div class="row container">
            <div class="col-4">
                <p class="textColumBm" >Correo:</p>
                <p class="textColumBm">Contraseña:</p>
            </div>
        
            <div class="col-8">
                <p class="textValueBm text-uppercase" id="emailUser"></p>
                <p class="textValueBm text-uppercase" id="passUser">*********</p>
            </div>
            </div>
        </div>

        <!-- INFORMACION -->
        <div class="credentialBm">       
            <div class="headerCredentialBm">
                <p class="colorTextBm2">INFORMACIÓN</p>

                <div class="containerEditBm">
                <img src="<?php echo RUTA_IMAGENES?>editar.png"
                class="imgPerfilbm" alt="" data-bs-toggle="modal" data-bs-target="#editInformation">
                </div>
              </div>
          <div class="row container">
            <div class="col-4">
                <p class="textColumBm" >Nombres:</p>
                <p class="textColumBm" >Apellidos:</p>
                <p class="textColumBm" >Dirección:</p>
                <p class="textColumBm" >Telefono:</p>

            </div>
        
            <div class="col-8">
                <p class="textValueBm text-uppercase" id="nameUser"></p>
                <p class="textValueBm text-uppercase" id="lastUser"></p>
                <p class="textValueBm text-uppercase" id="adressUser"></p>
                <p class="textValueBm text-uppercase" id="phoneUser"></p>
                
            </div>
            </div>
        </div>
        <!-- MIS PQRS -->
        <div class="credentialBm">       
            <div class="headerCredentialBm" >
                <p class="colorTextBm3">MIS PQRS</p>

                <div class="containerEditBm">
                <img src="<?php echo RUTA_IMAGENES?>editar.png"
                class="imgPerfilbm" alt="">
                </div>
              </div>
          <div class="row container" id="pqrsUser">
          
            </div>
            <div class="col-4">
               
                <a href="./pqrs.php"><p class="addPqrsBm">Agregar</p></a>

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
eventPerfil();
</script>

</body>

</html>