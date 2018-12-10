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
'[FEN "3r1k2/pp3pp1/1b6/6Nq/P2n4/2N1R1BP/1PP1RPP1/6K1 w - - 0 1"]' +
'[CurrentPosition "4R1k1/pp3pp1/1b1B4/6Nq/P2n4/2N4P/1PP2PP1/6K1 b - - 0 3"]' +
' ' +
'{ Мат по восьмой (первой) горизонтали – это ' +
'частный случай <i>линейного мата.</i> Пока что ' +
'поле е8 защищено дважды – ладьёй и&nbsp;королём. Ходом } ' +
'1.Bd6+! { белые отвлекают ладью от обороны: } ' +
'1...Rxd6 ' +
  '(' +
    ' { Не&nbsp;помогает и } 1...Kg8 2.Re8+ Rxe8 3.Rxe8# {. Поля f7 и g7 отнимают у короля собственные пешки, а поле h7 – белый конь g5.}' +
  ')' +
'2.Re8# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 43-3',
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
  window.swapMoves([['v2', 'm6']]);
})();