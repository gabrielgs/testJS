//Función para mostrar la palabra
function showWord() {
  var $inputNumber = document.getElementById('inputNumber'); //Obtener el input
  var $word = document.getElementById('word'); //Obtener el elemento p de html con el id word
  var $boxWord = document.getElementById('boxWord'); //Obtener el article con el id boxWord

//Otener el valor de la caja input y convertirla a numero
  var numbers = parseInt($inputNumber.value);
//Obtener la palabra llamando a la función getWord y pasandole los numeros
  var  myWord= getWord(numbers);

  $word.innerHTML = myWord; //Insertar la palabra en el elemento p
  $boxWord.classList.add('show-word');//Agregar la clase show-word de css para mostrar la palabra.
}

//Función para agregar el evento click al boton convertir
function load() {
 var $btnConvert = document.getElementById('btnConvert');

 $btnConvert.addEventListener('click', showWord, false);
}

//Esperar a que el documento HTML este completamente cargado.
document.addEventListener('DOMContentLoaded', load, false);

//Función para obtener la palabra
function getWord(numberString) {
  var letters = ["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"];
  var string = [];
  var word = "";

// Ralizar la iteracion hasta que nuestra cadena numerica
// llegue a 7
  while ( numberString > 7 ) {
    // Iterar sobre las letras que se pueden utilizar
    // para formar nuestra palabra letra por letra.
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      var index = i;
      // Realizar resta y division para encontrar si el index
      // y la letra asociada a ese index son los
      // correctos
      var sub = numberString - index;
      var div = sub/37;

      // Comprobar que el resultado de la division
      // sea entero
      if ( isInteger(div) ) {
        // Si el resultado es entero asignar el valor
        // a la variable numberString lo que significa
        // que se encontró la letra.
        numberString = div;
        // Agregar la letra al principio del array string
        string.unshift(letter);
        break; //Terminar el ciclo ya que se encontró la letra correcta
      }
    }
  }

  // Unir las letras encontradas para formar la palabra y
  // retornar la palabra
  word = string.join("");
  return word;
}

// Función para comprobar que el numero es un entero
function isInteger(number) {
  return number % 1 === 0;
}


getWord(667734139064); // "correct"