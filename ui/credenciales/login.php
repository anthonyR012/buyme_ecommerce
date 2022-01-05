
<!-- RUTAS -->
<?php require_once('../modulos/routes.php');
?>
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<body style="max-width: 1700px;margin: auto;">
<?php include_once(RUTA_MODULOS."header.php");?>


    <div class="contentPerfil" style="padding-top: 100px;padding-bottom: 30px;height:800px">
   
            <div class="loginBm shadow p-5 mb-5 rounded row">

            <div class="col-sm-8 ">
            <center><img src="https://www.kipclin.com/images/slider/cache/68bcf983c9bb075fbbb36f69f7d82976/Banners-Navidad-KipClin-2021-01.jpg" width="100%"></center>
                <form action="#" method="POST" id="formLogin">
                
                <label class="textInputBm" >Correo Electronico</label><br>
                <input id="email" type="email" class="rounded  boxBm"  name="email"><br>
                <label  class="textInputBm">Contraseña </label><br>
                <input type="password" id="pass" class="rounded boxBm" name="password">
                <br>
                <input type="checkbox" name="recuerda"><h7 class="checkBm">Recordarme</h7>
                <br>
                 
                <input type="submit"  class="btn btn-primary" name="login" id="login"  value="Ingresar" disabled>
                
                <!-- SPINNER -->
                <div class="" id="spinner"></div>


                <center>
                                 <font color="black">
                                 <p>¿No tienes cuenta? <a href="register.php">Clic Aqui para Registrarse</a></p>
                                 <p>Soporte: +57 318 5796296</p><b>
                        
                              </b></font><b>
                              </b></center>
                </form>
            </div>
                <div class="col-sm-4">
                    <img src="<?php echo RUTA_IMAGENES;?>login.png" class="imgBm" alt="">
                </div>
            </div>
            
            </div>



      <?php include_once RUTA_MODULOS.'/footer.php'; ?>

   <script>
      eventLogin();
    </script>
</body>
</html>
