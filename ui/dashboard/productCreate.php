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
          
          <div class="col-10 offset-1 ">
          
            <div class="card  " style="background-color: #F5F1EC;">
            <div class="card-header text-center p-1 pr-3 " style="background-color:#ff7a00;min-height: 80px;">¿Quieres publicar tu producto?</div>
            <div class="card-body">
          </div>
      <!-- COMIENZO FORMULARIO -->
          <form action="#" method="POST" class="mx-auto my-auto p-5" id="formRegisterProduct" enctype="multipart/form-data">
            <div class="row align-items-center">
                <div class="col-8">
                <input type="text" id="producto" name="nombre" placeholder="Producto" class="input-48Bm" required>
            <input type="text" id="marca" name="apellido" placeholder="Marca" class="input-48Bm" required>
            <input type="email" id="referencia" name="email" placeholder="Referencia" class="input-48Bm" required>
            <input type="email" id="garantia" name="email" placeholder="Garantia" class="input-48Bm" required>

        <div class="input-group">
            <span class="input-group-text" >Descripción</span>
            <textarea  id="descripcion" class=" input-100Bm" name="descripcion" aria-label="poster..."></textarea>
        </div>
        <input type="number" id="cantidad" name="nombre" placeholder="Cantidad" class="input-48Bm" required>
            <input type="number" id="precio" name="apellido" placeholder="Precio" class="input-48Bm" required>
    

        <div class="mb-3">
            <label for="formFile" class="form-label ofertWords" >Sube la imagen</label>
            <input class="form-control" id="capturarImg" type="file" name="img" id="formFile" accept="image/*">
        </div>
            
        <select class="form-select input-100Bm" id="selectCategoria" aria-label="Default select example">
            </select>
            </div>

            <!-- VISUALIZAR VISTA PREVIA -->
        <div class="col-lg-2">
        <div class="card" style="width: 10rem;height: 10rem;">
          <img src="<?php echo RUTA_IMAGENES?>vistaPrevia.png" class="card-img-top rounded"  id="previsualizar" alt="...">
          <div class="card-body">
            <p class="card-text">Vista previa.</p>
          </div>
        </div>
    
        </div>
        <!-- AGREGAR OFERTA -->
        <div>
        <input class="form-check-input checkOfert" type="checkbox" id="addOfert"  value="" aria-label="oferta"><label class="ofertWords">Agregar oferta</label>
      </div>
      <!-- FIN AGREGAR OFERTA -->
      <!-- HTML DE OFERTA PRODUCTO -->
      <div class="container" id="contenedorOculto" style="display: none">
      <select class="form-select input-100Bm" id="selectType" aria-label="Default select example">
          <option value="false">Tipo_Oferta</option>
          <option value="Descuento">Descuento</option>
          <option value="2x1">Page 1 lleve 2</option>
      </select>
      <div class="input-group">
            <span class="input-group-text" >Caracteristicas oferta</span>
            <textarea  id="caracteristicas" class=" input-100Bm" name="descripcion" aria-label="poster..."></textarea>
        </div>
        <input type="number" id="porcentaje" name="nombre" placeholder="Porcentaje descuento" class="input-48Bm" required>
            <input type="number" id="cantidad_oferta" name="apellido" placeholder="Cantidad productos" class="input-48Bm" required>
        <span class="input-group-text" >Fecha Inicio</span>
        <input type="date" id="inicio" name="nombre" placeholder="Fecha Inicio" class="input-48Bm" required>
        <span class="input-group-text" >Fecha Fin</span>
        <input type="date" id="fin" name="apellido" placeholder="Fecha Fin" class="input-48Bm" required>
    
        </div>
      <!-- SPINNER -->
        <div id="alertResult" ></div>
    <!-- FIN SPINNER -->
        <div class="container">
                  <div class="row">
                  
                      <div class="col-12 text-center">
                      <div id="spinner"></div>
                        <button type="submit" class="btn btn-default" id="publicar" style="background-color: #ff7a00;" disabled>Publicar</button>
                      </div>
                    
                  </div>
                </div>
        
        </div>
</form>
<!-- FIN FORMULARIO -->
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
<script>
  eventCreateProduct();
</script>
</body>

</html>