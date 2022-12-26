function limpiar() {
    document.getElementById('FactorPotencia').reset();  
    document.getElementById('coseno').innerHTM =''; 
    document.getElementById('tangente').innerHTM= ''; 
    document.getElementById('suministro').innerHTM= ''; 

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "none";

    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    myCheck.checked = false;
    myCheck2.checked = false;
}


function calcular(){
    var v = parseFloat(document.getElementById('voltaje').value,10);
    var a = parseFloat(document.getElementById('corriente').value,10);
    var pa = parseFloat(document.getElementById('pactiva').value,10);

    var sumi = parseInt(document.getElementById('suministro').value);

    var fpUte = document.getElementById("myCheck");
    var fpAdd = document.getElementById("myCheck2");
    var fpAdd2 = parseFloat(document.getElementById('agregado').value,10);

    var fpAjuste;
    var tgAjuste;
    var sum;
    var sumValue;

    if(sumi == 1){
      sum = 'Monofásico';
      sumValue = 1;
    } else if(sumi == 2){
      sum = 'Trifásico';
      sumValue = Math.sqrt(3);
    }


    if (fpUte.checked == true){
        fpAjuste = 0.92;
        tgAjuste = Math.tan(Math.acos(fpAjuste));
    } else if(fpAdd.checked == true){
        tgAjuste = Math.tan(Math.acos(fpAdd2));
    }

    var fp = pa / (v * a * sumValue);
    var tg = Math.tan(Math.acos(fp));
    var seno = Math.sin(Math.acos(fp));
    var qcondensador = pa*(tg-tgAjuste);
    var qinicio = v * a * seno *  sumValue;
    
    document.getElementById('coseno').innerHTML =  fp.toFixed(4);
    document.getElementById('tangente').innerHTML =  tg.toFixed(4);
    document.getElementById('qcondensador').innerHTML =  qcondensador.toFixed(4);
    document.getElementById('suministroT').innerHTML = sum;
    document.getElementById('qInicial').innerHTML = qinicio.toFixed(4);

    var caja = document.getElementById("mostrar");
    mostrar.style.display = "block";
    
    
}

function valorute() {
    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBoxText2 = document.getElementById("myCheck2Text");

    if (checkBox.checked == true){
        text.style.display = "block";
        myCheck2.style.display = "none";
        myCheck2Text.style.display = "none";
      } else {
        text.style.display = "none";
        myCheck2.style.display = "block";
        myCheck2Text.style.display = "block";
      }
    }

    function valor() {
        var checkBox = document.getElementById("myCheck2");
        var checkBox2 = document.getElementById("myCheck");
        var checkBoxText = document.getElementById("myCheckText");
    
        if (checkBox.checked == true){
            agregado.style.display = "block";
            myCheck.style.display = "none";
            myCheckText.style.display = "none";
          } else {
            agregado.style.display = "none";
            myCheck.style.display = "block";
            myCheckText.style.display = "block";
          }
        }

  function validar(){
        
          var valor = document.getElementById('voltaje').value;
          var valor2 = document.getElementById('corriente').value;
          var valor3 = document.getElementById('pactiva').value;
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
        

     // Typeado
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
};
 
        

   
        
