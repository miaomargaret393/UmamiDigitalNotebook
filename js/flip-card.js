// Finds every flip-card on the page (Artistic gallery, Photos Album, etc.)
// and makes clicking it flip between front and back.
document.querySelectorAll('.flip-card').forEach(function (card) {

  card.addEventListener('click', function () {
    card.classList.toggle('flipped');
  });

});