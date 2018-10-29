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
'[FEN "1r1q1rk1/1p3ppp/2b1p3/8/8/1P1B4/2P1QPPP/3R1RK1 w - - 0 1"]' +
'[CurrentPosition "1r1R1r2/1p3ppk/2b1p3/8/8/1P6/2P1QPPP/5RK1 b - - 0 2"]' +
' ' +
'{ Подобная ситуация случается сплошь и рядом. Белая ладья расположена на одной открытой линии с чёрным ферзём, а разделяет их только слон d3. Может ли слон отскочить куда-нибудь с темпом, то есть создавая опасную угрозу? Да: он может <i>напасть</i> на короля. После } 1.Bxh7+! Kxh7 2.Rxd8 { белые выигрывают ферзя и пешку за ладью и слона. Это очень выгодный для ' +
'белых размен. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 39-2',
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
})();