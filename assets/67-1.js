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
'[FEN "8/4p3/8/5P2/3k3P/8/8/1K6 w - - 0 1"]' +
'[CurrentPosition "8/4K3/8/5k2/8/8/8/8 w - - 0 9"]' +
' ' +
'1.f6! ' +
  '(' +
    ' { Чёрный король находится в квадрате пешки h4, и успевает её задержать после } ' +
    '1.h5 Ke5 2.h6 Kf6 ' +
    '{. Например: } ' +
    '3.Kc2 Kf7 4.Kd3 Kg8 5.Ke4 Kh7 6.Ke5 Kxh6 7.Ke6 Kg5 8.Kxe7 Kxf5 ' +
    '{ – ничья. Однако белые могут создать помеху на пути короля: } ' +
  ') ' +
'1...exf6 2.h5 Ke5 ' +
  '(' +
    ' { Не помогает и } 2...f5 3.h6 f4 4.h7 f3 5.h8=Q+ ' +
  ') ' +
'3.h6 { , и пешка проскакивает в ферзи. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 67-1',
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
  window.swapMoves([['m0', 'v1']]);
  document.querySelector('#chessBoard__move17 .moveNumber').remove();
  window.swapMoves([['v20', 'm26']]);
})();