const piezas = document.querySelectorAll(".pieza");
const contenedor = document.querySelector(".container");

// activar piezas una por una
piezas.forEach((pieza, index) => {
  setTimeout(() => {
    pieza.classList.add("activa");
  }, index * 700);
});

// efecto final
setTimeout(() => {
  contenedor.classList.add("final");
}, 3500);