window.addEventListener("DOMContentLoaded", () => {
  // DOMの取得
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".mobile-menu-icon");
  const coverD = document.querySelector(".cover-dark");
  const h2s = document.querySelectorAll("h2");
  const h3s = document.querySelectorAll("h3");
  const coverLogo = document.querySelector(".cover-logo");

  const getHTML = (array) => {
    array.forEach((arr) => {
      arr.classList.toggle("slideIn");
    });
  };

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-open");
    coverD.classList.toggle("nom");
    coverLogo.classList.toggle("slideIn");
    getHTML(h2s);
    getHTML(h3s);
  });
});
