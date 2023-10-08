// Vänta på att HTML-dokumentet laddas och kör sedan koden
document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla tumnaglar och element för popup-fönstret
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const popupOverlay = document.getElementById("popup-overlay");
    const popupClose = document.getElementById("popup-close");
    const popupImage = document.querySelector(".popup-image");
  
    // Visa huvudbilden i popup-fönstret när en tumnagel klickas
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        popupImage.src = thumbnail.src;
        popupImage.alt = thumbnail.alt;
        popupOverlay.style.display = "flex";
      });
    });
  
    // Dölj popup-fönstret när stängknappen klickas
    popupClose.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  });
  