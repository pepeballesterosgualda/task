// ahorcado.js

// Lista de palabras en español de 7 letras
const palabras = ["abeja", "águila", "alce", "alondra", "alpaca", "anaconda", "anguila", "ardilla", "avestruz", "avispa", "ballena", "bisonte", "búfalo", "búho", "burro", "caballo", "cabra", "cachorro", "cangrejo", "caracol", "cebra", "cerdo", "chimpance", "cisne", "cocodrilo", "conejo", "cuervo", "delfín", "elefante", "escarabajo", "escorpión", "esponja", "foca", "gallina", "gato", "gaviota", "gorila", "hámster", "hiena", "hipopótamo", "iguana", "jirafa", "koala", "langosta", "león", "lobo", "loro", "medusa", "mono", "mosquito", "oso", "oveja", "pájaro", "paloma", "panda", "pantera", "pato", "pavo", "perdiz", "perro", "pingüino", "pollo", "pulpo", "rana", "ratón", "rinoceronte", "serpiente", "tiburón", "tigre", "tortuga", "tucán", "vaca", "venado", "zorro","abogado", "actor", "agricultor", "arquitecto", "astrónomo", "bailarín", "biólogo", "camarero", "chef", "científico", "contador", "diseñador", "doctor", "economista", "electricista", "enfermero", "escritor", "farmacéutico", "fotógrafo", "ingeniero", "jardinero", "maestro", "mecánico", "médico", "músico", "piloto", "periodista", "profesor", "psicólogo", "repartidor", "secretario", "traductor", "veterinario", "abandonar", "aceptar", "acelerar", "acompañar", "aconsejar", "actuar", "admirar", "afirmar", "agradecer", "ahorrar", "alcanzar", "alegrar", "almorzar", "amar", "aplaudir", "aprender", "aprobar", "arrancar", "asistir", "ayudar", "bailar", "beber", "buscar", "caminar", "cantar", "celebrar", "cocinar", "comenzar", "comer", "compartir", "comprender", "conducir", "conectar", "conocer", "conquistar", "construir", "contar", "correr", "crear", "creer", "cuidar", "cumplir", "dar", "debatir", "decidir", "dejar", "demostrar", "desayunar", "descansar", "descubrir", "desear", "dirigir", "disfrutar", "dormir", "ducharse", "empezar", "enseñar", "entrar", "escuchar", "escribir", "esperar", "estudiar", "existir", "explicar", "explorar", "fabricar", "fumar", "ganar", "gritar", "hablar", "hacer", "jugar", "leer", "limpiar", "llamar", "llegar", "luchar", "mantener", "mirar", "nadar", "navegar", "oír", "olvidar", "opinar", "pagar", "pasear", "pensar", "perder", "practicar", "preparar", "probar", "prometer", "proteger", "quedar", "querer", "recoger", "recordar", "regresar", "reír", "responder", "saltar", "seguir", "sentir", "soñar", "sugerir", "terminar", "tomar", "trabajar", "viajar", "visitar", "vivir", "volar","manzana", "plátano", "naranja", "uva", "fresa", "sandía", "melón", "pera", "piña", "mango", "kiwi", "cereza", "ciruela", "albaricoque", "papaya", "pomelo", "limón", "mandarina", "frambuesa", "arándano", "moras", "meloncillo", "granada", "higo", "coco", "aguacate", "guayaba", "maracuyá", "mamey", "chirimoya", "zapote", "durazno", "melocotón", "nectarina", "albóndiga", "pollo", "carne", "pescado", "cerdo", "ternera", "conejo", "cordero", "filete", "chuleta", "chuletón", "salchicha", "hamburguesa", "bacon", "jamón", "queso", "yogur", "leche", "crema", "mantequilla", "huevos", "harina", "arroz", "pan", "pasta", "azúcar", "sal", "aceite", "vinagre", "mostaza", "mayonesa", "ketchup", "salsa de soja", "salsa barbacoa", "miel", "mermelada", "chocolate", "café", "té", "zumo", "refresco", "cerveza", "vino", "agua", "alegre", "alto", "amable", "amplio", "antiguo", "apasionado", "atento", "bajo", "bello", "brillante", "caliente", "cálido", "cansado", "contento", "delgado", "dulce", "encantador", "energético", "fresco", "fuerte", "generoso", "grande", "hermoso", "honesto", "inteligente", "joven", "largo", "lindo", "listo", "maduro", "nuevo", "pobre", "rico", "sabroso", "sano", "silencioso", "simpático", "triste", "valiente", "viejo", "bueno", "malo", "pequeño", "rápido", "lento", "débil", "gordo", "enérgico", "gracioso", "sincero", "amoroso", "hábil", "orgulloso", "cuidadoso", "perezoso", "asombroso", "tranquilo", "divertido", "especial", "sensible", "romántico", "responsable", "determinado", "amoroso", "amigable", "interesante", "sorprendente", "encantador", "seductor", "sagrado", "gracioso", "poderoso", "extraordinario", "intenso", "resplandeciente", "agradable", "innovador", "moderno", "eterno", "pintoresco", "apasionante", "bravo", "bravo", "temible", "bravo", "vivaz", "mágico", "gentil", "delicado", "afectuoso", "amado", "bendito", "admirable", "seguro", "sofisticado", "alegre", "alta", "amable", "amplia", "antigua", "apasionada", "atenta", "baja", "bella", "brillante", "caliente", "cálida", "cansada", "contenta", "delgada", "dulce", "encantadora", "energética", "fresca", "fuerte", "generosa", "grande", "hermosa", "honesta", "inteligente", "joven", "larga", "linda", "lista", "madura", "nueva", "pobre", "rica", "sabrosa", "sana", "silenciosa", "simpática", "triste", "valiente", "vieja", "buena", "mala", "pequeña", "rápida", "lenta", "débil", "gorda", "enérgica", "graciosa", "sincera", "amorosa", "hábil", "orgullosa", "cuidadosa", "perezosa", "asombrosa", "tranquila", "divertida", "especial", "sensible", "romántica", "responsable", "determinada", "amorosa", "amigable", "interesante", "sorprendente", "encantadora", "seductora", "sagrada", "graciosa", "poderosa", "extraordinaria", "intensa", "resplandeciente", "agradable", "innovadora", "moderna", "eterna", "pintoresca", "apasionante", "brava", "brava", "temible", "brava", "vivaz", "mágica", "gentil", "delicada", "afectuosa", "amada", "bendita", "admirable", "segura", "sofisticada","guitarra", "piano", "violín", "flauta", "saxofón", "trompeta", "batería", "clarinete", "órgano", "acordeón", "arpa", "ukelele", "contrabajo", "oboe", "trombón", "gaita", "sitar", "tambor", "marimba", "fagot", "banjo", "cítara", "timple", "tuba", "triángulo", "teclado", "vibráfono", "bombo", "maracas", "melódica", "pandereta","cuchillo", "tenedor", "cuchara", "espátula", "batidora", "colador", "sartén", "olla", "taza", "plato", "vaso", "tabla", "cucharón", "exprimidor", "mortero", "rallador", "horno", "microondas", "tostadora", "abrelatas", "pelador", "cafetera", "tetera", "mortero", "tamizador", "cortador", "escurridor", "cafetera", "licuadora", "mortero", "colador", "balanza", "brocha", "molinillo", "espumadera", "cucharilla", "batidora", "batidor", "cacerola", "paleta", "chocolatera", "exprimidor", "recipiente", "tapa", "vaporera", "molde", "cortapastas", "picadora", "parrilla", "termómetro", "embudo", "rodillo","martillo", "destornillador", "llave", "alicate", "sierra", "broca", "nivel", "tornillo", "clavo", "cincel", "cutter", "lima", "calibre", "pincel", "metro", "cepillo", "tijeras", "pinzas", "gubia", "soplete", "mazo", "taladro", "serrucho", "espatula", "formón", "escoplo", "tenaza", "atornillador", "lápiz", "regla", "esmeriladora", "compás", "talocha", "cazoleta", "buril", "machete", "escopeta", "rosca", "lámina", "escuadra", "torno", "gato", "grapadora", "pulidora", "biseladora", "lupa", "vibradora", "lija"];

