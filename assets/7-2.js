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
'[FEN "1k6/2p2r2/1pr1p3/7p/1R4b1/2P2N2/1P2KP2/R7 w - - 0 1"]' +
'[CurrentPosition "1k4R1/2p5/1pr1p3/7p/8/2P2r2/1P2KP2/R7 b - - 1 2"]' +
' ' +
'{ Чтобы спасти коня f3, белые бьют слона – } 1.Rxg4 { . После } 1...hxg4 ' +
'{ <i>связки</i> больше нет, ' +
'конь может прыгнуть в центр – } ' +
      '(' +
        '{ <br/>Попытка отыграть фигуру } 1...Rxf3 ' +
            '{не проходит из-за промежуточного шаха}' +
            '2.Rg8+ {.}' +
      ')' +
        '(' +
          '{(c идеей} 1...Rxf3 2.Kxf3 hxg4+ {)}' +
        ')' +

'2.Ne5! { <br/>Это двойной удар, с помощью которого белые выигрывают одну из ладей и остаются ' +
'в итоге с лишним конём. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 7-2',
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

  window.swapMoves([['v2', 'm7'], ['#chessBoard__move2 .chessBoard__moveComment:last-child', 'v4']]);
})();