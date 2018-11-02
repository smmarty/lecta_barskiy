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
'[FEN "2kq4/ppp3p1/3P4/8/7r/8/P5PP/3Q1RK1 w - - 0 1"]' +
'[CurrentPosition "1k1Q1q2/ppp3p1/8/8/7r/8/P5PP/3Q2K1 b - - 1 3"]' +
' ' +
'{ Сильная проходная пешка, поддержанная ферзём и ладьёй, ' +
'помогает белым добиться решающего преимущества. } ' +
'1.d7+ Kb8 ' +
  '(' +
    ' { На } 1...Qxd7 { следует } 2.Rf8+ {. }' +
  ') ' +
'2.Rf8! { Чтобы расчистить дорогу проходной, белые жертвуют ладью. } ' +
'2...Qxf8 3.d8=Q+ { , и мат следующим ходом. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 59-3',
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