// Palabra aleatoria
let palabraSecreta = "";

// Número de errores
let errores = 0;

// Inicializar el juego
function inicializarJuego() {

  document.getElementById("jugar").disabled = true;
  document.getElementById("letter-input").disabled = false;
  document.getElementById("guess-button").disabled = false;
  //document.getElementById("jugar").disabled = false;

  // Obtener una palabra aleatoria
  palabraSecreta = obtenerPalabraAleatoria();

  // Limpiar el campo de entrada de letras
  document.getElementById("letter-input").value = "";

  // Reiniciar el contador de errores
  errores = 0;

  // Actualizar la visualización de la palabra
  actualizarPalabraDisplay();

  // Reiniciar la visualización del ahorcado
  document.getElementById("hangman").innerHTML = '<img src="hangman_0.png" alt="Ahorcado">';

  // Limpiar la lista de palabras erróneas
  document.getElementById("error-list").innerHTML = "";

  // Limpiar el mensaje
  document.getElementById("message").innerHTML = "";
}

// Obtener una palabra aleatoria de la lista de palabras
function obtenerPalabraAleatoria() {
  const indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

// Actualizar la visualización de la palabra con guiones bajos para las letras no adivinadas
function actualizarPalabraDisplay() {
  const wordDisplay = document.getElementById("word-display");
  wordDisplay.textContent = "";

  for (let i = 0; i < palabraSecreta.length; i++) {
    const letra = palabraSecreta[i];
    const letraSlot = document.createElement("input");
    letraSlot.type = "text";
    letraSlot.classList.add("letter-slot");
    letraSlot.disabled = true;

    if (letra === " ") {
      letraSlot.value = " ";
    } else if (letra === "-") {
      letraSlot.value = "-";
    } else if (letra === ".") {
      letraSlot.value = ".";
    }

    wordDisplay.appendChild(letraSlot);
  }
}

// Actualizar el estado del juego después de cada adivinanza
function actualizarEstadoJuego(letra) {
  if (palabraSecreta.includes(letra)) {
    // La letra está en la palabra secreta
    mostrarLetraAdivinada(letra);

    if (todasLetrasAdivinadas()) {
      // Todas las letras han sido adivinadas
      mostrarMensaje("¡Enhorabuena! Has adivinado la palabra.");
      desactivarInput();
    }
  } else {
    // La letra no está en la palabra secreta
    errores++;
    actualizarAhorcado();
    mostrarError(errores,letra);

    if (errores === 6) {
      // Se alcanzó el límite de errores
      mostrarMensaje("¡Has perdido! La palabra secreta era: " + palabraSecreta);
      desactivarInput();
      
    }
  }
}

// Mostrar una letra adivinada en la visualización de la palabra
function mostrarLetraAdivinada(letra) {
  const letraSlots = document.getElementsByClassName("letter-slot");
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta[i] === letra) {
      letraSlots[i].value = letra;
    }
  }
}

