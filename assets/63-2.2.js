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
'[FEN "4k3/8/4K3/4P3/8/8/8/8 b - - 0 1"]' +
'[CurrentPosition "3k4/5K2/8/4P3/8/8/8/8 b - - 2 2"]' +
' ' +
'{ Позиция, в которой белому королю удалось ' +
'прорваться на шестую горизонталь, а пешка находится у него за спиной, выиграна независимо от очереди хода. Ход чёрных: } 1...Kd8 ( { или } 1...Kf8 2.Kd7! ) 2.Kf7! {; чёрный король вынужден пропустить ' +
'своего коллегу на седьмую горизонталь, после чего тот «за ручку» приводит пешку к полю е8. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 63-2.2',
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