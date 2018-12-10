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
'[FEN "4r3/kp4Qp/8/P7/3n3P/2N3P1/1P1r2P1/6K1 b - - 0 1"]' +
'[CurrentPosition "8/kp4Qp/8/P7/7P/2N2nP1/1P1r2P1/4r2K w - - 3 3"]' +
' ' +
'{Гораздо сильнее} 1...Nf3+! ' +
'{<br/> Жертвуя коня, чёрные вынуждают соперника расчистить вторую горизонталь,' +
' которую контролирует их ладья d2.}' +
  '(' +
    ' { Если начать с шаха } 1...Re1+ ' +
    '{ , то после } 2.Kh2 Nf3+ 3.Kh3 Rh1+ ' +
    '{ белый король убежит на g4. } ' +
  ')' +
' {После} 2.gxf3 ' +
  '( ' +
    '{ Не помогают и } 2.Kf1' +
    '(' +
      '{или }2.Kh1' +
    ' )' +
    '{из-за }2...Re1# {.}' +
  ')' +
' 2...Re1# { &nbsp; белые получают <i>линейный мат.</i> }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 43-2',
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
  window.swapMoves([['m0', 'v1']]);
  window.swapMoves([['v7', 'm10']]);
    document.querySelector('#chessBoard__move10 .moveNumber').remove();
})();