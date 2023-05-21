// script.js

const palabras = ['ampliar', 'bailar', 'cerrar', 'correr', 'cantar', 'dibujar', 'escalar', 'ganar', 'jugar', 'mirar'];

let palabraSeleccionada = '';
let letrasAdivinadas = [];
let errores = 0;

const maxErrores = 5;

const wordDisplay = document.getElementById('word-display');
const letterInput = document.getElementById('letter-input');
const guessButton = document.getElementById('guess-button');
const hangman = document.getElementById('hangman');
const errorList = document.getElementById('error-list');
const message = document.getElementById('message');

function seleccionarPalabra() {
  const indice = Math.floor(Math.random() * palabras.length);
  palabraSeleccionada = palabras[indice];
}

function inicializarJuego() {
  seleccionarPalabra();
  letrasAdivinadas = Array(palabraSeleccionada.length).fill('_');
  errores = 0;
  errorList.innerHTML = '';
  hangman.innerHTML = '<img src="hangman_0.png" alt="Ahorcado">';
  mostrarPalabra();
  letterInput.disabled = false;
  guessButton.disabled = false;
  message.textContent = '';
}

function mostrarPalabra() {
  wordDisplay.textContent = letrasAdivinadas.join(' ');
}

function actualizarEstadoJuego(letra) {
  if (palabraSeleccionada.includes(letra)) {
    for (let i = 0; i < palabraSeleccionada.length; i++) {
      if (palabraSeleccionada[i] === letra) {
        letrasAdivinadas[i] = letra;
      }
    }
    mostrarPalabra();
    if (!letrasAdivinadas.includes('_')) {
      message.textContent = '¡Enhorabuena! Has adivinado la palabra correctamente.';
      letterInput.disabled = true;
      guessButton.disabled = true;
    }
  } else {
    errores++;
    const imagenSrc = `hangman_${errores}.png`;
    hangman.innerHTML = `<img src="${imagenSrc}" alt="Ahorcado">`;
    errorList.innerHTML += `<li>${letra}</li>`;
    if (errores === maxErrores) {
      message.textContent = '¡Has perdido! La palabra era: ' + palabraSeleccionada;
      letterInput.disabled = true;
      guessButton.disabled = true;
    }
  }
}

guessButton.addEventListener('click', () => {
  const letra = letterInput.value.toLowerCase();
  if (letra && letra.match(/[a-z]/i)) {
    letterInput.value = '';
    actualizarEstadoJuego(letra);
  }
});

inicializarJuego();
