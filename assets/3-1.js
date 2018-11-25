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
'[FEN "r1k5/8/8/2p2n2/8/8/6P1/1R1B2K1 w - - 0 1"]' +
'[SetUp "1"]' +
'[CurrentPosition "r1k5/8/8/2p2n2/6B1/8/6P1/1R4K1 b - - 1 1"]' +
' ' +
'{ Ходом } 1.Bg4 { &nbsp;белые нападают на коня f5. ' +
'Конь не может никуда отойти, потому что ' +
'тогда под удар попадёт король с8. Таким ' +
'образом, белый слон связал чёрного коня, ' +
'и это <i>полная связка.</i> Легко убедиться, что ' +
'защитить своего коня чёрные никак не могут. Поэтому благодаря <i>связке</i> &nbsp;белые выигрывают фигуру. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 3-1',
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