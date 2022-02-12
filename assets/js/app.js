
 const user = JSON.parse(localStorage.getItem('usuario'));
 const baseUrl = "http://localhost/webservice/";
// --------------METODO GLOBALIZADO--------------------

window.addEventListener('DOMContentLoaded',() => {
   
    verifyUserLogin(user);
    verifyRolUser(user);
    clicknavbarglobal();
    searchProduct();
   
})

let busqueValorConcuerda = document.querySelector("#buscandoProduct");
function searchProduct(){

    if(busqueValorConcuerda!=null) busqueValorConcuerda.addEventListener('keypress',getProductoBuscado)
   
}
function getProductoBuscado(e){
   if(e.keyCode ==13){
    e.preventDefault();
    let busqueda  = busqueValorConcuerda.value;
   
    location.href = "http://localhost/buyme/ui/pages/searchingProduct.php?busqueda="+busqueda;
    
   }

   
}


function clicknavbarglobal(){
    const nav = document.querySelector('#navbarglobal');
    const button = document.querySelector('#buttonDisplay');
    nav.style.z_index = 80;
    button.addEventListener('click',()=>{
        if(nav.classList.contains('bg-white')){
            nav.classList.remove('bg-white');
            nav.classList.add('navbar-transparent');
        }else{
            nav.classList.add('bg-white');
            nav.classList.remove('navbar-transparent');
        }
       
    })

}
function verifyUserLogin(user){
    const inItem = document.querySelector('#itemLogin');
    const inItem2 = document.querySelector('#itemLogin2');
    const inItem2_ = document.querySelector('#itemLogin2_');
    const inItemInicio = document.querySelector('#itemInicio');

    if(user!= null){
        let html2= `<li class="nav-item">
        <a class="nav-link" href="../dashboard/user.php">
          <img src="../../assets/img/account.png" class="iconHeaderBm" alt="">
          <p>
            <span class="d-lg-none d-md-block">Perfil</span>
          </p>
        </a>
      </li>
        `
        
        let htmlInicio = `
        <li class="nav-item dropdown">

        <li class="nav-item">
        <a class="nav-link" href="../pages/index.php">
          <img src="../../assets/img/inicio.png" class="iconHeaderBm" alt="">
          <p>
            <span class="d-lg-none d-md-block">Inicio</span>
          </p>
        </a>
      </li>
        `

        let html = `<!-- Nav Item - User Information -->

        <!-- ACCION AL DAR CLICK EN EL DESPLEGADOR -->
        <li class="nav-item dropdown">

        
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="now-ui-icons location_world"></i>
            <p>
              <span class="">!Hola, ${user.nombre} ${user.apellido}</span>
            </p>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" id="closeSesionBuyme" href="#">Cerrar sesión</a>
 
          </div>
        </li>`

        if(user.rol!=="Usuario"){
            let html_ =`
            <li class="nav-item dropdown">
    
            <li class="nav-item">
            <a class="nav-link" href="../dashboard/dashboard.php">
              <img src="../../assets/img/dashboard.png" class="iconHeaderBm" alt="">
              <p>
                <span class="d-lg-none d-md-block">Panel Administración</span>
              </p>
            </a>
          </li>
            `
            inItem2_.innerHTML =html_;
        }

        
      

  inItem2.innerHTML =html2;
  inItem.innerHTML = html;
  inItemInicio.innerHTML = htmlInicio;

  const sesionCerrar = document.querySelector("#closeSesionBuyme");
  

  sesionCerrar.addEventListener('click', () =>{

    updateState(user.id);
    localStorage.removeItem('usuario');
    window.location.href = "../../ui/pages/index.php";

  })
}else{
    let html = `<!-- Nav Item - User Information -->

     <!-- ACCION AL DAR CLICK EN EL DESPLEGADOR -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="../../assets/img/desplegableLogin.png" class="iconHeaderBm" alt="">
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
      <a class="dropdown-item" id="closeSesionBuyme" href="../pages/">Inicio</a>
      <a class="dropdown-item" id="closeSesionBuyme" href="../credenciales/register.php">Registrarme</a>
      <a class="dropdown-item" id="closeSesionBuyme" href="../credenciales/login.php">Iniciar Sesión</a>
      </div>
    </li>`
  
    inItem.innerHTML = html;
}

}

function verifyRolUser(user){
    if(user!=null && user.rol =="Administrador"){
        
         
        const adminUser = document.querySelector("#panelAdministratorUser");
        const adminPqrs = document.querySelector("#panelAdministratorPqrs");
        if(adminPqrs!=null){
            adminPqrs.innerHTML = `  <a href="./dashboard.php">
            <i class="now-ui-icons business_chart-bar-32"></i>
            <p>panel de control</p>
          </a>`;
        }
        if(adminUser!=null) {
            adminUser.innerHTML = `  <a href="./dashboard.php">
            <i class="now-ui-icons business_chart-bar-32"></i>
            <p>panel de control</p>
          </a>`;
        }
        let isAdmin = document.querySelector("#isAdmin");

        isAdmin!=null?document.querySelector("#isAdmin").innerHTML = ` 
        <a href="./dashboard.php">
        <i class="now-ui-icons business_chart-bar-32"></i>
        <p>Panel de control</p>
      </a>`:null;
       
           
          
    }

}
function updateState(id){
    url = baseUrl+"Update.php?case=actividad&id="+id;
    fetch(url)
    .then(response => response.json());
}

//------------------EVENTOS LOGIN USUARIOS PETICION LOGIN-------------------- 
    const btnRecuperar = document.querySelector("#recuperarPass");
    const correoRecupero = document.querySelector("#emailRecuperacion");
function eventLogin(){
    
    
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const login = document.querySelector("#login");
    btnRecuperar.addEventListener("click",sendMail);
   
    if(email.value.length >0 && pass.value.length >0){
        console.log("false")
        login.disabled = false;
    }else{
        console.log("true")
        login.disabled = true;
    }
    
    correoRecupero.addEventListener("input",validarFormulario);
    email.addEventListener('input', validarFormulario);
    pass.addEventListener('input', validarFormulario);
    login.addEventListener("click",busqueUsuario);
    showRememberPass();
}