// Verificar si todas las letras han sido adivinadas
function todasLetrasAdivinadas() {
  const letraSlots = document.getElementsByClassName("letter-slot");
  for (let i = 0; i < letraSlots.length; i++) {
    if (letraSlots[i].value === "") {
      return false;
    }
  }
  return true;
}

// Actualizar la visualización del ahorcado
function actualizarAhorcado() {
  const hangmanImage = document.getElementById("hangman").getElementsByTagName("img")[0];
  hangmanImage.src = "hangman_" + errores + ".png";
}

// Mostrar una letra errónea en la lista de errores
function mostrarError(num_error, letra) {
  const errorList = document.getElementById("error-list");
  const errorItem = document.createElement("li");
  errorItem.textContent = num_error+': '+letra;
  errorList.appendChild(errorItem);
}

// Mostrar un mensaje en el juego
function mostrarMensaje(mensaje) {
  document.getElementById("message").textContent = mensaje;
}

// Desactivar el campo de entrada y el botón "Adivinar"
function desactivarInput() {
  document.getElementById("letter-input").disabled = true;
  document.getElementById("jugar").disabled = false;
  document.getElementById("guess-button").disabled = true;
}

// Evento de carga del DOM
document.addEventListener("DOMContentLoaded", function() {
  inicializarJuego();

  // Escucha el evento de clic en el botón "Adivinar"
  document.getElementById("guess-button").addEventListener("click", function() {
    const letra = document.getElementById("letter-input").value.toLowerCase();
    if (letra) { //&& letra.match(/[a-z]/i)) {
      document.getElementById("letter-input").value = "";
      actualizarEstadoJuego(letra);
    }
  });
  // Escucha el evento de clic en el botón "Jugar otra vez"
  document.getElementById("jugar").addEventListener("click", inicializarJuego);
});
