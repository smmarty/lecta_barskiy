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
'[FEN "6k1/6p1/5b2/8/8/8/5QPr/4K3 b - - 0 1"]' +
'[SetUp "1"]' +
'[CurrentPosition "6k1/6p1/5b2/8/8/6P1/5K2/8 w - - 1 4"]' +
' ' +
'{ Ходом } 1...Bh4 { &nbsp;чёрные <i>связывают</i> &nbsp;ферзя f2 ' +
'(за его спиной укрылся король). Единственная защита от связки – } 2.g3 { , но тогда чёрные забирают ферзя ладьёй } 2...Rxf2 { и после } 3.Kxf2 Bf6 { остаются с лишней фигурой. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 3-3',
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