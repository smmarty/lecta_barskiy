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
'[FEN "k7/p4pr1/4p3/4q3/1Q6/6P1/5P2/1R3RK1 b - - 0 1"]' +
'[CurrentPosition "k7/p4p2/4p3/4q3/1Q6/6r1/5P2/1R3RK1 w - - 0 2"]' +
' ' +
'{ У чёрных не хватает целой ладьи, но они могут спастись, если отдадут ' +
'и вторую свою тяжёлую фигуру: } ' +
'1...Rxg3+! 2.fxg3 ' +
  '(' +
    '{, и ферзь готов объявлять шахи до бесконечности. ' +
    'Уклониться от ничьей белые никак не могли: в случае } 2.Kh2? Rg4+! ' +
    '{ (вскрытый шах) } 3.Kh3 Qh5# ' +
    '{ вместо вечного шаха они получают линейный мат.}' +
  ')' +
'2...Qxg3+ 3.Kh1 Qh3+ 4.Kg1 Qg3+  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 83-3',
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
    window.swapMoves([['v2', 'm9']]);
    window.swapMoves([['v2', 'm10']]);
    document.querySelector('#chessBoard__move6 .moveNumber').remove();
})();