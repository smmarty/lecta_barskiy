(function () {
  var pgn = '[Event "?"]' +
'[Site "?"]' +
'[Date "????.??.??"]' +
'[Round "?"]' +
'[White "?"]' +
'[Black "?"]' +
'[Result "*"]' +
'[WhiteElo ""]' +
'[BlackElo ""]' +
'[ECO ""]' +
'[SetUp "1"]' +
'[FEN "6k1/6p1/6rp/p2n4/P6r/4R3/7B/5R1K w - - 0 1"]' +
'[CurrentPosition "4R1k1/6p1/6rp/p2n4/P6r/8/7B/5R1K b - - 1 1"]' +
' ' +
'{ Две лишние пешки плюс активное расположение принесли бы чёрным лёгкую победу, если бы у белых не нашлось эффектной комбинации с жертвой двух ладей: } 1.Re8+ Kh7 2.Rh8+! Kxh8 3.Rf8+ Kh7 4.Rh8+! Kxh8 {. Пат на доске: король, слон и пешка белых не имеют ни одного хода. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 79-2',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        var r = node.textContent.split('').reverse().join('');
        if (!node.textContent.startsWith(')') && !node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
          node.textContent = ' ' + node.textContent;
        }
        if (!r.startsWith('.')) {
          node.textContent += ' ';
        }
      } else if (node.className !== 'moveNotation') {
        node.textContent += ' ';
      }
    }
  });
})();