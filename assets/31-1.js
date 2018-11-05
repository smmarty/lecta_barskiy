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
'[FEN "1k6/ppp3qp/4r3/4p2Q/4P3/P7/1PP4P/1K3R2 w - - 0 1"]' +
'[CurrentPosition "1k3R2/ppp1r3/8/4p3/4P3/P7/1PP4P/1K6 b - - 1 3"]' +
' ' +
'{ У чёрного короля нет <i>форточки</i>, а значит, ' +
'любой шах по восьмой горизонтали будет ' +
'для него смертельным. Но пока что поле f8, ' +
'куда мечтает проникнуть белая ладья, защищает ферзь g7. С помощью жертвы белые ' +
'<i>отвлекают</i> его от защиты. <br/> }' +
' 1.Qxh7! ' +
'{ <i>Отвлекающая жертва</i> ферзя. Теперь на } 1...Qxh7 { следует } ' +
      '(' +
        '{ <br/>Не помогает и } 1...Qe7 2.Qxe7 Rxe7 3.Rf8+ { и мат следующим ходом. } ' +
      ')' +
'2.Rf8+ Re8 3.Rxe8# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 31-1',
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
  window.swapMoves([['v2', 'm6']]);
  window.swapMoves([['v2', 'm7']]);
  window.swapMoves([['v2', 'm8']]);
})();