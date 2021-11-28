window.addEventListener("DOMContentLoaded", () => {
  // DOMの取得
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".mobile-menu-icon");
  const coverD = document.querySelector(".cover-dark");
  const coverDContainer = document.querySelector(".cover-dark-container");
  const h2s = document.querySelectorAll("h2");
  const h3s = document.querySelectorAll("h3");
  const coverLogo = document.querySelector(".cover-logo");

  const getHTML = (array) => {
    array.forEach((arr) => {
      arr.classList.toggle("slideIn");
    });
  };

  // mobile menu用：addEventListenerのイベント発火条件を決める
  // const getEventType = () => {
  //   const isTouchCapable =
  //     "ontouchstart" in window ||
  //     (window.DocumentTouch &&
  //       document instanceof
  //         window.DocumentTouch.navigator.maxTouchPoints >
  //         0) ||
  //     window.navigator.msMaxTouchPoints > 0;
  //   return isTouchCapable ? "touchstart" : "click";
  // };

  // addEventListenerのイベント発火条件を定義
  // const eventType = getEventType();
  // console.log(coverDContainer);

  menuBtn.addEventListener("click", () => {
    // coverDContainer.classList.toggle("nom");
    coverLogo.classList.toggle("slideIn");
    menuBtn.classList.toggle("menu-open");
    coverD.classList.toggle("nom");
    getHTML(h2s);
    getHTML(h3s);
  });
});
