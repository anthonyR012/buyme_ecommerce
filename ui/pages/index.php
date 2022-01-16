

<?php require_once('../modulos/routes.php');


?>
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<style type="text/css">
  html, body 
{
     overflow-x:scroll;
}
</style>
<body style="max-width: 1800px;margin: auto;">

<?php include_once(RUTA_MODULOS.'header.php'); ?>
    
<div class="contentPerfil">
      
     
     <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
    <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
    <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
<!-- 
    <button type="button" ></button>
    <button type="button" ></button>
    <button type="button" ></button> -->
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
    <img src="<?php echo RUTA_IMAGENES ?>/LandingPage1.png" class="d-block  " style="width:100%" alt="...">
      <div class="carousel-caption d-none d-md-block" id="titleCarousel">
        <h5>Que esperas para comprar!!</h5>
        <p>En esta epoca decembrina.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="<?php echo RUTA_IMAGENES ?>/LandingPage2.jpg" class="d-block "  style="width:100%" alt="...">
      <div class="carousel-caption d-none d-md-block"  id="titleCarousel">
        <h5>Increibles ofertas!!</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="<?php echo RUTA_IMAGENES ?>/LandingPage3.jpg" class="d-block "  style="width:100%" alt="..." >
      <div class="carousel-caption d-none d-md-block"  id="titleCarousel">
        <h5>Mas de cien mil productos</h5>
        <p>y muchas más ofertas.</p>
      </div>
    </div>
  </div>
</div>


     
     
     
      
     <br>
     <br>
     <div class="container" id="lista-productos">
     
       <P class="titulo">Celulares</P>
      <!--  <hr align="left" noshade="noshade" size="1" width="95%" /> -->
       <div class="decor"></div>
     
     
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
</div>    
 
     
    
<?php include_once RUTA_MODULOS.'/footer.php'; ?>

<script>
eventIndex();
</script>
</body>
</html>
