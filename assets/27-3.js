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
'[FEN "2r1q1r1/2p2kpp/Q4p2/7N/8/1b3R1P/1P3PPK/6R1 w - - 0 1"]' +
'[CurrentPosition "2r1q1r1/2p2k1p/5Q2/7N/8/1b5P/1P3PPK/6R1 b - - 0 2"]' +
' ' +
'{ Оборона взламывается с помощью жертвы ладьи. <br/>} ' +
'1.Rxf6+! gxf6 {.} ' +
  '(' +
    '{ Бегство короля безрадостно: } 1...Ke7 2.Re1+ Kd8 3.Rxe8+ { , и белые ' +
  'выигрывают ферзя. } ' +
  ')' +
' {<br/>}2.Qxf6# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 27-3',
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
})();