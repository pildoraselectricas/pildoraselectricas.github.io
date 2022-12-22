
 function valor1() {
    var checkBox = document.getElementById("myCheck");
  
    if (checkBox.checked == true){
        hallarX.style.display = "block";
 
      } else {
        hallarX.style.display = "none";

      }
    }
 
    function valor2() {
        var checkBox = document.getElementById("myCheck2");
            
        if (checkBox.checked == true){
            hallarY.style.display = "block";
     
          } else {
            hallarY.style.display = "none";
    
          }
        }



function limpiar() {
    document.getElementById('escaladoAnalogico').reset();  
    document.getElementById('bitplc').innerHTM =''; 
    document.getElementById('vmax').innerHTM= ''; 
    document.getElementById('vmin').innerHTM= ''; 

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";

    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    myCheck.checked = false;
    myCheck2.checked = false;
}


function calcular(){
    var bitPlc = parseFloat(document.getElementById('bitplc').value,10);
    var vMax = parseFloat(document.getElementById('vmax').value,10);
    var vMin = parseFloat(document.getElementById('vmin').value,10);
    var escmax = parseFloat(document.getElementById('escMax').value,10);
    var escmin = parseFloat(document.getElementById('escMin').value,10);

    var haX = parseFloat(document.getElementById('hallarX').value,10);
    var haY = parseFloat(document.getElementById('hallarY').value,10);

    var rVmax = Math.pow(2, bitPlc);
    var rbitPLC = vMax / rVmax;
    var rVmin = ( rbitPLC * vMin ) / vMax;

    var pendiente = (escmax - escmin) / (rVmax - rVmin );
    var b = escmin - ( ( (escmax-escmin)/(rVmax / rVmin) ) * rVmin );

    var rHallarY = ( ( ( escmax - escmin ) / ( rVmax - rVmin ) ) * haX ) + b;
    var rHallarX = ( ( haY - b ) / ( ( escmax - escmin ) / ( rVmax - rVmin ) ) );
 
    
    document.getElementById('resultBit').innerHTML =  rbitPLC.toFixed(4);
    document.getElementById('resultVmax').innerHTML =  rVmax.toFixed(4);
    document.getElementById('resultVmin').innerHTML =  rVmin.toFixed(4);
    document.getElementById('resultPendiente').innerHTML =  pendiente.toFixed(4);
    document.getElementById('resultB').innerHTML =  b.toFixed(4);

    document.getElementById('resultX').innerHTML =  rHallarX.toFixed(4);
    document.getElementById('resultY').innerHTML =  rHallarY.toFixed(4);
 
    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";
   
}



   

    function validar(){
        
          var valor = document.getElementById('bitplc').value;
          var valor2 = document.getElementById('vmax').value;
          var valor3 = document.getElementById('vmin').value;
          var valor4 = document.getElementById('frecuencia').value;
          
          
          if( valor == null || valor.length == 0) {
            alert('Error, rellena el campo ');
          return false;
          }

          if( valor2 == null || valor2.length == 0) {
            alert('Error, rellena el campo ');
          return false;
          }

          if( valor3 == null || valor3.length == 0) {
            alert('Error, rellena el campo ');
          return false;
          }

          if( valor4 == null || valor4.length == 0) {
            alert('Error, rellena el campo ');
          return false;
          }

          if(!registro.checked ){
            alert('Debe seleccionar una de las dos casillas');
            return false;
          }
    }
        

   
        