
  <!-- DESKTOP STATE -->
  <div id="tcookiesBm">
  
                <div class="d-none d-lg-block">
                <div class="d-flex justify-content-center">
                  <div class="container mt-5 ">
                    <h3>Uso de Cookies</h3>
                    <p>Utilizamos cookies de terceros para generar estadísticas de tu navegación para mostrar publicidad, articulos y ofertas personalizadas</p>
                    <p>Si sigues navegando estaras autorizando su uso</p>
                      <center>
                        <span id="contador"></span> <a id="stop" onclick="stop()">Stop</a>
                        <p><button id="boton_acep" class="btn btn-primary" onclick="saveCookie()">Acepto</button></p>
                      </center>
                  </div>                     
                    
                </div>
                </div>
         
  </div>

 <!-- MOVILE STATE -->
  <div id="tcookiesBm">
  
                <div class="d-lg-none ">
                <div class="container-fluid">
                
                <div class="container mt-5 ">
                    <h3>Uso de Cookies</h3>
                    <p>Utilizamos cookies de terceros para generar estadísticas de tu navegación para mostrar publicidad, articulos y ofertas personalizadas</p>
                    <p>Si sigues navegando estaras autorizando su uso</p>                      
                      <center>
                        <span id="contador"></span> <a id="stop" onclick="stop()">Stop</a>
                        <p><button id="boton_acep" class="btn btn-primary" onclick="saveCookie()">Acepto</button></p>
                      </center>
                  </div>  

                </div>
                </div>
         
  </div>
  

<?php 
if(empty($_COOKIE['acep_cookies'])){
  $_COOKIE['acep_cookies'] = "";
}
$uac = $_COOKIE["acep_cookies"];?>


<!--   Core JS Files   -->
<script type="text/javascript">

      function saveCookie(){      
        console.log("save") 
            document.cookie = "acep_cookies=ok";
            document.getElementById("tcookiesBm").style.animation="esconder 2s ease forwards";     
          
          }

    var user_acep = '<?php echo $uac; ?>';
    var stopTime= 'play';

    if(user_acep == 'ok'){
      document.getElementById("tcookiesBm").style.display="none";  
    } 
    else{
      window.onload = updateClock;
      var timeRe =22;
      
      function updateClock(){
          document.getElementById("contador").innerHTML = timeRe;
                    
          if(timeRe!==0){
            timeRe-=1;        
              timeout = setTimeout("updateClock()", 1000);          
          }      
          else{
            saveCookie();        
          }
      }

      function stop(){             
          /*document.getElementById("contador").innerHTML = '';*//*Por si deseas oculpar el número*/ 
          document.getElementById("stop").style.display="none"; 
          clearTimeout(timeout);    
      }

    }        
</script>


 