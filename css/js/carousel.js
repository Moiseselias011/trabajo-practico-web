
const imagenes = [
  "imagenes/slide1.jpg",
  "imagenes/slide2.jpg",
  "imagenes/slide3.jpg"
];

let index = 0;
const img = document.getElementById('carouselImagenes');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

function mostrar() {
  img.src = imagenes[index];
}

prev.addEventListener('click', () => {
  index = (index - 1 + imagenes.length) % images.length;
  mostrar();
});

next.addEventListener('click', () => {
  index = (index + 1) % imagenes.length;
  mostrar();
});

mostrar();