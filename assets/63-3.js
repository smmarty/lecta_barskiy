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
'[FEN "k7/8/K7/P7/8/8/8/8 w - - 0 1"]' +
'[CurrentPosition "k7/P7/1K6/8/8/8/8/8 b - - 0 3"]' +
' ' +
'{ Пешки, расположенные на вертикалях «а» и «h», называются <i>крайними пешками</i> &nbsp;(они идут по краю доски). Их не удаётся провести в ферзи, если на пути встаёт неприятельский король. Допустим, ход белых. После } 1.Kb6 Kb8 2.a6 Ka8 3.a7 { получается пат: у чёрного короля нет ещё одного поля на седьмой горизонтали, потому что доска закончилась. }  *';

  window.loadPlayer({
    id: 1,
    player: {
      pgn: pgn,
      title: 'Диаграмма 63-3',
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