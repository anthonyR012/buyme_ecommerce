

<?php require_once('../modulos/routes.php');

//Declarar cookies de sesión

if(empty($_COOKIE['User_Email'])){
  $_COOKIE['User_Email'] = "";
}
if(empty($_COOKIE['User_Pass'])){
  $_COOKIE['User_Pass'] = "";
}
?>
<!-- RUTAS -->
<!DOCTYPE html>
<html lang="en">

<!-- ETIQUETA HEAD -->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>
<!-- COMIENZA CUERPO DE HTML -->
<body style="max-width: 1700px;margin: auto;">
<?php include_once(RUTA_MODULOS."header.php"); ?>


    <div class="contentPerfil" style="padding-top: 100px;padding-bottom: 30px;height:800px">
   
            <div class="loginBm shadow p-5 mb-5 rounded row">

            <div class="col-sm-8 " id="signup">
            <center><img src="https://www.kipclin.com/images/slider/cache/68bcf983c9bb075fbbb36f69f7d82976/Banners-Navidad-KipClin-2021-01.jpg" width="100%"></center>
                <form action="#" method="POST" id="formLogin">
                
                <label class="textInputBm" >Correo Electronico</label><br>
                <input id="email" type="email" class="rounded  boxBm"  name="email" value="<?php echo $_COOKIE['User_Email'] ?>"><br>
                <label  class="textInputBm">Contraseña </label><br>
                <input type="password" id="pass" class="rounded boxBm" name="password" value="<?php echo $_COOKIE['User_Pass'] ?>">
                <br>
                

                 <!-- Guardar o Borrar datos de cookies -->               
              <?php
                  if(empty($_COOKIE['User_Email'])){
                    echo '<input type="checkbox" id="recordar" onclick="f_recordar(this)"><h7 class="checkBm">   Recordarme</h7>';
                  }
                  else{
                    echo '<input type="checkbox" id="olvidar" onclick="f_olvidar(this)"><h7 class="checkBm">   Olvidar</h7>';
                  }
                  ?>

                <br>
                 
                <input type="submit"  class="btn btn-primary" name="login" id="login"  value="Ingresar" >
                
                <!-- SPINNER -->
                <div class="" id="spinner"></div>


                <center>
                                 <font color="black">
                                 <p>¿No tienes cuenta? <a href="register.php">Clic Aqui para Registrarse</a></p>
                                 <p>Soporte: +57 318 5796296</p><b>
                        
                              </b></font><b>
                              </b><P><a href="#" id="olvidar" title="Recuperar Clave">Olvide mi contraseña</a></P></center>
                              
                              
                </form>
            </div>

<!-- RECUPERAR CONRASEÑA -->            
<div class="col-sm-8 " id="recuperarclave">
            <h2 class="text-center mb-5">
                Recuperar tu Clave
            </h2> 

            <form action="recuperarClave.php" id="formRecuperar" method="post">

           

                <div class="field-wrap">
                <label class="textInputBm" >Correo Electronico</label><br>
                <input id="emailRecuperacion" type="email" class="rounded  boxBm"  name="email" 
                autocomplete="off"><br>
                </div>
            
                <input type="submit" id="recuperarPass" class="btn btn-primary" value="RECUPERAR" disabled/>

                <p><a href="#" id="volver" class="mt-3 mb-4" title="Volver">Volver</a></p>
                <br><br>
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
