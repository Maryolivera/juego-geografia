let correctas = 0;
let incorrectas = 0;
let tiempoInicio;
let numeroPregunta = 1;
const totalPreguntas = 10;

function jugar() {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("pantalla-resultados").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "flex";

  correctas = 0;
  incorrectas = 0;
  numeroPregunta = 1;
  tiempoInicio = Date.now();

  mostrarPregunta();
}

function mostrarPregunta() {
  if (numeroPregunta > totalPreguntas) {
    mostrarPantallaResultados();
    return;
  }

  // Simulación pregunta actual
  document.getElementById("progreso").textContent = `🟡 Pregunta ${numeroPregunta} de ${totalPreguntas}`;
  document.getElementById("pregunta").textContent = `¿Pregunta número ${numeroPregunta}? (Simulada)`;

  numeroPregunta++;
}

function responder(esCorrecta) {
  if (esCorrecta) {
    correctas++;
  } else {
    incorrectas++;
  }

  mostrarPregunta();
}

function mostrarPantallaResultados() {
  const tiempoFinal = Date.now();
  const tiempoTotal = Math.floor((tiempoFinal - tiempoInicio) / 1000);
  const promedio = (tiempoTotal / totalPreguntas).toFixed(1);

  document.getElementById("resultado-correctas").textContent = correctas;
  document.getElementById("resultado-incorrectas").textContent = incorrectas;
  document.getElementById("resultado-tiempo-total").textContent = tiempoTotal;
  document.getElementById("resultado-tiempo-promedio").textContent = promedio;

  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-resultados").style.display = "flex";
}

function reiniciarJuego() {
  jugar();
}

function mostrarRanking() {
  alert("Aquí se mostrará el ranking en el futuro 🏆");
}

// Mostrar pantalla inicial al cargar
window.onload = function () {
  document.getElementById("pantalla-inicio").style.display = "flex";
};

    

      