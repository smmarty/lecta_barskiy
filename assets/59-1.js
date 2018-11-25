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
'[FEN "8/5ppp/8/5PPP/8/k7/8/K7 w - - 0 1"]' +
'[CurrentPosition "8/5ppp/6P1/5P1P/8/k7/8/K7 b - - 0 1"]' +
' ' +
'{ Короли находятся вдали от своих пешек, но чёрный король чуть ближе, ' +
'и если он придёт на королевский фланг, то уничтожит все пешки соперника. ' +
'Однако белые могут осуществить <i>прорыв:</i> они жертвуют две пешки ради того, ' +
'чтобы провести третью в ферзи: } ' +
'1.g6! fxg6 ' +
  '(' +
    ' { или } 1...hxg6 2.f6! gxf6 3.h6 { с выигрышем. }' +
  ')' +
' 2.h6! gxh6 3.f6  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 59-1',
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