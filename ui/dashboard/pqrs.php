<!-- RUTAS -->
<?php require_once('../modulos/routes.php');?>
<!DOCTYPE html>
<html lang="en">
<!-- ETIQUETA HEAD -->
<?php include('../modulos/headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<body class="">
<?php include_once("../modulos/header.php");?>
  <div class="wrapper ">
    <!-- PANEL -->
  <?php include_once(RUTA_MODULOS."/panelLeft.php");?>

      <div class="panel-header panel-header-sm">
      </div>
      <div class="content">
         
      <div class="container mt-5 "> <!-- hoja de trabajo -->
          
          <div class="col-8 offset-1 ">
          
            <div class="card  mb-3" style="background-color: #F5F1EC;">
            <div class="card-header text-center p-1 pr-3 " style="background-color:#ff7a00;"><img src="<?php echo RUTA_IMAGENES?>logo.png" alt="LogoBuyme" id="logoBm"></div>
            <div class="card-body">
          </div>

  <form action="" class="was-validated">
    <div class="row">
            <div class="col-4 offset-1">
              <select class="form-control" name="Document" id="document"  style="background-color:#ffff" required>
                <option class=" text-center" selected disabled value="">Tipo de documento...</option>
                <option class=" text-center">Cedula</option>
              </select>
              <div class="valid-feedback text-center">¡campo válidado!</div>
              <div class="invalid-feedback text-center">Debe completar los datos.</div>
            </div>
            

            <div class="col-4 ">
                <input class="form-control text-center" style="background-color:#ffff" type="tel" id="NumDocument" name= "numdocument" placeholder="Numero de Documento" required>
                <!-----------------------  mensaje para validacion ---------------->
                <div class="valid-feedback text-center">¡campo válidado!</div>
                <div class="invalid-feedback text-center">Debe completar los datos.</div>
              </div>
            
            
            <div class="col-8 offset-1">
              <input class="form-control text-center my-3" style="background-color:#ffff" type="text" id="Nom-Apelli" name="nom-apelli" placeholder="Nombres y Apellidos Completos" required>
              <div class="valid-feedback text-center">¡campo válidado!</div>
              <div class="invalid-feedback text-center">Debe completar los datos.</div>
            </div>
            
            <div class="col-4 offset-1">
              <input class="form-control text-center my-1" style="background-color:#ffff" type="tel" id="Telfijo" name="tel-fijo" placeholder="Numero de Telefono Fijo" required>
                <div class="valid-feedback text-center">¡campo válidado!</div>
                <div class="invalid-feedback text-center">Debe completar los datos.</div>
            </div>
            
            <div class="col-4 ">
                <input class="form-control text-center my-1" style="background-color:#ffff" type="tel" placeholder="Numero Telefonico Celular" required>
                <div class="valid-feedback text-center">¡campo válidado!</div>
                <div class="invalid-feedback text-center">Debe completar los datos.</div>
            </div>
            
            <div class="col-8 offset-1">
                <input class="form-control text-center my-3" style="background-color:#ffff" type="email" id="Correo" name="correo"  placeholder="Correo Electronico" required>
                <div class="valid-feedback text-center">¡campo válidado!</div>
                <div class="invalid-feedback text-center">Debe completar los datos.</div>
            </div>
            
            <div class="col-8 offset-1">
              <h6 class="card-title my-3 ">Tipo PQRS</h6>
              <p class="card-text mt-0 pl-0">Seleccione algunas de las siguientes opciones.</p>
            </div>
            
    </div>
              <div class="col-8 offset-1">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
                        <label class="custom-control-label" for="customControlValidation2" style="font-size: 1rem;">Peticion</label>
                      </div>

                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
                        <label class="custom-control-label" for="customControlValidation3" style="font-size: 1rem;">Queja</label>
                      </div>

                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customControlValidation4" name="radio-stacked" required>
                        <label class="custom-control-label" for="customControlValidation4" style="font-size: 1rem;" >Reclamo</label>
                      </div>

                      <div class="custom-control custom-radio mb-3">
                        <input type="radio" class="custom-control-input" id="customControlValidation5" name="radio-stacked" required>
                        <label class="custom-control-label" for="customControlValidation5" style="font-size: 1rem;">Sugerencia</label>
                        <div class="invalid-feedback">More example invalid feedback text</div>
                      </div>    
              </div>

              <div class="col-6 offset-1 mb-3">
                <label for="validationTextarea"style="font-size: 1rem;" >Descripcion</label>
                <textarea class="form-control is-invalid pl-1" id="validationTextarea" style="background-color:#ffff" placeholder="Escribe tu Informacion" required></textarea>
                <div class="invalid-feedback">
                  <!-- Please enter a message in the textarea. -->
              </div>

              <div class="custom-control custom-checkbox mb-3 mt-5">
                <input type="checkbox"  class="custom-control-input" id="customControlValidation1" required>
                <label class="custom-control-label" for="customControlValidation1">Autoriza a Buyme para comunicarse con usted a traves del correo electronico
                  suministrado y responder a la solicitud. De ante mano asegurese de que su 
                  correo se encuentre activo.</label>
                <div class="invalid-feedback"> Por favor selecciona </div>
              </div>

              </div> <!--------------------- container ------------------------------->
                <div class="container">
                  <div class="row">
                      <div class="col-12 text-center">
                        <button type="submit" class="btn btn-default" style="background-color: #ff7a00;">Enviar</button>
                      </div>
                  </div>
                </div>
  </form>

</div>
</div>
</div>

      </div>
     
    </div>
  </div>
  <?php include '../modulos/footer.php'; ?>
 
  <script src="<?php echo RUTA_JS?>plugins/perfect-scrollbar.jquery.min.js"></script>

<!-- Chart JS -->
<script src="<?php echo RUTA_JS?>plugins/chartjs.min.js"></script>
<!--  Notifications Plugin    -->
<script src="<?php echo RUTA_JS?>plugins/bootstrap-notify.js"></script>
<!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
<script src="<?php echo RUTA_JS?>now-ui-dashboard.min.js?v=1.5.0" type="text/javascript"></script><!-- Now Ui Dashboard DEMO methods, don't include it in your project! -->
</body>

</html>