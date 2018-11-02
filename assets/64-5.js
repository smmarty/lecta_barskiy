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
'[FEN "8/4k3/8/4K3/4P3/8/8/8 w - - 0 1"]' +
'[CurrentPosition "4k3/4P3/4K3/8/8/8/8/8 b - - 2 11"]' +
' ' +
'{ При ходе белых чёрные спасаются, но они должны играть очень точно: } ' +
'1.Kd5 Kd7! { (нельзя пропустить белого короля вперёд) } ' +
'2.Ke5 Ke7 3.Kf5 Kf7! 4.e5 Ke7 5.e6 Ke8! ' +
'{ Важнейший ход: король отступает по той же линии, где идёт пешка} ' +
  '(' +
    ' {. В случае } 5...Kf8? 6.Kf6 Ke8 7.e7 Kd7 8.Kf7 { белые выигрывают } ' +
  ')' +
' 6.Kf6 Kf8 7.Ke5 Ke7 8.Kd5 Ke8! 9.Kd6 Kd8 10.e7+ Ke8 11.Ke6 { – пат, ничья. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 64-5',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        // var r = node.textContent.split('').reverse().join('');
        // if (!node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
        //   node.textContent = ' ' + node.textContent;
        // }
        // if (!r.startsWith('.')) {
        //   node.textContent += ' ';
        // }
      } else if (node.className !== 'moveNotation') {
        node.textContent += ' ';
      }
    }
  });
})();