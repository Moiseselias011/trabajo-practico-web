document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente");

  const imagenes = [
    "imagenes/slide1.jpg.jpg",
    "imagenes/slide2.jpg.jpg",
    "imagenes/slide3.jpg.jpg",
  ];

  let index = 0;
  const img = document.getElementById("carouselImage");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  function mostrar() {
    img.src = imagenes[index];
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    mostrar();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % imagenes.length;
    mostrar();
  });

  setInterval(() => {
    index = (index + 1) % imagenes.length;
    mostrar();
  }, 3000);

  mostrar();
});