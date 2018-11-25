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
'[FEN "k7/7R/2K5/8/8/8/8/8 w - - 0 1"]' +
'[CurrentPosition "1k5R/8/1K6/8/8/8/8/8 b - - 3 2"]' +
' ' +
'{ Чёрный король уже оттеснён в угол доски, и вырваться в центр он не может,' +
' потому что белая ладья контролирует седьмую горизонталь.' +
' Белый король подключается к атаке: }' +
' 1.Kb6 Kb8 2.Rh8# ' +
'{. Обратите внимание, что в заключительной позиции короли стоят ровно' +
' друг напротив друга через одно поле. ' +
'Такое положение королей называется <i>оппозицией.</i> }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 47-1',
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