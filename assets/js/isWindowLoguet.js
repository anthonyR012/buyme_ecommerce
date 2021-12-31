

    if(window.location.href==="http://localhost/buyme/ui/dashboard/dashboard.php"
    || window.location.href==="http://localhost/buyme/ui/dashboard/user.php"
    || window.location.href==="http://localhost/buyme/ui/dashboard/pqrs.php"
    || window.location.href==="http://localhost/buyme/ui/modulos/footer.php" 
    || window.location.href==="http://localhost/buyme/ui/modulos/header.php"
    || window.location.href==="http://localhost/buyme/ui/modulos/headEtiqueta.php"
    || window.location.href==="http://localhost/buyme/ui/modulos/routes.php"
    || window.location.href==="http://localhost/buyme/ui/dashboard/productCreate.php"){
        
        
        if(JSON.parse(localStorage.getItem('usuario'))==null){
            
            location.href = "../../ui/pages/index.php";
        }else{
            if(window.location.href==="http://localhost/buyme/ui/dashboard/dashboard.php"){
                JSON.parse(localStorage.getItem('usuario')).rol!=="Usuario"?null:location.href = "../../ui/pages/index.php";
            }
        }
    }
