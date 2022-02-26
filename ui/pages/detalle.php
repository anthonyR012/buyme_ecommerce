<?php require_once('../modulos/routes.php');
?>
<!DOCTYPE html>
<html lang="en">
<?php include_once(RUTA_MODULOS.'headEtiqueta.php');?>

<body style="max-width: 1700px;margin: auto;">

<?php include_once(RUTA_MODULOS."header.php");?>


<div class="contentPerfil" id="lista-productos" style="padding-top: 100px;padding-bottom: 30px;height:800px">

    <div  id="getProducts">
      
    </div>
    <div id="comentarios"></div>
    <div class="main">
        <div class="container-comments">
            
        </div>
    </div>
</div>



<?php include_once RUTA_MODULOS.'/footer.php'; ?>
<script>
    getDetalle();
  </script>
</body>
</html>