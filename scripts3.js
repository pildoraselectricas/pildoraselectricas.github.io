
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
    document.getElementById('amax').innerHTM= ''; 
    document.getElementById('amin').innerHTM= ''; 

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";

    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    myCheck.checked = false;
    myCheck2.checked = false;
}


function calcular(){
    var bitPlc = parseFloat(document.getElementById('bitplc').value,10);
    var aMax = parseFloat(document.getElementById('amax').value,10);
    var aMin = parseFloat(document.getElementById('amin').value,10);
    var escmax = parseFloat(document.getElementById('escMax').value,10);
    var escmin = parseFloat(document.getElementById('escMin').value,10);

    var haX = parseFloat(document.getElementById('hallarX').value,10);
    var haY = parseFloat(document.getElementById('hallarY').value,10);

    var rAmax = Math.pow(2, bitPlc);
    var rbitPLC = aMax / rAmax;
    var rAmin = ( rbitPLC * aMin ) / aMax;

    var pendiente = (escmax - escmin) / (aMax - aMin );
    var b = escmin - (pendiente * aMin) ;

    var rHallarY = (  pendiente  * haX ) + b;
    var rHallarX = ( ( haY - b ) /  pendiente );
 
    
    document.getElementById('resultBit').innerHTML =  rbitPLC.toFixed(4);
    document.getElementById('resultAmax').innerHTML =  rAmax.toFixed(4);
    document.getElementById('resultAmin').innerHTML =  rAmin.toFixed(4);
    document.getElementById('resultPendiente').innerHTML =  pendiente.toFixed(4);
    document.getElementById('resultB').innerHTML =  b.toFixed(4);

    document.getElementById('resultX').innerHTML =  rHallarX.toFixed(4);
    document.getElementById('resultY').innerHTML =  rHallarY.toFixed(4);
 
    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";
   
}



   

    function validar(){
        
          var valor = document.getElementById('bitplc').value;
          var valor2 = document.getElementById('amax').value;
          var valor3 = document.getElementById('amin').value;
          
          
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


          if(!registro.checked ){
            alert('Debe seleccionar una de las dos casillas');
            return false;
          }
    }
        

   
        