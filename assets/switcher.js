document.addEventListener('DOMContentLoaded', function () {
  var switcher = document.querySelector('.switcher'),
    chessboards = document.querySelectorAll('.chessBoard'),
    hidden = 1;

  switcher.addEventListener('click', function () {
    switcher.classList.toggle('black');
    chessboards.forEach(function (board) {
      board.classList.toggle('hidden');
    });
  });

  chessboards[1].classList.add('hidden');
});
