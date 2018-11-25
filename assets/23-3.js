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
'[FEN "8/pQ4p1/2pp1p2/k7/4Pq2/2P2Pp1/PP4P1/6K1 w - - 0 1"]' +
'[CurrentPosition "8/6p1/2Qp1p2/8/1P2Pq2/2Pk1Pp1/P5P1/6K1 w - - 1 5"]' +
' ' +
'{<br/>}1.b4+!' +
  '(' +
      '{ У белых много заманчивых возможностей, например}' +
      '1.Qxa7+' +
   ')' +
   '(' +
    '{или} 1.Qb4+ {. Надо хорошенько подумать и найти лучшее продолжение.} ' +
   ')' +
'1...Ka4' +
'2.Qa6# {.} ' +
  '( ' +
    '{. Теперь белые не должны жадничать, забирая пешки: после } 2.Qxc6+ Ka3 3.Qa6+ Kb2 ' +
  ')' +
  '(' +
    '{, а если } 2.Qxa7+ { , то } 2...Kb5 3.Qb7+ Kc4 4.Qxc6+ Kd3 { , и чёрный король убегает. А можно выиграть сразу: <br/> } ' +
  ')  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 23-3',
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

  window.swapMoves([['m0','#chessBoard__move1']]);
  window.swapMoves([['m0', '#chessBoard__move2']]);
  window.swapMoves([['m4', 'v5']]);
  document.querySelector('#chessBoard__move3 .moveNumber').remove();
})();