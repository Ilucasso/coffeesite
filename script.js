console.log('Script JS carregado!');
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});