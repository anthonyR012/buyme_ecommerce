
// --------------METODO GLOBALIZADO--------------------

window.addEventListener('DOMContentLoaded',() => {
    const user = JSON.parse(localStorage.getItem('usuario'));
    verifyUserLogin(user);
    verifyRolUser(user);
})

function verifyUserLogin(user){
    const inItem = document.querySelector('#itemLogin');
    const inItem2 = document.querySelector('#itemLogin2');

    if(user!= null){
        let html2= `<li class="nav-item">
        <a class="nav-link" href="../dashboard/user.php">
          <img src="../../assets/img/account.png" class="iconHeaderBm" alt="">
          <p>
            <span class="d-lg-none d-md-block">Account</span>
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

  inItem2.innerHTML =html2;
  inItem.innerHTML = html;

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
            <i class="now-ui-icons design_app"></i>
            <p>panel de control</p>
          </a>`;
        }
        if(adminUser!=null) {
            adminUser.innerHTML = `  <a href="./dashboard.php">
            <i class="now-ui-icons design_app"></i>
            <p>panel de control</p>
          </a>`;
        }
        
    }

}
function updateState(id){
    url = "http://localhost/webservice/Update.php?case=actividad&id="+id;
    fetch(url)
    .then(response => response.json());
}

//------------------EVENTOS LOGIN USUARIOS PETICION LOGIN-------------------- 

function eventLogin(){
    
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const login = document.querySelector("#login");

    email.addEventListener('blur', validarFormulario);
    pass.addEventListener('blur', validarFormulario);
    login.addEventListener("click",busqueUsuario);

}

function busqueUsuario(e) {
    e.preventDefault();

     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.className += " spinner-grow text-muted";
   

     // Ocultar Spinner y enviar informacion
     setTimeout( () => {
        spinner.classList.remove("spinner-grow");
        
        url = "http://localhost/webservice/Search.php?case=login";
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
    
    if(data["response"]!=="No found user"){
        
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
        alert("Credenciales incorrectas");
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


}
function validarEmail(campo){

    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
        
         campo.classList.add('is-valid');
         campo.classList.remove('is-invalid');
    } else {
        
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
       
       url = "http://localhost/webservice/insert.php?case=usuarios";
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
    url = "http://localhost/webservice/querys.php?case=municipios";
    fetch(url)
    .then(response => response.json())
    .then(data => setMuni(data.response));
}
function getDepartamentos() {
    url = "http://localhost/webservice/querys.php?case=departamentos";
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


}

function editCredentials(){
    const emailEdit = document.querySelector("#emailupd");
    const passEditAnt = document.querySelector("passanti");
    const passEditNew = document.querySelector("passnew");

   

}
function getPqrs() {
    url = "http://localhost/Webservice/search.php?case=usuarios&&searchId="+JSON.parse(localStorage.getItem('usuario')).id;

    fetch(url)
    .then(response => response.json())
    .then(data => setDataUser(data.response));
}
function getUser(){
    url = "http://localhost/Webservice/search.php?case=pqrs&searchId="+JSON.parse(localStorage.getItem('usuario')).id;
    
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
}

// ---------------------------EVENTOS INDEX, PETICION ESTADO ACTIVIDAD-----------------------

function eventIndex(){
  

}

// ---------------------------EVENTOS DASHBOARD, PETICION ESTADO ACTIVIDAD-----------------------

function eventDashboard(){
   
  getPqrsActive();
  getLastPeditor();
}

function getPqrsActive(){
    url = "http://localhost/WEbservice/querys.php?case=pqrs";
    
    fetch(url)
    .then(response => response.json())
    .then(data => setDataPqrsAll(data.response));


}

function getLastPeditor(){
    url = "http://localhost/Webservice/querys.php?case=pedidos";
    
    fetch(url)
    .then(response => response.json())
    .then(data => setDataOrdersAll(data.response));

}


function setDataOrdersAll(allOrders){

    html = ""
    if(allOrders.length> 0 || !allOrders =="Error"){
        
        allOrders.forEach(element => {
            

            html+=`
            <tr>
            <td>
            ${element.usuario}
            </td>
            <td>
            ${element.cantidad_productos}
            </td>
            <td>
            ${element.fecha_pedido}
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
    for(let i = 0; i < allPqrs.length; i++){

        if(allPqrs[i].estado=="Activo"){
        html+=`<tr>
        <td>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" >
              <span class="form-check-sign"></span>
            </label>
          </div>
        </td>
        <td class="text-left"><span style="font-weight: bold">${allPqrs[i].usuario}</span> ${allPqrs[i].detalle}<br><span style="color:red">${allPqrs[i].razon}</span></td>
        <td class="td-actions text-right">
          <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
            <i class="now-ui-icons ui-2_settings-90"></i>
          </button>
          <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </button>
        </td>
      </tr>`;
    }else{
        html+=` <p style="font-weight: bold">Sin Pqrs</p> `
    }
       
    }
    tablePqrs.innerHTML = html;
    }
}