function f_recordar(recordar){
    if(recordar.checked){
       Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardaran tus credenciales!!',
            showConfirmButton: false,
            timer: 2000
          });

      document.cookie = "User_Email=" + document.getElementById('email').value;
      document.cookie = "User_Pass=" + document.getElementById('pass').value;
      }      
   }


   function f_olvidar(olvidar){
    if(olvidar.checked){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Hemos olvidado tus credenciales satisfactoriamente!!',
            showConfirmButton: false,
            timer: 2000
          });
      document.cookie = "User_Email=;";
      document.cookie = "User_Pass=;";
      window.location.reload(1);
      }          
   }


function sendMail(e) {
    e.preventDefault();
       // Spinner al presionar Enviar
       const spinner = document.querySelector('#spinner2');
       spinner.className += " spinner-grow text-muted";
     
  
       // Ocultar Spinner y enviar informacion
       setTimeout( () => {
          spinner.classList.remove("spinner-grow");
          
       }, 3000);
    const data = new FormData();
   
    data.append('email', correoRecupero.value);
    data.append('case', "claveTemporal");

    url = baseUrl+"recuperarClave.php";

    fetch(url,{
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => confirmSend(data[0]));
    document.querySelector('#formRecuperar').reset();
    correoRecupero.classList.remove('is-valid');
    correoRecupero.classList.remove('form-control');
    btnRecuperar.disabled = true;
    
}

function confirmSend(data) {
  
    if(data.response=="change complete"){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha generado una clave temporal, Revisa tu correo!!',
            showConfirmButton: false,
            timer: 3000
          });

    }else{
        Swal.fire({
            title: ':(',
            text: 'Este usuario no existe.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });

    }
    
}

function showRememberPass() {
$('#recuperarclave').hide(); 

$('#olvidar').on('click', function() {
    $('#signup').hide(); //para ocultar
    $("#recuperarclave").fadeIn("slow"); //mostrar
});

$('#volver').on('click', function() {
    $('#recuperarclave').hide(); //para ocultar
    $("#signup").fadeIn("slow"); //mostrar
});
}


function busqueUsuario(e) {
    e.preventDefault();

     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.className += " spinner-grow text-muted";
   

     // Ocultar Spinner y enviar informacion
     setTimeout( () => {
        spinner.classList.remove("spinner-grow");
        
        url = baseUrl+"Search.php?case=login";
        consultaApi(url);
     }, 3000);

}

function consultaApi(url){
    const data = new FormData(document.querySelector('#formLogin'));
   
    data.append('searchEmail', email.value);
    data.append('searchPass', pass.value);


    fetch(url,{
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => confirmeCredenciales(data.response));
}

function confirmeCredenciales(data){
    console.log(data);
    if(data["response"]!=="No_found_user" && data["response"]!=="Login_failed"){
        
        const usuario = {
            id: data["id"],
            nombre: data["Nombre"],
            apellido: data["Apellido"],
            rol: data["rol"],
        }
        const usuarioString = JSON.stringify(usuario);
        localStorage.setItem('usuario', usuarioString);

        window.location.href = "../../ui/pages/index.php";
    }else{
        
        Swal.fire({
            title: 'Oh!',
            text: 'Este usuario no existe.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

        document.querySelector('#formLogin').reset();
        email.classList.remove('is-valid');
        pass.classList.remove('is-valid');
        
    }

}


function validarFormulario(e){
    e.target.className+= ' form-control';
    if(e.target.value.length > 4 ) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
   } else {
        e.target.className+= ' is-invalid';
   }

   if(this.type === 'email') {
    validarEmail(this);
    }

if(email.value !== '' && pass.value !== '' && email.value.length > 5 && pass.value.length > 4) {
    login.disabled = false;
}else{
    login.disabled = true;
}
    console.log(correoRecupero.value);
    
    console.log(btnRecuperar)


}
function validarEmail(campo){

    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
        
         campo.classList.add('is-valid');
         campo.classList.remove('is-invalid');
         btnRecuperar.disabled = false;
    } else {
        btnRecuperar.disabled = true;
         campo.className+= ' is-invalid form-control';
    }


}



//------------------------EVENTOS REGISTRO PETICION REGISTRO-----------------------------

function eventRegistro(){
    
    const nombrer = document.querySelector("#nombrer");
    const apellidor = document.querySelector("#apellidor");
    const emailr = document.querySelector("#emailr");
    const direccionr = document.querySelector("#direccionr");
    const telefonor = document.querySelector("#telefonor");
    const passr = document.querySelector("#passr");
    const registror = document.querySelector("#registerBtn");
    const departmentr = document.querySelector("#selectDepartamentos");
    const municipior = document.querySelector("#selectMunicipios");
    const tratamiento = document.querySelector(".tratamiento");

    nombrer.addEventListener('blur', validarRegistro);
    apellidor.addEventListener('blur', validarRegistro);
    emailr.addEventListener('blur', validarRegistro);
    direccionr.addEventListener('blur', validarRegistro);
    telefonor.addEventListener('blur', validarRegistro);
    passr.addEventListener('blur', validarRegistro);
    nombrer.addEventListener('blur', validarRegistro);
    departmentr.addEventListener('change', validarRegistro);
    municipior.addEventListener('change', validarRegistro);
    registror.addEventListener('click', registrarUsuario);
    tratamiento.addEventListener('click', validarRegistro);


    
    getDepartamentos();
    getMunicipios();
    

}


function registrarUsuario(e) {

   
    e.preventDefault();

    // Spinner al presionar Enviar
    const spinner = document.querySelector('#spinner');
    spinner.className += " spinner-grow text-muted";


    // Ocultar Spinner y enviar informacion
    setTimeout( () => {
       spinner.classList.remove("spinner-grow");
       
       url = baseUrl+"insert.php?case=usuarios";
       consultaApiRegistro(url);
    }, 3000);


}

function consultaApiRegistro(url){

    
    const dataRegister = new FormData(document.querySelector('.formRegisterBm'));

    dataRegister.append('nombre', nombrer.value);
    dataRegister.append('apellido', apellidor.value);
    dataRegister.append('email', emailr.value);
    dataRegister.append('telefono', telefonor.value);
    dataRegister.append('direccion', direccionr.value);
    dataRegister.append('password', passr.value);
    dataRegister.append('log', 'inactivo');
    dataRegister.append('localidad', document.querySelector("#selectMunicipios").value);

    
    
    fetch(url,{
        method: 'POST',
        body: dataRegister
    })
    .then(response => response.json())
    .then(data => insertDetail(data.response));   
}

function insertDetail(data){
    if(data["response"]!=="Error"){
        
        window.location.href = "../../ui/credenciales/login.php";
    }else{
        alert("Verifique su conexion");
    }
}
function validarRegistro(e){
    
 
    if(this.type !== 'select-one'){

    if(e.target.value.length > 3 ) {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'green';
   } else {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'red';
   }
   if(this.type === 'email') {
         validarEmailRegister(this);
    }
    }
    
    const registror = document.querySelector("#registerBtn");


if(emailr.value !== '' 
    && nombrer.value !== '' 
    && apellidor.value !== '' 
    && direccionr.value !== '' 
    && telefonor.value !== '' 
    && passr.value !== '' 
    && emailr.value.length > 5 
    && nombrer.value.length > 2
    && apellidor.value.length > 2 
    && direccionr.value.length > 3 
    && passr.value.length > 4
    && document.querySelector("#selectDepartamentos").value!=="false" 
    && document.querySelector("#selectMunicipios").value!=="false" 
    && document.querySelector('.tratamiento').checked !== false) {

    registror.disabled = false;
}else{
    registror.disabled = true;
}


}
function validarEmailRegister(campo){

    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
        
        campo.style.border = '1px solid';
        campo.style.borderColor = 'green';
    } else {
        
        campo.style.border = '1px solid';
        campo.style.borderColor = 'red';
    }


}

// LLENAR SELECTORES 
function getMunicipios() {
    url = baseUrl+"querys.php?case=municipios";
    fetch(url)
    .then(response => response.json())
    .then(data => setMuni(data.response));
}
function getDepartamentos() {
    url = baseUrl+"querys.php?case=departamentos";
    fetch(url)
    .then(response => response.json())
    .then(data => setDepa(data.response));

}
function setDepa(data) {
    let html = "<option value='false' selected>Departamento</option>";
    const selectDepartamento = document.querySelector("#selectDepartamentos");
    for (let i = 0;i < data.length;i++) {
        html += `<option value='${data[i].id}'>${data[i].nombre}</option>`;

    }

    selectDepartamento.innerHTML = html;
}
function setMuni(data) {
    let html = "<option value='false' selected>Municipio</option>";
    const selectMunicipios = document.querySelector("#selectMunicipios");
    for (let i = 0;i < data.length;i++) {
        html += `<option value='${data[i].id}'>${data[i].nombre}</option>`;

    }

    selectMunicipios.innerHTML = html;
}


// ----------------------------EVENTOS PERFIL, COMPLETAR CAMPOS---------------------------
function eventPerfil(){

    const emailUser = document.querySelector("#emailUser");
    const nameUser = document.querySelector("#nameUser");
    const lastUser = document.querySelector("#lastUser");
    const adressUser = document.querySelector("#adressUser");
    const phoneUser = document.querySelector("#phoneUser");
    const pqrsUser = document.querySelector("#pqrsUser");
    getUser();
    getPqrs();
    editCredentials();
    editInformation();

}


function getPqrs() {
    url = baseUrl+"search.php?case=usuarios&&searchId="+JSON.parse(localStorage.getItem('usuario')).id;

    fetch(url)
    .then(response => response.json())
    .then(data => setDataUser(data.response));
}
function getUser(){
    url = baseUrl+"search.php?case=pqrs&searchId="+JSON.parse(localStorage.getItem('usuario')).id;
    
    fetch(url)
    .then(response => response.json())
    .then(data => setDataPqrsUser(data.response));

}

function setDataPqrsUser(pqrs){
    let html = "";
    
    if(pqrs.response!="No found pqrs"){
        for(let i=0; i<pqrs.length; i++){

          
            html+=` <div class="col-4">
            <p class="textColumBm">Tipo PQRS:</p>
            <p class="textColumBm">Descripción:</p>
            <p class="textColumBm">Estado:</p>

        </div>
    
        <div class="col-8">
            <p class="textValueBm text-uppercase">${pqrs[i].razon}</p>
            <p class="textValueBm text-uppercase text-break">${pqrs[i].detalle}</p>
            <p class="textValueBm text-uppercase">${pqrs[i].estado}</p>
            <hr>
        </div>
        
        `;
        }
       
    
    }else{
      
        html+= `<div class="col-8"><p class="textColumBm">No hay PQRS registrados</p></div>`;
    }

    pqrsUser.innerHTML = html;
}
function setDataUser(user) {
    emailUser.innerHTML = `${user[0].Email}`;
    nameUser.innerHTML = `${user[0].Nombre}`;
    lastUser.innerHTML = `${user[0].Apellido}`;
    adressUser.innerHTML = `${user[0].Direccion}`;
    phoneUser.innerHTML = `${user[0].Telefono}`;
    document.querySelector("#emailupd").placeholder = `${user[0].Email}`;
    document.querySelector("#nombresUpt").placeholder = `${user[0].Nombre}`;
    document.querySelector("#apellidosUpt").placeholder = `${user[0].Apellido}`;
    document.querySelector("#direccionUpt").placeholder = `${user[0].Direccion}`;  
    document.querySelector("#telefonoUtp").placeholder = `${user[0].Telefono}`;  
}

function editCredentials(){
    const emailEdit = document.querySelector("#emailupd");
    const passEditAnt = document.querySelector("#passanti");
    const passEditNew = document.querySelector("#passnew");   
   
    passEditNew.addEventListener("blur",validarEdit); 
    emailEdit.addEventListener("blur",validarEdit);
    passEditAnt.addEventListener("blur",validarEdit);
    
    
    const btnEditCredential = document.querySelector("#editCredential");
    btnEditCredential.addEventListener("click",editarCredenciales);
    
}

function editInformation(){
    const nombresEdit = document.querySelector("#nombresUpt");
    const apellidosEdit = document.querySelector("#apellidosUpt");
    const direccionEdit = document.querySelector("#direccionUpt");  
    const telefonoEdit = document.querySelector("#telefonoUtp");   

   
    nombresEdit.addEventListener("blur",validarEdit2); 
    apellidosEdit.addEventListener("blur",validarEdit2);
    direccionEdit.addEventListener("blur",validarEdit2);
    telefonoEdit.addEventListener("blur",validarEdit2);
    
    const editInformation = document.querySelector("#editInformations");
    editInformation.addEventListener("click",editarInformaciones);
    
}
function editarInformaciones() {
    
    // GUARDAR VALORES VACIOS DE INPUT LLENOS.
        const dataEdit = new FormData(document.querySelector('#formEditInformacion'));
        let nombres = document.querySelector("#nombresUpt").value!=''||document.querySelector("#nombresUpt").value.length>5?document.querySelector("#nombresUpt").value:document.querySelector("#nombresUpt").placeholder;

        let apellidos = document.querySelector("#apellidosUpt").value!=''||document.querySelector("#apellidosUpt").value.length>5?document.querySelector("#apellidosUpt").value:document.querySelector("#apellidosUpt").placeholder;

        let direccion = document.querySelector("#direccionUpt").value!=''||document.querySelector("#direccionUpt").value.length>5?document.querySelector("#direccionUpt").value:document.querySelector("#direccionUpt").placeholder;

        let telefono = document.querySelector("#telefonoUtp").value!=''||document.querySelector("#telefonoUtp").value.length>5?document.querySelector("#telefonoUtp").value:document.querySelector("#telefonoUtp").placeholder;
        
    
        url = baseUrl+"Update.php?case=perfil&editinformation&id="+JSON.parse(localStorage.getItem('usuario')).id+"&telefono="+telefono+"&nombres="+nombres+"&apellidos="+apellidos+"&direccion="+direccion;
       
        fetch(url)
        .then(response => response.json())
        .then(data => verifyChangePass(data.response));   
        
        
}

function editarCredenciales() {
    
    const dataEdit = new FormData(document.querySelector('#formEditCredential'));
    let email = document.querySelector("#emailupd").value!=''||document.querySelector("#emailupd").value.length>5?document.querySelector("#emailupd").value:document.querySelector("#emailupd").placeholder;

    dataEdit.append('email', email);
    dataEdit.append('password', document.querySelector("#passnew").value);
    dataEdit.append('lastpassword', document.querySelector("#passanti").value);
   
    url = baseUrl+"Update.php?case=perfil&editcredential&id="+JSON.parse(localStorage.getItem('usuario')).id;
    
    fetch(url,{
        method: 'POST',
        body: dataEdit
    })
    .then(response => response.json())
    .then(data => verifyChangePass(data.response));   
    
    dataEdit.reset();
}

function verifyChangePass(data){
   


    if(data[0].response=="update complete"){

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Actualización completa',
            showConfirmButton: false,
            timer: 1500
          })
        
    }else{
        Swal.fire({
            title: 'Oh!',
            text: 'No concuerda la contraseña.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

    }

    setTimeout( () => {
        
        getPqrs();
        
     }, 3000);
    

}

function validarEdit2(e){
    
    if(e.target.value.length > 3 ) {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'green';
   } else {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'red';
   }  
    
    const btnEditInformation = document.querySelector("#editInformations");

if(document.querySelector("#nombresUpt").value !== '' 
    || document.querySelector("#apellidosUpt").value !== ''
    || document.querySelector("#direccionUpt").value !== ''
    || document.querySelector("#telefonoUtp").value !== '' 
    && document.querySelector("#nombresUpt").value.length > 3
    || document.querySelector("#apellidosUpt").value.length > 3
    || document.querySelector("#direccionUpt").value.length > 3
    || document.querySelector("#telefonoUtp").value.length > 3) {

        btnEditInformation.disabled = false;
}else{
        btnEditInformation.disabled = true;
}


}

function validarEdit(e){
    
    if(e.target.value.length > 3 ) {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'green';
   } else {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'red';
   }
   if(this.type === 'email') {
         validarEmailRegister(this);
    }
    
    
    const btnEditCredential = document.querySelector("#editCredential");

if(document.querySelector("#passanti").value !== '' 
    && document.querySelector("#passnew").value !== '' 
    && document.querySelector("#passanti").value.length > 3
    && document.querySelector("#passnew").value.length > 3) {

    btnEditCredential.disabled = false;
}else{
    btnEditCredential.disabled = true;
}


}

// ---------------------------EVENTOS INDEX, PETICION ESTADO ACTIVIDAD-----------------------

function eventIndex(){
    
  getProducts();

}


// METODOS CARRITO DE COMPRA
// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const agregarBtn = document.querySelector('#agregar-carrito'); 
let articulosCarrito = [];



cargarEventListeners();
function cargarEventListeners() {
   

    
    //verifica que este logueado y compra producto
    document.querySelector("#comprar-carrito").addEventListener("click", goProduct)
   //Muestra informacion de carrito
    document.querySelector('#img-carrito').addEventListener('click', mostrarCarrito)
     // Dispara cuando se presiona "Agregar Carrito"
     if(listaCursos!=null)  listaCursos.addEventListener('click', agregarCurso);
    
     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', limpiarCarrito);


     // NUEVO: Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


function mostrarAlert() {

    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}


function goProduct() {
    
    
    carrito.style.display = "none";
    if(user!=null){

    }else{
        Swal.fire({
            title: 'Oh!',
            text: 'Parece que no estas registrado aún.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            location.href = "http://localhost/buyme/ui/credenciales/login.php"
          })
    }

    
}
function mostrarCarrito() {

    if(carrito.style.display=="none"){
        carrito.style.display = "block";
    }else{
        carrito.style.display = "none";
    }
    


}
// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();
     
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Al carrito',
            text: "¿Deseas agregar este producto al carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si,Claro!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Agregado!',
                'Puedes ver tus productos en el icono de carrito.',
                'success'
              )
              const curso = e.target.parentElement.parentElement;
         
              // Enviamos el curso seleccionado para tomar sus datos
              leerDatosCurso(curso);

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Gracias por confirmar :)',
                'error'
              )
            }
          })


          
     }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h5').textContent,
          precio: curso.querySelector('.precio b').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }
     console.log(infoCurso);

     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    let cantidad = parseInt(curso.cantidad);
                    cantidad++
                    curso.cantidad =  cantidad;
                    return curso;
               } else {
                    return curso;
               }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const curso = e.target.parentElement.parentElement;
          const cursoId = curso.querySelector('a').getAttribute('data-id');
          console.log("produto "+cursoId)
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

    sincronizarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

     // NUEVO:
     sincronizarStorage();

}


