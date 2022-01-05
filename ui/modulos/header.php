
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
                <!-- FORMULARIO DE BUSQUEDA -->
            <!-- <form >
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Buscar...">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i class="now-ui-icons ui-1_zoom-bold"></i>
                  </div>
                </div>
              </div>
            </form> -->
            <form class="d-flex">
            <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Buscar...">
                <div class="input-group-append">
  
                </div>
              </div>
           
          </form>
            
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
   
