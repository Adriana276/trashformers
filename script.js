// Función para mostrar la sección seleccionada
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

// Mostrar "Team" por defecto
document.addEventListener("DOMContentLoaded", () => {
  showSection("team");
});