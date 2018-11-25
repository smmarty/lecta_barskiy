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
'[FEN "8/7K/4k3/8/8/8/8/2r5 b - - 0 1"]' +
'[CurrentPosition "7K/5k2/8/8/8/8/8/7r w - - 3 3"]' +
' ' +
'{ Белый король уже оттеснён на край доски, ' +
'а чёрный должен расположиться через одну ' +
'линию от него (в данном случае – на вертикали «f»), иначе мат не поставить: }' +
'1...Kf7! ' +
'2.Kh6' +
      ' (' +
        ' {Теперь на } 2.Kh8 { следует } 2...Rh1# {, поэтому король пытается вырваться с края доски – }' +
      ')' +
'{. Однако ходом } 2...Rc5! { ладья отрезает королю пути к бегству.' +
' Приходится возвращаться: } 3.Kh7 Rh5# {.}  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 47-3',
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
  window.swapMoves([['m1', 'v2']]);
})();