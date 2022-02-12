<?php require_once('../modulos/routes.php');


?>
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS . 'headEtiqueta.php'); ?>
<!-- COMIENZA CUERPO DE HTML -->
<style type="text/css">
  html,
  body {
    overflow-x: scroll;
  }
</style>

<body style="max-width: 1800px;margin: auto;">

  <?php include_once(RUTA_MODULOS . 'header.php'); ?>

  <div class="contentPerfil">

    <!-- carousel principal -->
    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-indicators">
        <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
        <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
        <img src="<?php echo RUTA_IMAGENES ?>circulo.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">

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
          <img src="<?php echo RUTA_IMAGENES ?>/LandingPage2.jpg" class="d-block " style="width:100%" alt="...">
          <div class="carousel-caption d-none d-md-block" id="titleCarousel">
            <h5>Increibles ofertas!!</h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="<?php echo RUTA_IMAGENES ?>/LandingPage3.jpg" class="d-block " style="width:100%" alt="...">
          <div class="carousel-caption d-none d-md-block" id="titleCarousel">
            <h5>Mas de cien mil productos</h5>
            <p>y muchas más ofertas.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- fin carousel -->
    <br>
    <br>

    <div class="container" id="lista-productos">

      <div class="row">
        <!-- inicio productos -->
        <!-- Categoria celulares -->
        <div class="col-sm-7">
          <P class="titulo">Celulares</P>
          <div class="decor"></div>


          <div id="carouselControlsPhones" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div class="row justify-content-center" id="getProductPhone">
              </div>
            </div>
          </div>
          <br>
          <br>
          <!-- Categoria computadores -->
          <P class="titulo">Computadores</P>
          <div class="decor"></div>


          <div id="carouselControlsCompus" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div class="row justify-content-center" id="getProductCompu">
              </div>
            </div>
          </div>


          <br>
          <br>
          <!-- Categoria Tablets -->
          <P class="titulo">Tablets</P>
          <div class="decor"></div>
          <div id="carouselControlsTables" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div class="row justify-content-center" id="getProductTable">
              </div>
            </div>
          </div>

          <br><br>
        </div>
        <!-- fin productos -->

        <!-- inicio scrollspy con informacion -->
        <div class="col-sm-5">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Sobre Nosotros
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Conocenos
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Novedades Buyme
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

        </div>
        <!-- fin scrollspy informacion  -->
      </div>
    </div>



  </div>

  <?php include_once RUTA_MODULOS . '/footer.php'; ?>

  <script>
    eventIndex();
  </script>
</body>

</html>