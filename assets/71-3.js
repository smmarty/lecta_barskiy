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
'[FEN "k7/P7/7p/1K4p1/6P1/8/8/8 w - - 0 1"]' +
'[CurrentPosition "8/6k1/8/6K1/6P1/8/8/8 w - - 1 8"]' +
' ' +
'1.Kb6! {}' +
  '( ' +
    '{ Если сразу отправить короля поедать пешки, ' +
    'то чёрные спасаются темп в темп: } ' +
    '1.Kc6 Kxa7 2.Kd6 Kb7 3.Ke6 Kc7 4.Kf6 Kd7 5.Kg6 Ke7 6.Kxh6 Kf7 7.Kxg5 Kg7! ' +
    '{ с ничьей. Вместо этого надо поставить чёрного короля в патовое положение – } ) ' +
'{Ответ единственный – } 1...h5 {, а тогда после } 2.gxh5 g4 3.h6 g3 4.h7 g2 5.h8=Q { чёрные получают мат. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 71-3',
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
  // document.querySelector('#chessBoard__move15 .moveNumber').remove();
})();