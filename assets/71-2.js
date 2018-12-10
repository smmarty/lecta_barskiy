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
'[FEN "8/pp6/4kp2/8/4K3/8/PP5P/8 w - - 0 1"]' +
'[CurrentPosition "8/pp6/4kp2/8/1P2K3/8/P6P/8 b - b3 0 1"]' +
' ' +
'{ На доске материальное равенство, но у белых <i>отдалённая проходная</i>: ' +
'пешка h2 на две вертикали дальше от ферзевого фланга, ' +
'чем пешка f6. Рано или поздно произойдёт ' +
'обмен проходными, после чего белый король окажется намного ближе к оставшимся ' +
'пешкам. Например: } ' +
'1.b4 f5+ 2.Kf4 Kf6 3.h4 Kg6 4.a4 Kh5 ' +
  '(' +
    ' { (если } 4...Kf6 { , то } 5.h5 {)}' +
  ') ' +
'5.Kxf5 Kxh4 6.Ke5 Kg4 7.Kd6 { с выигрышем белых. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 71-2',
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
        // node.textContent += ' ';
      }
    }
  });
})();