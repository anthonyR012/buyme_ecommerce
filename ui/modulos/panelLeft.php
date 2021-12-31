<div class="sidebar bg-primary" style="background-color:aliceblue">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    -->
      <div class="logo">
        <a href="<?php echo RUTA_PAGES."index.php";?>" class="simple-text logo-normal">
          Inicio
        </a>
      </div>
      
      <div class="sidebar-wrapper" id="sidebar-wrapper">
        <ul class="nav">
        <li>
            <a href="<?php echo RUTA_PAGES."index.php";?>">
              <i class="now-ui-icons business_bank"></i>
              <p>Inicio</p>
            </a>
          </li>     
          <li class="" id="isAdmin">
          </li>

          <li>
            <a href="./productCreate.php">
              <i class="now-ui-icons users_single-02"></i>
              <p>Publicar Producto</p>
            </a>
          </li>

          <li>
            <a href="./user.php">
              <i class="now-ui-icons users_single-02"></i>
              <p>Perfil</p>
            </a>
          </li>
          <li>
            <a href="./pqrs.php">
              <i class="now-ui-icons design_bullet-list-67"></i>
              <p>PQRS</p>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    <div class="main-panel" id="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="#">Panel</a>
          </div>
        
        </div>
      </nav>


      <!-- End Navbar -->