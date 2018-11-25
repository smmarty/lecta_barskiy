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
'[FEN "1k2r3/1p1r4/p7/3p3q/3P4/5Q2/PP6/K4RR1 b - - 0 1"]' +
'[CurrentPosition "1k6/1p1r4/p7/3p4/3P4/5q2/PP6/K3R1R1 w - - 0 3"]' +
' ' +
'{ Важно разглядеть, что ладья f1 <i>перегружена</i> работой:' +
' она не только защищает ферзя, но и оберегает короля от мата по первой ' +
'горизонтали. После } ' +
'1...Re1+! { ладья уже не справляется со всеми своими задачами: } ' +
'2.Rxe1 Qxf3 { , и чёрные выигрывают ферзя за ладью. ' +
'Запомните эту типичную комбинацию! }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 35-3',
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