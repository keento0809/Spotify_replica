window.addEventListener("DOMContentLoaded", () => {
  // Get DOM
  const menuBtn = document.querySelector(".mobile-menu-icon");
  const additionalDarkCover = document.querySelector(".additional-darkcover");
  const darkCover = document.querySelector(".cover-dark");
  const h2s = document.querySelectorAll("h2");
  const h3s = document.querySelectorAll("h3");
  const coverLogo = document.querySelector(".cover-logo");

  // Build out function
  const getHTML = (array) => {
    array.forEach((arr) => {
      arr.classList.toggle("slideIn");
    });
  };

  const slideIn = () => {
    coverLogo.classList.toggle("slideIn");
  };

  const menuOpen = () => {
    menuBtn.classList.toggle("menu-open");
  };

  const changeDarkCover = () => {
    darkCover.classList.toggle("nom");
  };

  const changeAdditionalDarkCover = () => {
    additionalDarkCover.classList.toggle("nom-second");
  };

  // Hook up the event
  menuBtn.addEventListener("click", () => {
    coverLogo.classList.toggle("slideIn");
    menuBtn.classList.toggle("menu-open");
    darkCover.classList.toggle("nom");
    additionalDarkCover.classList.toggle("nom-second");
    getHTML(h2s);
    getHTML(h3s);
  });
});
