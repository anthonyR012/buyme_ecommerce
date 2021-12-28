
<!-- RUTAS -->
<?php require_once('../modulos/routes.php');
?>
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->

<body>

<?php include_once(RUTA_MODULOS.'header.php'); ?>
    
<div class="contentPerfil">
      
      <div class="barra2">
       <div class="container">
         <div class="row">
           <div class="celulares col-sm">
           <a class="nav-link" style="color:white;" href="#">Celulares</a>
           </div>
           <div class="computadores col-sm">
           <a class="nav-link" style="color:white;" href="#">Computadores</a>
           </div>
           <div class="tablets col-sm">
           <a class="nav-link " style="color:white;" href="#">Tablets</a>
           </div>
         </div>
       </div>
        
     </div>
     
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
           <center><img src="<?php echo RUTA_IMAGENES ?>/account.png" class="d-block w-200" alt="..."></center>
         </div>
         <div class="carousel-item">
           <center><img src="<?php echo RUTA_IMAGENES ?>/agregar.png" class="d-block w-200" alt="..."></center>
         </div>
         <div class="carousel-item">
           <center><img src="<?php echo RUTA_IMAGENES ?>/correo.png" class="d-block w-200" alt="..." ></center>
         </div>
       </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
     </div>
     
     
     
     
     <br>
     <br>
     
     
       <P class="titulo">Celulares</P>
      <!--  <hr align="left" noshade="noshade" size="1" width="95%" /> -->
       <div class="decor"></div>
     <div class="container">

     <div id="carouselControlsPhones" class="carousel slide"  data-interval="false">
        <div class="carousel-inner">
       <div class="row justify-content-center" id="getProductPhone">
      </div>
    </div>
   </div>
         <br>
         <br>
     
      <P class="titulo">Computadores</P>
      <!--  <hr align="left" noshade="noshade" size="1" width="95%" /> -->
       <div class="decor"></div>
   
     
     <div id="carouselControlsCompus" class="carousel slide"  data-interval="false">
        <div class="carousel-inner">
        <div class="row justify-content-center" id="getProductCompu">
        </div>
    </div>
     </div>
        <!-- <div class="card mx-2 my-2 shadow-lg rounded" style="width: 15rem;">
   <img src="<?php echo RUTA_IMAGENES ?>/informacion.png"  class="card-img-top" alt="post">
   <div class="card-body">
     <h5 class="card-title">MOTOROLA E6 Play 32GB Negro</h5>
     <p class="card-text text-truncate" style="max-width: 400px">Precio Oferta :  $319.900 Precio Antes :  $449.900</p>
     <a href="#" class="btn btn-primary">Comprar</a>
     <a href="#" class="btn btn-danger">Detalle</a>
   </div>
 </div> -->


     
     <br>
     <br>
      <P class="titulo">Tablets</P>
      <!--  <hr align="left" noshade="noshade" size="1" width="95%" /> -->
       <div class="decor"></div>
  
     
     <div id="carouselControlsTables" class="carousel slide"  data-interval="false">
        <div class="carousel-inner">
     <div class="row justify-content-center" id = "getProductTable">
       </div>
     </div>
    </div>
   
<br><br>
 </div>     

     
     


<?php include_once RUTA_MODULOS.'/footer.php'; ?>

<script>
eventIndex();
</script>
</body>
</html>
