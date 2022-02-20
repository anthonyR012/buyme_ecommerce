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

<form action="#" method="post" name="form1" id="miFormuPqrs">
<div class="row">
 
        
        <div class="col-8 offset-1">
          <h6 class="card-title my-3 ">Tipo PQRS</h6>
          <p class="card-text mt-0 pl-0">Seleccione algunas de las siguientes opciones.</p>
          
        </div>
        <br>
        
  </div> 
          <div class="col-8 offset-1" id="rates"  method= "post"> 
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="radio1" name="radio-stacked" value='Peticion' required>
                    <label class="custom-control-label" for="radio1" style="font-size: 1rem;">Peticion</label>
                  </div>

                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="radio2" name="radio-stacked" value="Queja" required>
                    <label class="custom-control-label" for="radio2" style="font-size: 1rem;">Queja</label>
                  </div>

                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="radio3" name="radio-stacked" value="Reclamo" required>
                    <label class="custom-control-label" for="radio3" style="font-size: 1rem;" >Reclamo</label>
                  </div>

                  <div class="custom-control custom-radio mb-3">
                    <input type="radio" class="custom-control-input" id="radio4" name="radio-stacked" value="Sugerencia" required>
                    <label class="custom-control-label" for="radio4" style="font-size: 1rem;">Sugerencia</label>
                    
                     </div>   
                     
                     
            
      
          
          <div class="col-6 offset-1 mb-3" method= "post" >
            <label id="labeltexto"style="font-size: 1rem;" >Descripcion</label>
            <textarea class="form-control  pl-1" id="validacion" style="background-color:#ffff" placeholder="Escribe tu Informacion" ></textarea>
            <div class="invalid-feedback">
              Ingresa por lo menos 6 caracteres
          </div>

          <div class="custom-control custom-checkbox mb-3 mt-5">
            <input type="checkbox"  class="custom-control-input" id="customControlValidation1" required>
            <label class="custom-control-label" for="customControlValidation1">Autoriza a Buyme para comunicarse con usted a traves del correo electronico
              suministrado y responder a la solicitud. De ante mano asegurese de que su 
              correo se encuentre activo.</label>
          </div>

          </div> <!--------------------- container ------------------------------->
            <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                    <button id="Result"  type="submit"  class="btn btn-default" style="background-color: #ff7a00;" disabled>Enviar</button>
                  </div>
              </div>
            </div>
</form>

</div>
</div>
</div>

  </div>
     
    </div>

  <?php include '../modulos/footer.php'; ?>
 
  <script src="<?php echo RUTA_JS?>plugins/perfect-scrollbar.jquery.min.js"></script>
  <script>
    pqrs();
  </script>
<!-- Chart JS -->
<script src="<?php echo RUTA_JS?>plugins/chartjs.min.js"></script>
<!--  Notifications Plugin    -->
<script src="<?php echo RUTA_JS?>plugins/bootstrap-notify.js"></script>
<!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
<script src="<?php echo RUTA_JS?>now-ui-dashboard.min.js?v=1.5.0" type="text/javascript"></script><!-- Now Ui Dashboard DEMO methods, don't include it in your project! -->
</body>

</html>