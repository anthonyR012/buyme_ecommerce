
<!-- RUTAS -->
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


    <!-- HEADER SUPERIOR  -->



    <header id="headerBm" class="shadow-lg p-1">
       <img src="<?php echo RUTA_IMAGENES?>logo.png" alt="LogoBuyme" id="logoBm">
       <!-- PROGRAMADOR ANTHONY, GRUPO DE ICONOS SUPERIOR DERECHO -->
    
            <!-- <img src="../../Assets/img/volver.png" alt="volver"
            ><img src="" alt=""> -->
            <nav class="navbar navbar-expand-lg navbar-transparent " style="position: absolute;width:100%;z-index: 8000;" id="navbarglobal">
                <!-- MODO MOVILE -->
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <div class="navbar-toggle">
                        </div>
                    </div>
                    <button class="navbar-toggler" id="buttonDisplay" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <!-- ITEM NAVBAR -->
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <ul class="navbar-nav">
            
              <!-- ITEM NAVBAR -->
              <li class="nav-item" id="itemLogin">
              </li>
              
              <li class="nav-item" id="itemInicio">
              
              </li>
              <li class="nav-item" id="itemLogin2_">
              </li>
              <li class="nav-item" id="itemLogin2">
              </li>
              
             
              <li class="nav-item submenu" >
              <div class="nav-link" >
              <img src="<?php echo RUTA_IMAGENES?>Carrito.png" style="cursor: pointer;" class="iconHeaderBm" id="img-carrito">
              </div>
                        <div id="carrito" class="mostrarCarrito" style="display: none;">
                            <table class="table rounded-pill" id="lista-carrito">
                                <thead>
                                  <tr>

                                  <th>Imagen</th> 
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Retirar</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <th scope="row"></th>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                </tbody>
                               
                              </table> 
                              <div class="container">
                                  <div class="row">
                                        <button type="submit" class="btn btn-default col" id="vaciar-carrito"   style="background-color: #ff7a00;" >Vaciar</button>
                                        <button type="submit" class="btn btn-default col" id="comprar-carrito"   style="background-color: #72E27C ;" >Comprar</button>
                                      </div>
                                </div> 
                                    
                            </div>
              </li>
            </ul>
            
          </div>
                <!-- FIN ITEM NAVBAR -->
        </div>
        </nav>
    
       
    </header>
   

    
<div class="contentPerfil" id="lista-productos">
  <!-- inicio productos ofertas -->
  <div class="container p-3" >
  <div class="card-group" id="productsOferts">
  
  </div>
</div>
  <!-- fin productos ofertas -->
      <div class="container p-5" style="min-height: 800px;">

    
    <form action="">
    <div class="row">
        <div class="col-6">
       
        <div class="input-group mb-3">
        <input type="text" id="productoBusqueda" name="nombre" placeholder="Producto" class="input-100Bm" >        
         </div>
        </div>

         <div class="col-6">
            <select class="form-select input-group form-select-lg mb-3" id="categoriaBusqueda">
            <option selected value="">Categoria</option>
            <option value="Celulares">Celulares</option>
            <option value="Computadores">Computadores</option>
            <option value="Tablets">Tablets</option>
            </select>
           
        </div>
        </div>
       
        <div class="row">
            <div class="col-6">
            <input type="number" id="minBusqueda"  placeholder="min precio" class="input-48Bm" >
            <input type="number" id="maxBusqueda"  placeholder="max Precio" class="input-48Bm" >
            </div>
            <div class="col-6">
            <input type="text" id="marcaBusqueda" placeholder="Marca" class="input-100Bm" > 
            <div class=" form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="ofertaBusqueda" >
            <label class="form-check-label" for="flexSwitchCheckChecked">Solamente ofertas</label>
            </div>
            </div>
            
            <div class="container">
                  <div class="row">
                  
                      <div class="col-12 text-center">
                      <div id="spinner"></div>
                        <button type="submit" class="btn btn-default" id="buscar" style="background-color: #ff7a00;">Buscar mi producto</button>
                      </div>
                    
                  </div>
                </div>
        
        </div>
       
    </form>
    <div class="decor" style="margin-top: 60px;"></div>
      <!-- /Muestra productos buscados -->
    <div class="container" >
  <!-- <div class="row row-cols-1 row-cols-lg-4 g-2 g-lg-3" id="getBusquedaProduct"> -->
  <div class="row row-cols-1 row-cols-md-3 g-4 " id="getBusquedaProduct">
    
    </div>
  </div>
</div>
   
</div>
</div>
    
 
     
    
<?php include_once RUTA_MODULOS.'/footer.php'; ?>

<script>
  searchingProducts();
</script>
</body>
</html>
