window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".mobile-menu-icon");
  const coverD = document.querySelector(".cover-dark");
  menuBtn.addEventListener("click", () => {
    coverD.classList.toggle("nom");
  });
});
