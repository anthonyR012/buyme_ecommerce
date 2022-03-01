const linea = document.querySelector('#barra');
var progreso = 0;
var x = 0;var z = 0;var y = 0;

function GetSelect(){
    var select = document.getElementById("bancoSelect").value;
    if(select > 0 && z == 0){
        x=38;
        subidapro();
        z=1;
    }else if(select == 0 && z == 1){
        x=38;
        bajadapro();
        z=0;
    }
}

function GetSelect1(){
    var select1 = document.getElementById("bancoSelect1").value;
    if(select1 > 0 && y == 0){
        x=37;
        subidapro();
        y=1;
    }else if(select1 == 0 && y == 1){
        x=37;
        bajadapro();
        y=0;
    }
}

function GetBoton1(){
    var select = document.getElementById("bancoSelect").value;
    var select1 = document.getElementById("bancoSelect1").value;
    if(select != 0 && select1 != 0){
        x=25;
        subidapro();
    }else if(select == 0 && select1 == 0){
        x=0;
    };
    
    enviar();    
}

function GetInputs(){
    var relleno = document.getElementById("UsuNombre").value;
    if(relleno == ""){
        x=15;
        bajadapro();
    }else if(relleno == ""){
        x=0;
    }else if(relleno != ""){
        x=15;
        subidapro();
    }
}


function GetBoton(){
    var relleno = document.getElementById("UsuNombre").value;
    if(relleno == 0){
        x=25;
        bajadapro();
    }else{
        x=25;
        subidapro();
    };
    enviar();    
}



function subidapro(){
        progreso = progreso + x;
        if(progreso >= 0 && progreso <= 100){
            linea.setAttribute("style", "width: " + progreso + "%; transition: all 1s ease 0.2s;");
            linea.setAttribute("aria-valuenow",progreso);
            linea.textContent = progreso + "%";
        }
        if(progreso == 100){
            linea.textContent = "Complete!";
        }else if(progreso >= 40 && progreso <= 70){
            linea.setAttribute("class", "bg-warning progress-bar progress-bar-striped progress-bar-animated");
        }else if(progreso >= 71 && progreso <= 100){
            linea.setAttribute("class", "bg-success progress-bar progress-bar-striped progress-bar-animated");
        }else{
            linea.setAttribute("class", "bg-danger progress-bar progress-bar-striped progress-bar-animated");
        }
}

function bajadapro(){
        progreso = progreso - x;
        linea.setAttribute("style", "width: " + progreso + "%; transition: all 1s ease 0.2s;");
        linea.setAttribute("aria-valuenow",progreso);
        linea.textContent = progreso + "%";
        if(progreso >= 40 && progreso <= 70){
            linea.setAttribute("class", "bg-warning progress-bar progress-bar-striped progress-bar-animated");
        }else if(progreso >= 71 && progreso <= 100){
            linea.setAttribute("class", "bg-success progress-bar progress-bar-striped progress-bar-animated");
        }else{
            linea.setAttribute("class", "bg-danger progress-bar progress-bar-striped progress-bar-animated");
        }
}


/*Pooll*/

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
   document.getElementById("neto_compra").innerHTML= "$"+total_compraV;


    document.getElementById("tablet").innerHTML+= `
                              
                              <th scope="row" style="min-width: 50px"><img src="${srcIm}" width="50px" height="50px" alt=""></th>
                              <th scope="row"><small>${titulo}</small></th>
                              <th scope="row"><small>$${precio}</small></th>
                              <th scope="row"><small>${cantidad}</small></th>
                              <th scope="row"><small>$${subtotalV}</small></th>                                  
                              </tr>`;
}   


function enviar(){
    setTimeout(function(){    
    location.href = baseUrlPage+"ui/pages/index.php";
    localStorage.removeItem("carrito");
    localStorage.removeItem("valorCompra");     
}, 3000);
insertpedido();
insertDetallespedido();
enviarReporteEmail();
}
