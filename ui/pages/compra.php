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

  <div class="content">

  <div class="container mt-5" >
  <h6 class="card-title my-3 ">Tu carrito de compra!</h6> 
  <a href="<?php echo RUTA_PAGES?>index.php">Ver más</a>
              
        <div class="table-responsive">
                            <table class="table table-striped table-hover" id="lista-carrito">
                                <thead>
                                  <tr>
                                    <th></th> 
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody id="tablet"></tbody>

                                <thead>
                                  <tr>
                                    <th></th> 
                                    <th scope="col"></th>                                    
                                    <th scope="col"><h6>Total compra</h6></th>
                                    <th scope="col" id="neto_compra"></th>
                                    <th scope="col"><button type="submit" class="btn btn-default col" style="background-color: #72E27C ;" onclick="irPago()">Pagar</button></th>
                                  </tr>
                                </thead>
                              </table> 
                              
                                    
                </div>
          </div>
                             

  </div>

  <?php include_once RUTA_MODULOS . '/footer.php'; ?>

  <script>
    eventIndex();
    
    
  $(document).ready(function() {
    var listProducts = JSON.parse( localStorage.getItem('carrito') ) || []  ;
    var lengthArray = listProducts.length; 
    var total_compra = 0;
    for (var i = 0; i < lengthArray; i++) {

      var srcIm = listProducts[i].imagen;         
      var titulo = listProducts[i].titulo;              
      var precio = new Intl.NumberFormat('es-CO', {}).format(listProducts[i].precio);      
      var cantidad = listProducts[i].cantidad;      
      var id = listProducts[i].id;
      var subtotal = [Number(listProducts[i].precio) * Number(listProducts[i].cantidad)];
      var subtotalV = new Intl.NumberFormat('es-CO', {}).format(subtotal);     
      
      total_compra = total_compra + subtotal[0];
      total_compraV = new Intl.NumberFormat('es-CO', {}).format(total_compra);      
       document.getElementById("neto_compra").innerHTML= "$ "+total_compraV;
       localStorage.setItem('valorCompra', total_compra);


        document.getElementById("tablet").innerHTML+= `
                                  <tr id="${id}">
                                  <th scope="row"><img src="${srcIm}" width="80px" height="80px" alt=""></th>
                                  <th scope="row">${titulo}</th>
                                  <th scope="row">$${precio}</th>
                                  <th scope="row">${cantidad}</th>
                                  <th scope="row">$ ${subtotalV}</th>                                  
                                  </tr>`;

      console.log(titulo + "\n" + srcIm + "\n" + precio + "\n" +cantidad+ "\n" + id);
    }   

});

  </script>
</body>

</html>