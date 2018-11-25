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
'[FEN "8/pp3pk1/8/8/6b1/PP1p4/4rPP1/K3RR2 b - - 0 1"]' +
'[CurrentPosition "8/pp3pk1/8/8/6b1/PP6/3p1PP1/K3R3 w - - 0 3"]' +
' ' +
'{ У белых лишнее качество, а у чёрных взамен – мощная <i>проходная,</i> ' +
'&nbsp;поддержанная ладьёй и слоном. После } 1...Rxe1+! 2.Rxe1 d2 ' +
'{ белым приходится отдать за эту пешку ладью, ' +
'поскольку слон g4 контролирует поле превращения d1. ' +
'В&nbsp;результате чёрные остаются с лишней фигурой и должны довести свой перевес до победы. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 55-3',
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