    let urlBaseLoader = "http://localhost/buyme/";
    console.log(urlBaseLoader);
    if(window.location.href===urlBaseLoader+"ui/dashboard/misProductos.php"
    || window.location.href===urlBaseLoader+"ui/dashboard/dashboard.php"
    || window.location.href===urlBaseLoader+"ui/dashboard/user.php"
    || window.location.href===urlBaseLoader+"ui/dashboard/pqrs.php"
    || window.location.href===urlBaseLoader+"ui/modulos/footer.php" 
    || window.location.href===urlBaseLoader+"ui/modulos/header.php"
    || window.location.href===urlBaseLoader+"ui/modulos/headEtiqueta.php"
    || window.location.href===urlBaseLoader+"ui/modulos/routes.php"
    || window.location.href===urlBaseLoader+"ui/dashboard/productCreate.php"){
        
        
        if(JSON.parse(localStorage.getItem('usuario'))==null){
            
            location.href = "../../ui/pages/index.php";
           
        }else{
            if(window.location.href===urlBaseLoader+"ui/dashboard/dashboard.php"){
                JSON.parse(localStorage.getItem('usuario')).rol!=="Usuario"?null:location.href = "../../ui/pages/index.php";
            }
        }
    }


    if(window.location.href===urlBaseLoader+"ui/credenciales/login.php"
    || window.location.href===urlBaseLoader+"ui/credenciales/register.php"){
        
      
        if(JSON.parse(localStorage.getItem('usuario'))!=null){
          
            location.href = "../../ui/pages/index.php";
           
        }
    }