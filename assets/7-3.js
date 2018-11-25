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
'[FEN "5r2/kp5p/p3p3/3qPb2/3P2P1/7P/PB3Q2/K2R4 b - - 0 1"]' +
'[CurrentPosition "5Q2/kp5p/p3p3/4P3/3P2P1/7P/qB6/Kb1R4 w - - 0 3"]' +
' ' +
'{ Слон f5 связан ферзём f2 и атакован пешкой g4, но это <i>неполная связка,</i> поскольку ' +
'на f8 стоит ладья, а не король. Слон может ' +
'отскочить – } 1...Bb1! { Если теперь белые ' +
'побьют ладью – } 2.Qxf8 { , то получат мат: } ' +
      '(' +
      '{Если же белые побьют слона – }' +
      '2.Kxb1 {, то потеряют ферзя – } 2...Rxf2 {.}' +
      ')' +
'2...Qxa2# {. }   *';


  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 7-3',
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
  window.swapMoves([['v2', 'm4']]);
})();