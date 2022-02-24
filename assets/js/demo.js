
//VARIABLES
let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const baseUrlWebSocketDemo = "http://localhost/webservice/";
const baseUrlPageDemo = "http://localhost/buyme/";

// FUNCIONES
document.addEventListener('DOMContentLoaded',getDataRegisterUser);
document.addEventListener('DOMContentLoaded',getDataRegisterProduct);
document.addEventListener('DOMContentLoaded',getDataSending);
getActiveUser();

// SE VUELVE A EJECUTAR PETICIONES DESPUES DE UNOS SEGUNDOS
setInterval( () => {
  
  getActiveUser(); 
  console.log("recarga...")
},10000);
setInterval( () => {
  getDataSending();
  getDataRegisterProduct();
  console.log("recarga...")
},60000*5);


demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

 

  initDashboardPageCharts: function() {
    //COLOR LINEA PRINCIPAL
    chartColor = "rgba(0,0,0,.3)";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: 0,
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
    
    
    
    

    
  }
 
};

function getActiveUser() {

  url = baseUrlWebSocketDemo+"querys.php?case=activos";
  fetch(url)
  .then(response => response.json())
  .then(data => 
    document.querySelector(".chart-area").innerHTML =`<div class=''><h1 class="row justify-content-center align-items-center minh-100">${data.response[0].cuenta}</h1></div>`)

  
}

function getDataSending() {
  url = baseUrlWebSocketDemo+"querys.php?case=enviosProductos";
  fetch(url)
  .then(response => response.json())
  .then(data => saveDataSend(data.response));
 
}

function getDataRegisterProduct() {
  url = baseUrlWebSocketDemo+"querys.php?case=registradosProductos";
  fetch(url)
  .then(response => response.json())
  .then(data => saveDataProduct(data.response));
 
}

function getDataRegisterUser() {
  url = baseUrlWebSocketDemo+"querys.php?case=registradosUsuarios";
  fetch(url)
  .then(response => response.json())
  .then(data => saveDataUser(data.response));
 
}

function saveDataSend(data) {
  
  //Recorrer data de api con fecha de registrados y ponerlos en la grafica
 
let valores = [];
let save = false;
let mes = 0;
//  console.log(Object.keys(data[0])[0] == 1)
 for (let i = 1; i <= 12;i++){

   for (let m = 0; m <data.length;m++){
     if (Object.keys(data[m])[0] == i) {
       valores[mes] = parseInt(Object.values(data[m])[0]);
       save = true;
     }
   }
   if(!save){
     valores[mes] = 0;
   }
   mes+=1; 
   save = false;
 }


 var ctx = document.getElementById('bigDashboardChart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    
 
 

    var cardStatsMiniLineColor = "#fff",
      cardStatsMiniDotColor = "#fff";

    


    ctx = document.getElementById('lineChartExampleWithNumbersAndGrid').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#18ce0f');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB('#18ce0f', 0.4));

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: meses,
        datasets: [{
          label: "Ventas",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: valores
        }]
      },
      options: gradientChartOptionsConfigurationWithNumbersAndGrid
    });

    
}




function saveDataProduct(data) {
  
   //Recorrer data de api con fecha de registrados y ponerlos en la grafica
  
 let valores = [];
 let save = false;
 let mes = 0;
//  console.log(Object.keys(data[0])[0] == 1)
  for (let i = 1; i <= 12;i++){

    for (let m = 0; m <data.length;m++){
      if (Object.keys(data[m])[0] == i) {
        valores[mes] = parseInt(Object.values(data[m])[0]);
        save = true;
      }
    }
    if(!save){
      valores[mes] = 0;
    }
    mes+=1; 
    save = false;
  }


  ctx = document.getElementById('lineChartExampleWithNumbersAndGrid').getContext("2d");
  
  var e = document.getElementById("barChartSimpleGradientsNumbers").getContext("2d");

  gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
  gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));

  var a = {
    type: "bar",
    data: {
      labels: meses,
      datasets: [{
        label: "Total",
        backgroundColor: "#72E27C",
        borderColor: "#2CA8FF",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#2CA8FF",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: valores
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          gridLines: 0,
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    }
  };
  var viewsChart = new Chart(e, a);
}

function saveDataUser(data) {

  //Recorrer data de api con fecha de registrados y ponerlos en la grafica
  
 let valores = [];
 let save = false;
 let mes = 0;
//  console.log(Object.keys(data[0])[0] == 1)
  for (let i = 1; i <= 12;i++){

    for (let m = 0; m <data.length;m++){
      if (Object.keys(data[m])[0] == i) {
        valores[mes] = parseInt(Object.values(data[m])[0]);
        save = true;
      }
    }
    if(!save){
      valores[mes] = 0;
    }
    mes+=1; 
    save = false;
  }
  

  var ctx = document.getElementById('bigDashboardChart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    

    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: meses,
        
        datasets: [{
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#1e3d60",
          //BACKGROUND POINT LINEAL PRINCIPAL
          pointHoverBackgroundColor: "#FF7A00",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          // DATOS DE GRAFICA

          data: valores
        }]
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
          position: "bottom",
          fillStyle: "#FFF",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              //COLOR LETTER LATERAL
              fontColor: "white",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10
            },
            gridLines: {
              drawTicks: true,
              drawBorder: false,
              display: true,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent"
            }

          }],
          xAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              display: false,

            },
            ticks: {
              padding: 10,
              //COLOR LETTER INFERIOR
              fontColor: "white",
              fontStyle: "bold"
            }
          }]
        }
      }
    });

  
}

