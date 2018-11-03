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
'[FEN "8/4k3/8/4K3/4P3/8/8/8 b - - 0 1"]' +
'[CurrentPosition "8/3k1K2/8/4P3/8/8/8/8 b - - 0 5"]' +
' ' +
'{ Оценка позиции зависит от очереди хода. ' +
'При своём ходе чёрные вынуждены пропустить вперёд короля соперника: } 1...Kf7 2.Kd6! Ke8 ' +
  '(' +
    ' { (если } 2...Kf8 { , то белый король сразу проникает на седьмую горизонталь: }' +
    ' 3.Kd7 Kf7 4.e5 { и т. д.) } ' +
  ') ' +
'3.Ke6 Kd8 4.Kf7 Kd7 5.e5 { , и пешка проходит в ферзи. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 64-4',
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