// NUEVO: 
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarCarrito() {
    while(contenedorCarrito.firstChild) {
        
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
       
    }
    articulosCarrito  = [];
    localStorage.removeItem("carrito");
}
// Elimina los cursos del carrito en el DOM
function sincronizarCarrito() {
     // forma rapida (recomendada)

     while(contenedorCarrito.firstChild) {
        
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
         
      }

      
}


function getProducts(){
    url = " http://localhost/webservice/querys.php?case=productos";
    
    fetch(url)
    .then(response => response.json())
    .then(data => setDataProduct(data.response));
  
}
function setDataProduct(products){
    const productSetPhone = document.querySelector("#getProductPhone");
    const productSetCompu = document.querySelector("#getProductCompu");
    const productSetTable = document.querySelector("#getProductTable");
    
    let htmlPhone = "";
    let htmlTable = "";
    let htmlCompu = "";
    
    let icompu = 1,iphone = 1,itable = 1;
    htmlCompu = `<div class="carousel-inner text-center"> <div class="carousel-item active">`;
    htmlTable = `<div class="carousel-inner text-center"> <div class="carousel-item active">`;
    htmlPhone = `<div class="carousel-inner text-center"> <div class="carousel-item active">`;

    products.forEach(element => {
          
        if(element.Categoria==="Celulares"){
            
            if(iphone<=4){
            
                htmlPhone+=`
            
                <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                <img src="${element.Imagen}"  class="card-img-top" alt="post">
                <div class="card-body">
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                <a href="#" class="btn btn-danger">Detalle</a>
                </div>
            </div>
           
                `;
            
            }else{
                if(iphone===5){
                    htmlPhone+=`
                    </div>
                    <div class="carousel-item"> 
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;
                    iphone=1;
                }else{
                    htmlPhone+=`
    
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;

                }
               
                
            }
            iphone+=1;
        }else if(element.Categoria==="Computadores"){
            
            if(icompu<=4){
                htmlCompu+=`
        
                <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                <img src="${element.Imagen}"  class="card-img-top" alt="post">
                <div class="card-body">
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                <a href="#" class="btn btn-danger">Detalle</a>
                </div>
            </div>
           
                `;
            
            }else{
                if(icompu===5){
                    htmlCompu+=`
                    </div>
                    <div class="carousel-item"> 
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;
                    icompu=1;
                }else{
                    htmlCompu+=`
    
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;

                }
               
                
            }
           
            icompu+=1;
           
        }else{
            if(itable<=4){
                htmlTable+=`
        
                <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                <img src="${element.Imagen}"  class="card-img-top" alt="post">
                <div class="card-body">
                <h5 class="card-title">${element.Nombre}</h5>
                <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                <a href="#" class="btn btn-danger">Detalle</a>
                </div>
            </div>
           
                `;
            
            }else{
                if(itable===5){
                    htmlTable+=`
                    </div>
                    <div class="carousel-item"> 
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;
                    itable=1;
                }else{
                    htmlTable+=`
    
                    <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${element.Imagen}"  class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${element.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${element.Precio}</b></p>
                    <a href="#" class="btn btn-primary" id="agregar-carrito" data-id="${element.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
                    `;

                }
               
                
            }
            itable+=1;
        }
        
        
        
    });
    
    if(icompu<=4){
        htmlCompu +=`</div>`;
    }
    if(iphone<=4){
        htmlPhone +=`</div>`;
    }
    if(itable<=4){
        htmlTable +=`</div>`;
    }
    baseImg = "http://localhost/buyme/assets/img/";
    htmlCompu += `
    </div><img src="${baseImg}flecha-izquierda.png" class="carousel-control-prev buttonStyle"  data-bs-target="#carouselControlsCompus" data-bs-slide="prev">  
   </button>
   <img src="${baseImg}flecha-derecha.png"  class="carousel-control-next buttonStyle"  data-bs-target="#carouselControlsCompus" data-bs-slide="next">
   </button></div> `;
   htmlPhone += `
   </div><img src="${baseImg}flecha-izquierda.png" class="carousel-control-prev buttonStyle" type="button" data-bs-target="#carouselControlsPhones" data-bs-slide="prev"/>
  <img src="${baseImg}flecha-derecha.png" class="carousel-control-next buttonStyle" type="button" data-bs-target="#carouselControlsPhones" data-bs-slide="next"></div> `;
  htmlTable += `
  </div><<img src="${baseImg}flecha-izquierda.png" class="carousel-control-prev buttonStyle" type="button" data-bs-target="#carouselControlsTables" data-bs-slide="prev"/>  
 <img src="${baseImg}flecha-derecha.png" class="carousel-control-next buttonStyle" type="button" data-bs-target="#carouselControlsTables" data-bs-slide="next"/></div> `;

    productSetPhone.innerHTML = htmlPhone;
    productSetCompu.innerHTML = htmlCompu;
    productSetTable.innerHTML = htmlTable;


}


// ---------------------------EVENTOS DASHBOARD, PETICION ESTADO ACTIVIDAD-----------------------

function eventDashboard(){
   
  getPqrsActive();
  getLastPeditor();

  setInterval( () => {
  
    getPqrsActive(); 
    getLastPeditor();
    console.log("recarga...")
  },60000*3);

}

function getPqrsActive(){
    url = baseUrl+"search.php?case=pqrs&searchReason=activo";
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => setDataPqrsAll(data.response));


}

function getLastPeditor(){
    url = baseUrl+"search.php?case=pedidos&&searchState=activo";
    
    fetch(url)
    .then(response => response.json())
    .then(data => setDataOrdersAll(data.response));

}


function setDataOrdersAll(allOrders){

    html = ""
    if(allOrders.length> 0 || !allOrders =="Error"){
        
        allOrders.forEach(element => {
            
            console.log(element)
            html+=`
            <tr>
            <td>
            ${element.usuario}
            </td>
            <td>
            ${element.cantidad_productos}
            </td>
            <td>
            ${element.entregar_en}
            </td>
            <td>
            ${element.localidad}
            </td>
            <td class="text-right">
            $ ${element.total_a_pagar}
            </td>
          </tr>`;
        });

        
        
    }else{
        console.log("No hay pedidos")
    }

    document.querySelector(".addOrdersAll").innerHTML = html;
}

function setDataPqrsAll(allPqrs){
    
    if(allPqrs.length> 0){
    const tablePqrs = document.querySelector("#allPqrsExist");
    let html = "";
    console.log(allPqrs)
    for(let i = 0; i < allPqrs.length; i++){
       
        if(allPqrs[i].estado=="activo"){
        html+=`<tr>
        <td>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" >
              <span class="form-check-sign"></span>
            </label>
          </div>
        </td>
        <td class="text-left"><span style="font-weight: bold">${allPqrs[i].usuario}</span> ${allPqrs[i].detalle}<br><span style="color:red">${allPqrs[i].razon}</span>  ${allPqrs[i].correo}</td>
        <td class="td-actions text-right">
          <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
            <i class="now-ui-icons ui-2_settings-90"></i>
          </button>
          <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </button>
        </td>
      </tr>`;
    }
       
    }
    tablePqrs.innerHTML = html;
    }
}

// ------------EVENTOS CREACION DE PRODUCTOS---------------


var imagenB64;
var isOfert = false;
var productoCase = "productos";
var ofertaCase = "oferta";

function eventCreateProduct(){
    getCategorias();


    document.querySelector('#capturarImg').addEventListener('change',previsualization);
    document.querySelector('#producto').addEventListener('blur',validarCreateProduct);
    document.querySelector('#marca').addEventListener('blur',validarCreateProduct);
    document.querySelector('#referencia').addEventListener('blur',validarCreateProduct);
    document.querySelector('#garantia').addEventListener('blur',validarCreateProduct)
    document.querySelector('#precio').addEventListener('blur',validarCreateProduct);
    document.querySelector('#descripcion').addEventListener('blur',validarCreateProduct);
    document.querySelector('#cantidad').addEventListener('blur',validarCreateProduct);
    document.querySelector('#selectCategoria').addEventListener('change',validarCreateProduct);
    document.querySelector("#selectType").addEventListener('change',validarCreateProduct);
        document.querySelector("#caracteristicas").addEventListener('blur',validarCreateProduct);
        document.querySelector("#porcentaje").addEventListener('blur',validarCreateProduct);
        document.querySelector("#inicio").addEventListener('change',validarCreateProduct);
        document.querySelector("#fin").addEventListener('blur',validarCreateProduct);
        document.querySelector("#cantidad_oferta").addEventListener('blur',validarCreateProduct);

    document.querySelector('#addOfert').addEventListener('click',openInputsOfert);

    document.querySelector('#publicar').addEventListener('click',insertServerProduct);
    
}
function previsualization(){
    const previsualization = document.querySelector("#previsualizar");
    const archivo = document.querySelector("#capturarImg").files;
    const primerArchivo = archivo[0];

     var reader = new FileReader();
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    previsualization.src = objectURL;
     // Closure to capture the file information.
     
     reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          imagenB64 = e.target.result;
        //  console.log(escape(theFile.name))
        };
      })(primerArchivo);
     // Read in the image file as a data URL.
     reader.readAsDataURL(primerArchivo);
    
}
let contador = 0;
function openInputsOfert(){

    if (document.getElementById('addOfert').checked)
    {
        isOfert  = true;
        
        if(contador == 0){
        
            document.querySelector("#publicar").disabled = true;
            contador+=1;
        }
      
        document.getElementById('contenedorOculto').style.display = 'block';
        

    }else{
        isOfert  = false;
        document.querySelector("#publicar").disabled = false;
        document.getElementById('contenedorOculto').style.display = 'none';
       contador = 0;


    }

}

function validarCreateProduct(e){
    if(this.type !== 'select-one'){
    if(e.target.value.length > 0 ) {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'green';
   } else {
        e.target.style.border = '1px solid';
        e.target.style.borderColor = 'red';
   }
  
}
    const btn = document.querySelector("#publicar");
    
if(document.querySelector("#producto").value !== '' 
    && document.querySelector("#marca").value !== '' 
    && document.querySelector("#referencia").value !== '' 
    && document.querySelector("#descripcion").value !== '' 
    && document.querySelector("#cantidad").value !== '' 
    && document.querySelector("#precio").value !== '' 
    && document.querySelector("#garantia").value !== '' 
    && document.querySelector("#selectCategoria").value!=="false"
    && document.querySelector("#producto").value.length > 2
    && document.querySelector("#marca").value.length > 2
    && document.querySelector("#referencia").value.length > 2
    && document.querySelector("#descripcion").value.length > 2
    && document.querySelector("#precio").value.length > 2
    && document.querySelector("#garantia").value.length > 0
    && imagenB64 != undefined) {
        if(document.getElementById('addOfert').checked){

            console.log(document.querySelector("#selectType"))
            if(document.querySelector("#selectType").value!="false"
            && document.querySelector("#caracteristicas").value !== ''
            && document.querySelector("#caracteristicas").value.length > 2
            && document.querySelector("#inicio").value !== ''
            && document.querySelector("#fin").value !== ''
            && document.querySelector("#porcentaje").value !== ''
            && document.querySelector("#cantidad_oferta").value !== ''
            ){
                console.log("dasabilita")
                btn.disabled = false;
            }

        }else{
            btn.disabled = false;
        }

}else{
        btn.disabled = true;
}


}

function getCategorias() {
    url = baseUrl+"querys.php?case=categorias";
    fetch(url)
    .then(response => response.json())
    .then(data => setCate(data.response));
}
function setCate(data){
    
        let html = "<option value='false' selected>Categoria</option>";
        const selectMunicipios = document.querySelector("#selectCategoria");
        for (let i = 0;i < data.length;i++) {
            html += `<option value='${data[i].id}'>${data[i].Nombre}</option>`;
    
        }
    
        selectMunicipios.innerHTML = html;

}

function insertServerProduct(e){
    e.preventDefault();
    const producto =document.querySelector("#producto").value  
    const marca = document.querySelector("#marca").value 
    const referencia = document.querySelector("#referencia").value 
    const descripcion =document.querySelector("#descripcion").value
    const precio =document.querySelector("#precio").value
    const cantidad = document.querySelector("#cantidad").value 
    const garantia = document.querySelector("#garantia").value 
    const selectCategoria = document.querySelector("#selectCategoria").value
    
    const spinner = document.querySelector('#spinner');
    spinner.className += " spinner-grow text-muted";
  
    // Ocultar Spinner y enviar informacion
    setTimeout( () => {
       spinner.classList.remove("spinner-grow");

       url = `http://localhost/webservice/insert.php?case=${isOfert?ofertaCase:productoCase}&nombre=${producto}&marca=${marca}&referencia=${referencia}&descripcion=${descripcion}&precio=${precio}&existencia=${cantidad}&garantia=${garantia}&categoria=${selectCategoria}&id_proveedor=${JSON.parse(localStorage.getItem('usuario')).id}`;
       sendDataServerProduct(url);
    }, 3000);
    

}
function sendDataServerProduct(url){
    var strImage;
    strImage = imagenB64.replace(/^data:image\/[a-z]+;base64,/, "");
    let myJSON;

   if(isOfert){
    
    precioOferta = parseFloat(document.querySelector("#precio").value)-((parseFloat(document.querySelector("#porcentaje").value)/100)*parseFloat(document.querySelector("#precio").value));
     myJSON = { 
        imagen: strImage ,
        tipo: document.querySelector("#selectType").value,    
        caracteristica: document.querySelector("#caracteristicas").value,
        inicio: document.querySelector("#inicio").value,
        fin: document.querySelector("#fin").value,
        porcentaje: document.querySelector("#porcentaje").value,
        precio: precioOferta+'',
        cantidad: document.querySelector("#cantidad_oferta").value
    };

   }else{
   
     myJSON = { imagen: strImage };
   }
    

    fetch(url,{
        method: 'POST',
        body: JSON.stringify(myJSON),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json())
    .then(data => confirmInsertProduct(data.response));
}

function confirmInsertProduct(data){
    console.log(data);
    if(data["response"]!=="Error"){

        Swal.fire({
            title: 'Publicación exitosa!',
            text: 'Puedes modificar el contenido en (Mis productos).',
            imageUrl: 'http://localhost/buyme/assets/img/bueno.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        
    }else{
        Swal.fire(
            'Internet?',
            'Verifica tu conexión',
            'question'
          )
    }

    setTimeout( () => {
        document.querySelector("#formRegisterProduct").reset();
        document.querySelector('#alertResult').innerHTML = ``;
        document.querySelector("#publicar").disabled = true;
        document.getElementById('contenedorOculto').style.display = 'none';
    },5000);

}   


// EVENTOS PQRS

let validacion=document.getElementById("validacion");
let arr = document.getElementsByName("radio-stacked");
var valorespq;
function pqrs() {

   validacion.addEventListener("input",validarPqrs)
   document.querySelector("#customControlValidation1").addEventListener("click",validarPqrs)
   document.querySelector("#Result").addEventListener("click",ejectionpq);
}
function ejectionpq(e) {

    e.preventDefault();

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].checked) {
            valorespq = document.getElementById(arr[i].id).value;
        }        
    }

       
    url = "http://localhost/webservice/Insert.php?case=pqrs&validacion="+validacion.value+"&rates="+valorespq+"&id="+user.id;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => alertOK(data.response))

    document.querySelector("#miFormuPqrs").reset();
    document.querySelector("#Result").disabled = true;
    validacion.classList.remove("is-valid");
}    
function alertOK(data){
    console.log(data);

    if(data[0].response =="insert complete"){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro PQRS completo',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        Swal.fire({
            title: 'Oh!',
            text: 'Parece que hubo un fallo de conexión.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

}
function validarPqrs(e){
   
    if(e.target.value.length > 4 ) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
   } else {
        e.target.className+= ' is-invalid';
   }
   
if(validacion.value !== '' && validacion.value.length > 5 &&  document.querySelector("#customControlValidation1").checked) {
    
    document.querySelector("#Result").disabled = false;
}else{
    document.querySelector("#Result").disabled = true;
}


}


//--------------- EVENTOS BUSCAR PRODUCTOS-------------------------

let buscar = document.querySelector("#buscar");
let productoBusqueda = document.querySelector("#productoBusqueda");
let categoriaBusqueda = document.querySelector("#categoriaBusqueda");
let minBusqueda = document.querySelector("#minBusqueda");
let maxBusqueda = document.querySelector("#maxBusqueda");
let marcaBusqueda = document.querySelector("#marcaBusqueda");
let ofertaBusqueda = document.querySelector("#ofertaBusqueda");
let contenedorOfertas = document.querySelector("#productsOferts");

function searchingProducts() {
    let busquedaName = getParameterByName('busqueda');
    getsOfert();
   if(busquedaName!='') searchProductInApi(busquedaName);
    buscar.addEventListener("click",searchFilterProduct);

}

function getsOfert() {
    url = baseUrl + "querys.php?case=productosOfertas";
    fetch(url)
    .then(response => response.json())
    .then(data => showOfert(data.response));

}
htmlOfert ="";
function showOfert(data) {
   

    data.forEach(element => {
           
        setDataProductOfert(element,htmlOfert);
  
    });
    contenedorOfertas.innerHTML = htmlOfert;

}

function setDataProductOfert(producto) {
  console.log(producto);
    htmlOfert+=`
        <div class="card ">
        
        <div class="position-absolute top-0 end-0 ">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="50px" y="0px"
        width="100px" height="100px" viewBox="0 0 100 100"   enable-background="new 0 0 100 100" xml:space="preserve">
     <!--- Etiqueta Oferta de Promoción -->
       <g>
         <!--- Etiqueta -->
         <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
         <!--- Texto -->
         <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">${producto.tipo}</text>  
       </g>
     <!--- Etiqueta Superior triangular -->
       <g>  
         <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
         <!--- Texto triángulo -->  
         <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-${producto.porcentaje_oferta}</text>
         <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
       </g>  
   
     
   </svg>
   </div>

            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${producto.marca}</h5><p class="precio"> Ahora:  $<b >${producto.precio_oferta}</b> Antes: $<b class="text-decoration-line-through">${producto.precio_original}</b></p>
            <p class="card-text">${producto.caracteristicas_oferta}, ${producto.descripcion_producto}.</p>
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary agregar-carrito" data-id="${producto.id}" >Agregar</a>
            <small class="text-muted">Oferta valida hasta ${producto.fecha_fin}</small>
            </div>
        </div>
        `;

}

function searchFilterProduct(e) {
    e.preventDefault();

    let url = "";
    //FILTRO POR NADA
    if(productoBusqueda.value==''
    && categoriaBusqueda.value==''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value==''){
        url = baseUrl+"Querys.php?case=productos";
//FILTRO POR NOMBRE
    }else if(productoBusqueda.value!=''
    && categoriaBusqueda.value==''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value==''){
        
        url = baseUrl+"Search.php?case=productos&searchName="+productoBusqueda.value;
    
    //FILTRO POR NOMBRE Y CATEGORIA
    }else if(productoBusqueda.value!=''
    && categoriaBusqueda.value!=''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value==''){
      
        url = baseUrl+"Search.php?case=productos&searchName="+productoBusqueda.value+"&searchCategory="+categoriaBusqueda.value;

    //FILTRO POR TODO
    }else if(productoBusqueda.value!=''
    && categoriaBusqueda.value!=''
    && minBusqueda.value!=''
    && maxBusqueda.value!=''
    && marcaBusqueda.value!=''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchCategory=${categoriaBusqueda.value}&searchPMenor=${minBusqueda.value}&searchPMayor=${maxBusqueda.value}&searchBrand=${marcaBusqueda.value}`;

    //FILTRO POR NOMBRE, CATEGORIA Y MARCA 
    }else if(productoBusqueda.value!=''
    && categoriaBusqueda.value!=''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value!=''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchCategory=${categoriaBusqueda.value}&searchBrand=${marcaBusqueda.value}`;

    //FILTRO POR CATEGORIA, MIN Y MAX PRECIO
    }else if(productoBusqueda.value==''
    && categoriaBusqueda.value!=''
    && minBusqueda.value!=''
    && maxBusqueda.value!=''
    && marcaBusqueda.value==''){
      
     
        url = baseUrl+`Search.php?case=productos&searchCategory=${categoriaBusqueda.value}&searchPMenor=${minBusqueda.value}&searchPMayor=${maxBusqueda.value}`;
    //FILTRO POR NOMBRE, MIN Y MAX PRECIO Y MARCA
    }else if(productoBusqueda.value!==''
    && categoriaBusqueda.value==''
    && minBusqueda.value!=''
    && maxBusqueda.value!=''
    && marcaBusqueda.value!=''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchPMenor=${minBusqueda.value}&searchPMayor=${maxBusqueda.value}&searchBrand=${marcaBusqueda.value}`;
//FILTRO POR NOMBRE,CATEGORIA MIN Y MAX PRECIO 
    }else if(productoBusqueda.value!==''
    && categoriaBusqueda.value!=''
    && minBusqueda.value!=''
    && maxBusqueda.value!=''
    && marcaBusqueda.value==''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchPMenor=${minBusqueda.value}&searchPMayor=${maxBusqueda.value}&searchCategory=${categoriaBusqueda.value}`;
//FILTRO POR CATEGORIA
    }else if(productoBusqueda.value==''
    && categoriaBusqueda.value!=''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value==''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchCategory=${categoriaBusqueda.value}`;
//FILTRO POR MARCA
    }else if(productoBusqueda.value==''
    && categoriaBusqueda.value==''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value!=''){
      
     
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchCategory=${categoriaBusqueda.value}`;
//FILTRO POR MARCA Y CATEGORIA
    }else if(productoBusqueda.value==''
    && categoriaBusqueda.value!=''
    && minBusqueda.value==''
    && maxBusqueda.value==''
    && marcaBusqueda.value!=''){
      
       
        url = baseUrl+`Search.php?case=productos&searchBrand=${marcaBusqueda.value}&searchCategory=${categoriaBusqueda.value}`;
//FILTRO POR MIN, MAX Y NOMBRE
    }else if(productoBusqueda.value!==''
    && categoriaBusqueda.value==''
    && minBusqueda.value!=''
    && maxBusqueda.value!=''
    && marcaBusqueda.value==''){
      
       
        url = baseUrl+`Search.php?case=productos&searchName=${productoBusqueda.value}&searchPMenor=${minBusqueda.value}&searchPMayor=${maxBusqueda.value}`;

    }

    
    if(ofertaBusqueda.checked){
            url+=`&searchOfert=true`;
    }

    console.log(url)
     fetch(url)
    .then(response => response.json())
    .then(data => verifiedValoresReturn(data.response));
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function searchProductInApi(busquedaName) {

    url = baseUrl+"Search.php?case=productos&searchName="+busquedaName;
   
    fetch(url)
    .then(response => response.json())
    .then(data => verifiedValoresReturn(data.response));
}

const productsSet = document.querySelector("#getBusquedaProduct");
let htmlBusqueda=``;




function verifiedValoresReturn(productos) {
    htmlBusqueda=``
    if(productos=="Error"){

  Swal.fire({
            title: 'Oh!',
            text: 'Intenta probar con otro filtro.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }else{
  console.log(productos)
    if( !productos.response=="No found product" || productos.response==undefined){
        
        productos.forEach(element => {
           
            setDataProductBusqueda(element,htmlBusqueda);
      
        });
        // console.log(html)
        productsSet.innerHTML = htmlBusqueda;
    }else if(productos.response=="No found product"){
        Swal.fire({
            title: 'Oh!',
            text: 'No se encuentra esta definición del producto.',
            imageUrl: 'http://localhost/buyme/assets/img/error.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    }
}
function setDataProductBusqueda(producto) {

    htmlBusqueda+=`
        <div class="col ">
        <div class="card mx-2 my-2 shadow-lg rounded" style="width: 14rem;">
                    <img src="${producto.Imagen}" class="card-img-top" alt="post">
                    <div class="card-body">
                    <h5 class="card-title">${producto.Nombre}</h5>
                    <p class="card-text text-truncate precio" style="max-width: 400px">Precio:$<b> ${producto.Precio}</b></p>
                    <a href="#" class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar</a>
                    <a href="#" class="btn btn-danger">Detalle</a>
                    </div>
                </div>
    
        </div>
        `;


}



