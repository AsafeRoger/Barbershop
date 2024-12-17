function toggleMenu() {
  const menu = document.querySelector('.menu');
  const bars = document.querySelectorAll('.bar');

  // Alterna a visibilidade do menu
  menu.classList.toggle('open');

  // Alterna o estilo das barras do ícone de hambúrguer (transformação para "X")
  bars[0].classList.toggle('bar-1');
  bars[1].classList.toggle('bar-2');
  bars[2].classList.toggle('bar-3');
}
