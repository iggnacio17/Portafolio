function playGame() {
  document.getElementById("project-section").scrollIntoView({ behavior: "smooth" });
}

function subirGame() {
  document.getElementById("arriba-Section").scrollIntoView({ behavior: "smooth" });
}

function viewDescription(id) {
  const desc = document.getElementById(id);
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}

function openOptions() {
  alert("Opciones aún no disponibles.");
}

function exitGame() {
  alert("Saliendo del juego...");
}
