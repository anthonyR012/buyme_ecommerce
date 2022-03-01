<!-- RUTAS -->
<?php require_once('../modulos/routes.php');
?>
<!DOCTYPE html>

<!-- ETIQUETA HEAD Y CSS ADD-->
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>

<!-- COMIENZA CUERPO DE HTML -->
<header>
    <?php include_once(RUTA_MODULOS.'header.php'); ?>
    <link  href="<?php echo RUTA_CSS;?>app.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</header>
<body>
<div class="container">
        <!--CONTENEDOR DE PROGRESO DE COMPRA-->
        <div class="row cont_progescompra" >
            <div class="progress mt-2" style="height: 22px">
                <div id="barra" class="progress-bar progress-bar-striped" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="row">
        <!--CONTENEDOR DE MODULOS DE COMPRA-->
            <div class="col-12 col-md-6 pt-2 pb-2">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header " id="headingOne">
                        <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <h5 class="card-title">METODO DE PAGO</h5>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" style="transition: all 0.5s ease 0.2s;" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="card-body"> 
                                <p class="card-text">Por favor seleccione el metodo de pago</p>
                                <a onclick="Cerrar();" id="Despliegue" href="#CollapseFour" class="btn btn-danger" data-toggle="collapse" role="button" arial-expanded="false" aria-controls="CollapseFour">PSE</a>                             
                                <a id="Despliegue" href="#CollapseTree" class="btn btn-danger " data-toggle="collapse" role="button" arial-expanded="false" aria-controls="CollapseTree"> CONTRAENTREGA </a>
                                <!--PAGO PSE-->
                                    <div  class="animacionn collapse" id="CollapseFour" aria-labelledby="PseFour" data-bs-parent="#Pse">
                                        <div class="row p-1 mt-4 formulario-tarjeta">
                                                <div class="grupo">
                                                <label for="bancoSelect">Banco</label>
                                                    <select onchange="GetSelect();" class="form-select" id="bancoSelect" aria-label="Floating label select example">
                                                        <option value="0">Seleccione el banco</option>
                                                        <option value="1551"> DAVIPLATA </option>
                                                        <option value="1507"> NEQUI </option>
                                                        <option value="1151"> RAPPIPAY </option>
                                                        <option value="1007"> BANCOLOMBIA </option>
                                                        <option value="1051"> BANCO DAVIVIENDA </option>
                                                        <option value="1059"> BANCAMIA S.A. </option>
                                                        <option value="1040"> BANCO AGRARIO </option>
                                                        <option value="1052"> BANCO AV VILLAS </option>
                                                        <option value="1013"> BANCO BBVA COLOMBIA S.A. </option>
                                                        <option value="1032"> BANCO CAJA SOCIAL </option>
                                                        <option value="1066"> BANCO COOPERATIVO COOPCENTRAL </option>                                
                                                        <option value="1001"> BANCO DE BOGOTA </option>
                                                        <option value="1023"> BANCO DE OCCIDENTE </option>
                                                        <option value="1062"> BANCO FALABELLA </option>
                                                        <option value="1012"> BANCO GNB SUDAMERIS </option>
                                                        <option value="1006"> BANCO ITAU </option>
                                                        <option value="1060"> BANCO PICHINCHA S.A. </option>
                                                        <option value="1002"> BANCO POPULAR </option>
                                                        <option value="1065"> BANCO SANTANDER COLOMBIA </option>
                                                        <option value="1069"> BANCO SERFINANZA </option>                                
                                                        <option value="1061"> BANCOOMEVA S.A. </option>
                                                        <option value="1283"> CFA COOPERATIVA FINANCIERA </option>
                                                        <option value="1009"> CITIBANK </option>
                                                        <option value="1292"> CONFIAR COOPERATIVA FINANCIERA </option>
                                                        <option value="1289"> COTRAFA </option>
                                                    </select>
                                                </div>
                                                <div class="grupo pt-2">
                                                    <label for="personaSelect">Tipo de persona</label>
                                                    <select onchange="GetSelect1();" class="form-select" id="bancoSelect1" aria-label="Floating label select example">
                                                        <option value="0">Seleccione el tipo de persona</option>
                                                        <option value="1001">Natural</option>
                                                        <option value="1002">Juridica</option>
                                                    </select>
                                                </div>
                                            <button onclick="GetBoton1();" id="boton-enviar" type="submit" class="mt-3 btn-enviar">Enviar</button>
                                        </div>
                                     </div>
                                <!--CONTRAENTREGA-->
                                <div class="animacionn collapse" id="CollapseTree" aria-labelledby="CtTree" data-bs-parent="#CtTree">
                                    <div class="row pt-2 formulario-tarjeta">
                                        <div class="grupo">
                                            <label for="UsuNombre">Nombre completo</label>
                                            <input onchange="GetInputs();" type="text" id="UsuNombre" maxLength="16" autocomplete="off">
                                        </div>
                                        <div class="grupo">
                                            <label for="UsuApellido">Apellidos</label>
                                            <input onchange="GetInputs();" type="text" id="UsuApellido" maxLength="19" autocomplete="off">
                                        </div>
                                        <div class="grupo">
                                            <label for="UsuCedula">Cedula</label>
                                            <input onchange="GetInputs();" type="text" id="UsuCedula" maxLength="10" autocomplete="off">
                                        </div>
                                        <div class="grupo">
                                            <label for="UsuCorreo">Correo</label>
                                            <input onchange="GetInputs();" type="text" id="UsuCorreo" maxLength="10" autocomplete="off">
                                        </div>
                                        <div class="grupo">
                                            <label for="UsuDireccion">Direccion de hogar</label>
                                            <input onchange="GetInputs();" type="text" id="UsuDireccion" maxLength="10" autocomplete="off">
                                        </div>
                                        <button onclick="GetBoton();" type="submit" class="btn-enviar">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--CONTENEDOR DE CARRITO-->

            <div class="col-12 col-md-6 pt-2 pb-2">
                <div class="accordion" id="accordionExampleT">
                        <div class="accordion-item">
                            <h2 class="accordion-header " id="headingOne">
                                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOneT" aria-expanded="false" aria-controls="collapseOneT">
                                <h5 class="card-title">RESUMEN DE COMPRA</h5>
                                </button>
                            </h2>
                            <div id="collapseOneT" class="animacionn accordion-collapse collapse" aria-labelledby="headingOneT" data-bs-parent="#accordionExampleT">
                                <div class="card-body">
                                    
                                        <div class="media">
                                        <img class="col-12 align-self-center mr-3" src="<?php echo RUTA_IMAGENES?>logo.png" alt="LogoBuyme">
                                            <div class="media-body">
                                                <h5>Reporte de compra</h5>

                                            <div class="table-responsive">
                                                    <table class="table table-striped" id="lista-carrito">
                                                            <thead>
                                                            <tr>
                                                                <th></th> 
                                                                <th scope="col">Producto</th>
                                                                <th scope="col">Precio</th>
                                                                <th scope="col">Cant</th>
                                                                <th scope="col">Total</th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody id="tablet"></tbody>
                                                        
                                                    </table>                                                                
                                            </div>                                                
                                                
                                                <p>Por favor</p>
                                                <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>
                                    
                                    <div class="col-12 d-flex justifi-content-between p-0 border-top border-black mt-3 pt-3">
                                    <a>Total Compra: &nbsp;</a><span class="ml-3"><b id="neto_compra"></b></span>
                                    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 

            </div>
        </div>
    </div>
    <!--RUTA DE JS-->
	<script src="<?php echo RUTA_JS ?>cash.js"></script>
</body>
<footer>
    <?php include_once(RUTA_MODULOS.'/footer.php'); ?>
</footer>
</html>