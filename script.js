// ANIMATION DES BOUTONS
document.addEventListener('DOMContentLoaded', () => {
  const boutons = document.querySelectorAll('.btn, button');

  boutons.forEach(bouton => {
    bouton.addEventListener('mouseenter', () => {
      bouton.style.transform = 'scale(1.1)';
    });

    bouton.addEventListener('mouseleave', () => {
      bouton.style.transform = 'scale(1)';
    });
  });
});