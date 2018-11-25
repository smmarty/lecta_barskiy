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
'[FEN "8/8/5k2/1R6/8/8/8/R3K3 w Q - 0 1"]' +
'[CurrentPosition "R2k4/1R6/8/8/8/8/8/4K3 b - - 5 3"]' +
' ' +
'{ Ладья b5 отрезает чёрному королю дорогу в центр, а вторая ладья объявляет шах: } 1.Ra6+ {. Королю приходится отступать ближе к краю доски: } 1...Ke7 {. Теперь ладья а6 выступает в роли сторожа&nbsp; (отрезает чёрного короля по шестой горизонтали), а ладья b5 нападает: } 2.Rb7+ {. Король вынужден уйти ' +
'на край доски – } 2...Kd8 {, после чего следует } 3.Ra8# {. Это <i>линейный мат</i>. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 43-1',
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