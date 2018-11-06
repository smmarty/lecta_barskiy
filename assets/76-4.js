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
'[FEN "8/2k5/1p6/4K3/1P6/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/1k6/8/1K6/1P6/8/8/8 w - - 1 4"]' +
' ' +
'{ Первым делом надо зафиксировать пешку на шестой горизонтали: } ' +
'1.b5! ' +
    '(' +
      '{  Тема «активный король» заслуживает более глубокого изучения. ' +
      'Если в позиции на диаграмме сразу отправиться королём за пешкой b6 – } ' +
      '1.Kd5? { , то чёрные спасаются: } ' +
      '1...b5! 2.Kc5 Kc8! 3.Kxb5 Kb7! ' +
    ') ' +
'1...Kd7 2.Kd5 Kc7 3.Ke6 {, &nbsp;}' +
'{ и белые выигрывают точно так же как в предыдущем примере. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 76-4',
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
  document.querySelector('#chessBoard__move7 .moveNumber').remove();
})();