// Boton subir
const buttonUp = document.getElementById("button-up");

buttonUp.addEventListener("click", scrollUp);
function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 15);
  }
}

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 600) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
