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
'[FEN "8/8/2p5/1p1k4/1P1r4/3R4/2K5/8 w - - 0 1"]' +
'[CurrentPosition "8/8/2p5/1p1k4/1P1r4/2KR4/8/8 b - - 1 1"]' +
' ' +
'1.Kc3!' +
  '( ' +
    '{ Переход в пешечное окончание выглядит безрадостно: } ' +
    '1.Rxd4+ Kxd4 2.Kb3 Kd3 3.Ka2 Kc4 4.Ka3 Kc3 { , после чего чёрные выигрывают. } ) ' +
  '( ' +
    '{ Не спасает и } 1.Rb3 Kc4 2.Rc3+ Kxb4 3.Rxc6 Rc4+! 4.Rxc4+ Kxc4 {. <br/>}' +
    '{Что же делать? Надо менять ладьи, но на своих условиях! }' +
  ') ' +
'1...Rxd3+ 2.Kxd3 Ke5 3.Ke3 Kf5 4.Kf3 {. Оттеснить белого короля не удаётся, а после } 4...Ke5 5.Ke3 Kd5 6.Kd3 c5 7.bxc5 Kxc5 8.Kc3 { получается ничья. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 75-2',
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
})();