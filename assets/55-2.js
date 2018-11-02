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
'[FEN "4r2R/p6P/kpqb1pP1/4p3/4P3/1PP2P2/2KP4/8 w - - 0 1"]' +
'[CurrentPosition "4q3/p5PP/kp1b1p2/4p3/4P3/1PP2P2/2KP4/8 b - - 0 2"]' +
' ' +
'{ У чёрных огромный материальный перевес – ферзь и слон, ' +
'однако две <i>связанные проходные</i> вблизи поля превращения настолько опасны, ' +
'что белые не только спасаются, но и побеждают! После } ' +
'1.Rxe8! Qxe8 2.g7 ' +
'{ белые проводят обе пешки в ферзи и получают в своё распоряжение двух ферзей ' +
'против ферзя и слона чёрных. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 55-2',
      pawn_notation: 'short'
    }
  });

  document.querySelectorAll('.chessBoard__moves *').forEach(function (node) {
    if (!node.children.length && node.textContent) {
      if (node.className === 'moveNumber') {
        node.textContent = ' ' + node.textContent;
      } else if (node.className === 'chessBoard__moveComment') {
        var r = node.textContent.split('').reverse().join('');
        if (!node.textContent.startsWith(',') && !node.textContent.startsWith('.') && !node.textContent.startsWith(';') && !node.textContent.startsWith(':') && !node.textContent.startsWith('!')) {
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