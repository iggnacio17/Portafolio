function playGame() {
  document.getElementById("project-section").scrollIntoView({ behavior: "smooth" });
}

function goContacto() {
  document.getElementById("contacto-section").scrollIntoView({ behavior: "smooth" });
}

function subirGame() {
  document.getElementById("arriba-Section").scrollIntoView({ behavior: "smooth" });
}

function viewDescription(id) {
  const desc = document.getElementById(id);
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}

function exitGame() {
  alert("Saliendo del juego...");
}
