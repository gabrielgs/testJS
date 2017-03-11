// var rect1 = {x: 20, y: 30, width:40, height:11};
// var rect2 = {x: 50, y: 22, width:26, height:36};
// var rect3 = {x: 10, y: 10, width:30, height:20};
// var rect4 = {x: 45, y: 10, width:12, height:4};

//Función que dibuja los rectangulos
function drawRectangle(r1, r2) {
  var canvas = document.getElementById('canvas'); //Obtener canvas

  var ctx = canvas.getContext('2d'); //Que el plano sea de dos dimensiones

  ctx.clearRect(0, 0, canvas.width, canvas.height); //Borrar canvas

  ctx.fillStyle = 'rgba(133, 120, 133, 0.9)'; //Color del rectangulo 1
  ctx.fillRect(r1.x, r1.y, r1.width, r1.height); //Dibujar el rectangulo 1

  ctx.fillStyle = 'rgba(114, 189, 163, 0.5)'; //Color Rectangulo 2
  ctx.fillRect(r2.x, r2.y, r2.width, r2.height); //Dibujar Rectangulo 2
}

function load() {
  var $btnComprobar = document.getElementById('js-btnCheck'); //Obtener boton comprobar
  // Titulo canvas donde se poner si se intersecan o no
  var $titleCanvas = document.getElementById('js-canvasTitle');
  // Contenedor de canvas
  var $containerCanvas = document.getElementById('js-containerCanvas');

  //Agregar el evento click al boton comprobar
  $btnComprobar.addEventListener('click', function() {
    // Declaramos los objetos
    var rect1 = {};
    var rect2 = {};

    //Obtener los valores de los input y convertirlos a numero del rectangulo 2
    rect1.x = parseInt(document.getElementById('js-rect1X').value);
    rect1.y = parseInt(document.getElementById('js-rect1Y').value);
    rect1.width = parseInt(document.getElementById('js-rect1W').value);
    rect1.height = parseInt(document.getElementById('js-rect1H').value);

    // Obtener los valores de los input y convertirlos a numero del rectangulo 2
    rect2.x = parseInt(document.getElementById('js-rect2X').value);
    rect2.y = parseInt(document.getElementById('js-rect2Y').value);
    rect2.width = parseInt(document.getElementById('js-rect2W').value);
    rect2.height = parseInt(document.getElementById('js-rect2H').value);

    //Llamar a la funcion drawRectangle para dibujar los rectangulos;
    drawRectangle(rect1, rect2);

    //Agregar la clase show-rectangulo para mostrar el canvas
    $containerCanvas.classList.add('show-rectangles');

    //Comprobar que la función intersecRec nos devuelva true or false
    if( intersecRec(rect1, rect2) ) {
      // Si devuelve true mostrar
      $titleCanvas.innerHTML = 'Se intersecan'
    }else {
      // Si devuelve false
      $titleCanvas.innerHTML = 'No se intersecan';
    }

  }, false);
}

//Esperar que el docuento HTML este completamente cargado
document.addEventListener('DOMContentLoaded', load, false);

//Función para comprobar si los rectangulos se intersecan o no
function intersecRec(r1, r2) {
  /*** Rectangulo 1 ***/
  var x1 = r1.x; // Valor de x
  // Valor del vertice superior derecho que se calcula
  // sumando el valor de x mas el ancho
  var vsd1 = r1.x + r1.width;
  // Valor del vartice inferior izquierdo
  // que se calcula sumando el valor de y mas el alto
  var vii1 = r1.y + r1.height;
  var y1 = r1.y; // Valor de y

  /*** Rectangulo 2 ***/
  var x2 = r2.x;
  var vsd2 = r2.x + r2.width;
  var vii2 = r2.y + r2.height;
  var y2 = r2.y

  // Para saber si dos rectangulos se intersecan se deben
  // cumplir cuatro condiciones y todas tienen que ser true.
  /*
  1. El vertice superior derecho del rectangulo 1 tiene que ser mayor
     o igual al punto x del rectangulo 2.
  2. El valor en x del rectangulo 1 tiene que ser menor o igual al vertice
     superior derecho del rectangulo 2.
  3. El vertice inferior izquierdo del rectangulo 1 tiene que ser mayor o igual
     al valor en y del rectangulo 2.
  4. El valor en y del rectangulo 1 tiene que ser menor o igual
     el vertice inferior izquierdo del rectangulo 2.
  */
  return (vsd1 >= x2 &&
          x1 <= vsd2 &&
          vii1 >= y2 &&
          y1 <= vii2);
}

// var res = intersecRec(rect1, rect2);
