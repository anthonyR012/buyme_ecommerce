
<div id="btn_carrito_container">
<img src="<?php echo RUTA_IMAGENES?>Carrito.png" id="btn_carrito">
</div>
<!-- DESKTOP STATE -->
<footer id="footerBm">

              <div class="d-none d-lg-block">
                  <div class="d-flex justify-content-center ">
                      <div class="col-sm-4 d-flex justify-content-center"> 
                        <img class="h-70 w-50 p-3 imgFooter" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" src="<?php echo RUTA_IMAGENES?>Sobre.png" alt="nosotros">
                      </div>
                      <div class="col-sm-4 d-flex justify-content-center"> 
                        <img class="h-70 w-50 p-3 imgFooter" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" src="<?php echo RUTA_IMAGENES?>correo.png" alt="correo">
                      </div>
                      <div class="col-sm-4 d-flex justify-content-center"> 
                        <img class="h-70 w-50 p-3 imgFooter" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" src="<?php echo RUTA_IMAGENES?>LineaTelefonica.png" alt="telefonia">
                      </div>
                  </div>
              </div>
       
</footer>

<!-- MOVILE STATE -->
<footer id="footerBm">
        <div class="d-lg-none ">
            <div class="container-fluid">
          <nav>
            <ul >
              <li><i class="fas fa-users"></i>
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="text-reset">
                 Sobre nosotros
                </a>
              </li>
              <li><i class="fas fa-envelope-open-text"></i>
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="text-reset">
                  Email
                </a>
              </li>
              <li><i class="fas fa-tty"></i>
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="text-reset">
                  Comunicate
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright" id="copyright">
            &copy; <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
            </script>, Diseñado por <a href="#" class="text-reset" >ADSI 187</a>. Desarrollado por <a href="#" class="text-reset">ADSI 187</a>.
          </div>
          </div>
        </div>

       
</footer>


<!-- OFFCANVAS INFERIOR -->

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Información de la empresa</h5>
<!-- FILA -->
    <div class="row">
      <!-- PRIMER COLUMNA -->
        <div class="col-sm-3">

    <a href="https://www.facebook.com/antony.rubio.9822" target="blank"> 
      <img src="<?php echo RUTA_IMAGENES?>facebook.png"  class="imgFooter" alt="" style="width: 80px;height: 80px;">
    </a>

    </div>
 <!-- SEGUNDA COLUMNA -->
    <div class="col-sm-3">
    
    <a href="https://www.instagram.com/rubio203ar/?hl=es-la" target="blank"> <img src="<?php echo RUTA_IMAGENES?>instagram.png"  class="imgFooter" alt="" style="width: 80px;height: 80px;">
  </a>
  </div>
   <!-- TERCERA COLUMNA -->
  <div class="col-sm-3">
    
    <a href="https://wa.link/s9f1yj" target="blank"> 
      <img src="<?php echo RUTA_IMAGENES?>whatsapp.png"  class="imgFooter" alt="" style="width: 80px;height: 80px;">
    </a>
    </div>
     <!-- CUARTA COLUMNA -->
    <div class="col-sm-3">
    <a   href="#agenda"
    data-toggle="modal" data-target=""> 
      <img src="<?php echo RUTA_IMAGENES?>about.png"
       class="imgFooter" alt="" style="width: 80px;height: 80px;">
    </a>
    </div>
   
   
    </div>
  
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
  <div class="copyright" id="copyright">
            &copy; , Diseñado por <a href="#" class="text-reset" >ADSI 187</a>. Desarrollado por <a href="#" class="text-reset">ADSI 187</a>.
          </div>
          <p  style="height: 60px;font-size: 0.8em;">
          Se reserva todo el diseño y programacion a Buyme.</p>
          <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

            </script>
  </div>
</div>


<!-- ALERT MODAL MUESTRA VIDEO -->
<div class="modal fade show" id="agenda" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-modal="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Guia para el usuario</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                
            
              <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" width="100%" height="100%" allowfullscreen style="min-width: 500px;min-height: 500px;"></iframe>
            </div>

              

            </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>


   <!--   Core JS Files   -->

   <script src="<?php echo RUTA_JS?>core/jquery.min.js"></script>
  
  <script src="<?php echo RUTA_JS?>core/bootstrap.min.js"></script>
  <script src="<?php echo RUTA_JS?>plugins/perfect-scrollbar.jquery.min.js"></script>
  <script src="<?php echo RUTA_JS?>app.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>


<script type="text/javascript">
$(document).ready(function() {  	
    function mostrarBtCarrito() {      
        if (localStorage.getItem('carrito').length > 2) {
          $("#btn_carrito_container").css("opacity", "100%");
        }
        else if (localStorage.getItem('carrito').length == 2) {
          $("#btn_carrito_container").css("opacity", "0%");
        }                
    }
    setInterval(mostrarBtCarrito, 2000);
    console.log(localStorage.getItem('carrito').length);
});

</script>
