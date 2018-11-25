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
'[FEN "6rk/7r/8/1Q6/8/1K5p/6p1/8 w - - 0 1"]' +
'[CurrentPosition "6rk/7r/8/4Q3/8/1K5p/6p1/8 b - - 1 1"]' +
' ' +
'{ Грозные проходные чёрных вот-вот превратятся в двух ферзей. ' +
'Последний шанс белых – организовать нападение на неприятельского короля: } ' +
'1.Qe5+ Rgg7 2.Qe8+ { (шахи продолжаются) } ' +
'2...Rg8 3.Qe5+ Rhg7 { &nbsp;(чёрные пробуют закрыться другой ладьёй) <br/>} 4.Qh5+ Rh7 5.Qe5+ { , &nbsp;и выясняется, что чёрному королю не спрятаться от вечного преследования. Как только позиция после 1.♕e5+ повторится три раза, можно зафиксировать ничью. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 83-1',
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